import { useState } from "react";
import Navbar from "./components/Navbar";
import { PAGES } from "./constants";
import DeviceControlPage from "./pages/deviceControlPage/DeviceControlPage";
import HomePage from "./pages/homePage/HomePage";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME_PAGE);

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <div style={{ padding: "3rem 0" }}>
        {currentPage === PAGES.HOME_PAGE && <HomePage />}
        {currentPage === PAGES.DEVICE_CONTROL_PAGE && <DeviceControlPage />}
        {currentPage === PAGES.ABOUT_US_PAGE && <AboutUsPage />}
      </div>
    </div>
  );
}

export default App;
