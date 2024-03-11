import EventsList from "../components/EventsList";
import { useLoaderData } from "react-router-dom";
import axios from "axios";

function EventsPage() {
  const data = useLoaderData();
  const events = data.events;
  if (data.message) {
    return <p>{data.message}</p>;
  }

  return (
    <>
      <EventsList events={events} />
    </>
  );
}

export default EventsPage;

export const loaderEvents = async () => {
  try {
    const response = await axios.get("http://localhost:8080/events");
    return response.data;
  } catch (error) {
    return { message: "Fetching events failed." };
  }
};
