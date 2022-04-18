import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import { PAGES } from "./constants";
import DeviceControlPage from "./pages/deviceControlPage/DeviceControlPage";
import HomePage from "./pages/homePage/HomePage";

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME_PAGE);

  return (
    <div style={{ height: "100%" }}>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      {currentPage === PAGES.HOME_PAGE && <HomePage />}
      {currentPage === PAGES.DEVICE_CONTROL_PAGE ? (
        <DeviceControlPage />
      ) : (
        <></>
      )}
      {currentPage === PAGES.ABOUT_US_PAGE && <></>}
    </div>
  );
}

export default App;
