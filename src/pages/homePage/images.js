import growBox from "../../images/grow-box.png";
import img3 from "../../images/img3.png";
import { useState, useEffect } from "react";
import React from "react";

const images = [growBox, img3];

export default function ImageSwapper() {
  const [currentImage, setCurrentImage] = useState(null);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentImage(images[Math.floor(Math.random() * images.length)]);
    }, 2000);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div>
      <img width={500} height={500} src={currentImage} alt="growbox" />
    </div>
  );
}
