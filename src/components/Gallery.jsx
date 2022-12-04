import React from "react";
import images from "../galleryData";
import { useState, useEffect } from "react";

const Gallery = () => {
  const [currentImage, setCurrentImage] = useState(0);

  const toggleCarousel = () => {
    document.querySelector("#carousel").classList.toggle("show");
  };

  return (
    <section
      id="gallery"
      className="flex flex-col justify-around items-center w-full bg-[#151515]"
    >
      <div
        id="carousel"
        onClick={toggleCarousel}
        class="fixed justify-center items-center top-0 bottom-0 left-0 right-0 backdrop-blur-md bg-black/30 hidden z-50"
      >
        <div class="w-2/4 h-3/4 flex justify-center items-center object-contain">
          <img src={images[currentImage].src} />
        </div>
      </div>
      <h1 className="w-[80vw] lg:w-3/4 pt-4 sm:px-4 text-left">Gallery</h1>
      <div className="grid xl:grid-cols-5 grid-cols-3 w-[80vw] lg:w-3/4 sm:p-4 py-6 gap-6">
        {images.map((i) => (
          <div
            className="flex flex-col transition-all h-32 justify-center items-center"
            key={i.id}
          >
            <img
              src={i.src}
              onClick={() => setCurrentImage(i.id) & toggleCarousel()}
              className="w-full h-full object-contain"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery;
