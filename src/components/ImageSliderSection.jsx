import React, { useState, useEffect } from "react";
import img1 from "../assets/images/img1.jpg";
import img2 from "../assets/images/img2.jpg";
import img3 from "../assets/images/img3.jpg";
import img4 from "../assets/images/img4.jpg";
import img5 from "../assets/images/img5.jpg";
import img6 from "../assets/images/img6.jpg";
import img7 from "../assets/images/img7.jpg";

export default function AutoImageSlider() {
  const images = [img1, img2, img3, img4, img5, img6, img7];
  const visibleCount = 4;
  const maxIndex = images.length - visibleCount;

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setCurrentIndex((i) => (i < maxIndex ? i + 1 : 0));
    }, 5000);
    return () => clearInterval(id);
  }, [maxIndex]);

  const prev = () => setCurrentIndex((i) => (i > 0 ? i - 1 : maxIndex));
  const next = () => setCurrentIndex((i) => (i < maxIndex ? i + 1 : 0));

  return (
    <section id="gallery" className="py-12 bg-white">
      <div className="container mx-auto px-6 lg:px-8 relative">
        <button
          onClick={prev}
          className="absolute left-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          ‹
        </button>
        <div className="overflow-hidden">
          <div
            className="flex transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${(currentIndex * 100) / visibleCount}%)`,
            }}
          >
            {images.map((src, idx) => (
              <div key={idx} className="flex-shrink-0 w-1/4 p-2">
                <img
                  src={src}
                  alt={`Slide ${idx + 1}`}
                  className="w-full h-48 object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
        </div>
        <button
          onClick={next}
          className="absolute right-0 top-1/2 z-10 -translate-y-1/2 bg-white p-2 rounded-full shadow-md hover:bg-gray-100"
        >
          ›
        </button>
      </div>
    </section>
  );
}
