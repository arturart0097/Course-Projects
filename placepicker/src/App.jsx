import { useCallback, useEffect, useRef, useState } from "react";
import Places from "./components/Places.jsx";
import { AVAILABLE_PLACES } from "./data.js";
import Modal from "./components/Modal.jsx";
import DeleteConfirmation from "./components/DeleteConfirmation.jsx";
import Header from "./components/Header.jsx";
import { sortPlacesByDistance } from "./loc.js";

const storageIds = JSON.parse(localStorage.getItem("currentPlaces")) || [];
const storagePlaces = storageIds.map((id) =>
  AVAILABLE_PLACES.find((places) => places.id === id)
);

function App() {
  const selectedPlace = useRef();
  const [openIsModal, setOpenIsModal] = useState(false);
  const [avaiablePlaces, setAvaiablePlaces] = useState([]);
  const [pickedPlaces, setPickedPlaces] = useState(storagePlaces);

  useEffect(() => {
    setTimeout(() => {
      navigator.geolocation.getCurrentPosition((position) => {
        const newPlaces = sortPlacesByDistance(
          AVAILABLE_PLACES,
          position.coords.latitude,
          position.coords.longitude
        );
        return setAvaiablePlaces(newPlaces);
      });
    }, 500);
  }, []);

  function handleStartRemovePlace(id) {
    setOpenIsModal(true);
    selectedPlace.current = id;
  }

  function handleStopRemovePlace() {
    setOpenIsModal(false);
  }

  function handleSelectPlace(id) {
    setPickedPlaces((prevPickedPlaces) => {
      if (prevPickedPlaces.some((place) => place.id === id)) {
        return prevPickedPlaces;
      }
      const place = AVAILABLE_PLACES.find((place) => place.id === id);
      return [place, ...prevPickedPlaces];
    });

    const storageIds = JSON.parse(localStorage.getItem("currentPlaces")) || [];
    if (storageIds.indexOf(id) === -1) {
      localStorage.setItem(
        "currentPlaces",
        JSON.stringify([id, ...storageIds])
      );
    }
  }

function handleRemovePlace() {
    setPickedPlaces((prevPickedPlaces) =>
      prevPickedPlaces.filter((place) => place.id !== selectedPlace.current)
    );
    setOpenIsModal(false);

    const storageIds = JSON.parse(localStorage.getItem("currentPlaces")) || [];
    if (storageIds) {
      localStorage.setItem(
        "currentPlaces",
        JSON.stringify(storageIds.filter((id) => id !== selectedPlace.current))
      );
    }
  }

  return (
    <>
      <Modal open={openIsModal}>
        <DeleteConfirmation
          onCancel={handleStopRemovePlace}
          onConfirm={handleRemovePlace}
        />
      </Modal>

      <Header />
      <main>
        <Places
          title="I'd like to visit ..."
          fallbackText={"Select the places you would like to visit below."}
          places={pickedPlaces}
          onSelectPlace={handleStartRemovePlace}
        />
        <Places
          title="Available Places"
          places={avaiablePlaces}
          fallbackText="Oops pleace wait..."
          onSelectPlace={handleSelectPlace}
        />
      </main>
    </>
  );
}

export default App;
