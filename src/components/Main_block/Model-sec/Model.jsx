import { React, useEffect } from "react";
import "./Model.css";
import car1Image from "../../../assets/images/car1.png";
import minivanImage from "../../../assets/images/minivan.jpg";
import pickupImage from "../../../assets/images/pickup.jpg";
import busImage from "../../../assets/images/dongfeng-coach-bus-2.jpg";
import truckImage from "../../../assets/images/truck.jpg";
import specialImage from "../../../assets/images/special.png";

function ModelTabs() {
  
  useEffect(() => {
    const modelItems = document.querySelectorAll(".model-tabs__items");
    const modelContents = document.querySelectorAll(".model-content");
    const mediaQuery = window.matchMedia("(max-width: 660px)");

    function hideModelContent() {
      modelContents.forEach((item) => item.classList.add("hide", "fade"));
      modelItems.forEach((item) =>
        item.classList.remove("model-tabs__items-active")
      );
    }

    function showModelContent(index = 0) {
      modelContents[index].classList.add("show", "fade");
      modelContents[index].classList.remove("hide");
      modelItems[index].classList.add("model-tabs__items-active");
    }

    hideModelContent();
    showModelContent();
    modelItems.forEach((item, index) =>
      item.addEventListener("click", () => {
        hideModelContent();
        showModelContent(index);
      })
    );

    function updateModelContent() {
      const attribute = mediaQuery.matches
        ? "data-image"
        : "data-original-text";

      modelItems.forEach((item) => {
        const content = item.getAttribute(attribute);
        item.innerHTML = mediaQuery.matches
          ? `<img src="${content}" alt="${item.textContent}" />`
          : content;
      });
    }

    modelItems.forEach((item) =>
      item.setAttribute("data-original-text", item.textContent)
    );

    mediaQuery.addEventListener("change", updateModelContent);
    updateModelContent();
  }, []);

  return (
    <section className="model-tabs container">
      <div className="modal-tabs__box">
        <h2 className="model-tabs__title">RECOMMENDED MODELS</h2>
        <ul className="model-tabs__list">
          <li
            data-image="../../../assets/lib/mdi_car-suv.svg"
            className="model-tabs__items model-tabs__items-active"
          >
            Car & SUV
          </li>
          <li
            data-image="../../../assets/lib/mdi_van-utility.svg"
            className="model-tabs__items"
          >
            Minivan & MPV
          </li>
          <li
            data-image="../../../assets/lib/mdi_car-pickup.svg"
            className="model-tabs__items"
          >
            Pickup & Offroad
          </li>
          <li
            data-image="../../../assets/lib/mdi_bus.svg"
            className="model-tabs__items"
          >
            Bus
          </li>
          <li
            data-image="../../../assets/lib/mdi_truck.svg"
            className="model-tabs__items"
          >
            Truck
          </li>
          <li
            data-image="../../../assets/lib/mdi_folder-star.svg"
            className="model-tabs__items"
          >
            Special
          </li>
        </ul>
        <a className="model-tabs__link resize" href="#">
          SHOW MORE
        </a>
      </div>

      <div className="model-content">
        <img className="model-content__img" src={car1Image} alt="car1" />
        <div className="model-content__text-box">
          <a href="#" className="text-box__btn">
            <small>L</small>60
          </a>
          <p className="text-box__price">$14,436</p>
        </div>
        <a className="model-tabs__link resize2" href="#">
          SHOW MORE
        </a>
      </div>
      <div className="model-content">
        <img className="model-content__img" src={minivanImage} alt="minivan" />
        <div className="model-content__text-box">
          <a href="#" className="text-box__btn">
            <small>C</small>37
          </a>
          <p className="text-box__price">$30,586</p>
        </div>
      </div>
      <div className="model-content">
        <img className="model-content__img" src={pickupImage} alt="pickup" />
        <div className="model-content__text-box">
          <a href="#" className="text-box__btn">
            <small>Rich</small>6
          </a>
          <p className="text-box__price">$48,428</p>
        </div>
      </div>
      <div className="model-content">
        <img className="model-content__img" src={busImage} alt="bus" />
        <div className="model-content__text-box">
          <a href="#" className="text-box__btn">
            <small>S</small>32
          </a>
          <p className="text-box__price">$28,558</p>
        </div>
      </div>
      <div className="model-content">
        <img className="model-content__img" src={truckImage} alt="truck" />
        <div className="model-content__text-box">
          <a href="#" className="text-box__btn">
            <small>KX</small>
          </a>
          <p className="text-box__price">$55,505</p>
        </div>
      </div>
      <div className="model-content">
        <img className="model-content__img" src={specialImage} alt="special" />
        <div className="model-content__text-box">
          <a href="#" className="text-box__btn">
            <small>LHD/RHD</small>
          </a>
          <p className="text-box__price">$42,752</p>
        </div>
      </div>
    </section>
  );
}

export default ModelTabs;
