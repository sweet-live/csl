import React, { useState } from "react";
import "./homecarousel.scss";
import useInterval from "../../hooks/useInterval";
// import { Fade } from "react-slideshow-image";
// import "react-slideshow-image/dist/styles.css";

const HomeCarousel = () => {
  const [indexToShow, setIndex] = useState(0);

  useInterval(() => {
    const shownItem = document.querySelector("div.carousel-item.show");
    const carouselItems = document.querySelectorAll(".carousel-item");
    const lastIndex = carouselItems.length - 1;
    carouselItems.forEach((currentValue, currentIndex, listObj) => {
      if (currentValue === shownItem) {
        if (currentIndex === lastIndex) {
          setIndex(0);
        } else setIndex(currentIndex + 1);

        currentValue.classList.remove("show");
      }
    });
    carouselItems.item(indexToShow).classList.add("show");
  }, 2500);
  return (
    <div id="carousel">
      <div className="carousel-item show">
        <img src="images/car_home1.jpg"></img>
      </div>
      <div className="carousel-item">
        <img src="images/car_home2.png"></img>
      </div>
      <div className="carousel-item">
        <img src="images/car_home3.jpg"></img>
      </div>
    </div>
  );
};

export default HomeCarousel;
