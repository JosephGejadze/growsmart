import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import { PAGES } from "./constants";
import DeviceControlPage from "./pages/deviceControlPage/DeviceControlPage";
import HomePage from "./pages/homePage/HomePage";
import AboutUsPage from "./pages/aboutUsPage/AboutUsPage";
import AppWrapper from "./components/AppWrapper/AppWrapper";

function App() {
  const [currentPage, setCurrentPage] = useState(PAGES.HOME_PAGE);

  return (
    <div>
      <Navbar currentPage={currentPage} setCurrentPage={setCurrentPage} />
      <AppWrapper>
        {currentPage === PAGES.HOME_PAGE && <HomePage />}
        {currentPage === PAGES.DEVICE_CONTROL_PAGE && <DeviceControlPage />}
        {currentPage === PAGES.ABOUT_US_PAGE && <AboutUsPage />}
      </AppWrapper>
    </div>
  );
}

export default App;
