import { useNavigate } from "react-router-dom";
import MainHeader from "../components/MainHeader";

export default function ErrorPage() {
  const navigation = useNavigate();

  const navHandler = () => {
    navigation("/");
  };

  return (
    <>
      <MainHeader />
      <main>
        <h1>Error page</h1>
        <p>Page error is occured</p>
        <p>
          <button onClick={navHandler}>Home page</button>
        </p>
      </main>
    </>
  );
}
