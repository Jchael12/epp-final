import Nav from "./components/Nav";
import bgImage from "./assets/updatebg.png";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <div
        style={{
          backgroundImage: `url(${bgImage})`,
        }}
        className="font-lexend bg-cover bg-center bg-no-repeat w-full transition duration-500 ease-in-out dark:text-stone-300"
      >
        <div className="md:mx-auto md:w-full min-h-screen">
          <Nav />
          <Outlet />
        </div>
      </div>
    </>
  );
}

export default App;
