import growBox from "../../images/grow-box.png";
import img3 from "../../images/img3.png";
import chanto from "../../images/Niko.png";
import { useState, useEffect, useCallback } from "react";
import React from "react";

const images = [growBox, img3, chanto];

export default function ImageSwapper() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (currentImage >= images.length - 1) {
        setCurrentImage(0);
      } else {
        setCurrentImage((x) => x + 1);
      }
      console.log(currentImage);
    }, 2000);

    return () => clearTimeout(timeoutId);
  }, [currentImage]);

  return (
    <div>
      <img width={500} height={500} src={images[currentImage]} alt="growbox" />
    </div>
  );
}
