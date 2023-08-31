import React, { useEffect } from "react";
import "./Model.css";

// -----------*ModelTab images*----------------------------------------------
import car1 from "../../../assets/images/car1.png"
import minivan from "../../../assets/images/minivan.jpg"
import pickup from "../../../assets/images/pickup.jpg"
import bus from "../../../assets/images/dongfeng-coach-bus-2.jpg"
import truck from "../../../assets/images/truck.jpg"
import special from "../../../assets/images/special.png"

// -----------*images that replace text when it comes to phone size*----------------------------------------------------
import minicar1 from "../../../assets/lib/mdi_car-suv.svg"
import minivan2 from "../../../assets/lib/mdi_van-utility.svg"
import minipickub3 from "../../../assets/lib/mdi_car-pickup.svg"
import minibus4 from "../../../assets/lib/mdi_bus.svg"
import minitruck5 from "../../../assets/lib/mdi_truck.svg"
import ministar from "../../../assets/lib/mdi_folder-star.svg"



const ModelComponent = () => {
  useEffect(() => {
    const modelItems = document.querySelectorAll(".model-tabs__items");
    const modelContents = document.querySelectorAll(".model-content");
    const mediaQuery = window.matchMedia("(max-width: 660px)");

    const hideModelContent = () => {
      modelContents.forEach((item) => {
        item.classList.add("hide", "fade");
      });
      modelItems.forEach((item) => {
        item.classList.remove("model-tabs__items-active");
      });
    };

    const showModelContent = (index = 0) => {
      modelContents[index].classList.add("show", "fade");
      modelContents[index].classList.remove("hide");
      modelItems[index].classList.add("model-tabs__items-active");
    };

    hideModelContent();
    showModelContent();

    modelItems.forEach((item, index) => {
      item.addEventListener("click", () => {
        hideModelContent();
        showModelContent(index);
      });
    });

    const updateModelContent = () => {
      const attribute = mediaQuery.matches
        ? "data-image"
        : "data-original-text";

      modelItems.forEach((item) => {
        const content = item.getAttribute(attribute);
        item.innerHTML = mediaQuery.matches
          ? `<img src="${content}" alt="${item.textContent}" />`
          : content;
      });
    };

    modelItems.forEach((item) => {
      item.setAttribute("data-original-text", item.textContent);
    });

    mediaQuery.addEventListener("change", updateModelContent);
    updateModelContent();
  }, []);

  return (
    <section className="model-tabs container">
      <div className="modal-tabs__box">
        <h2 className="model-tabs__title">RECOMMENDED MODELS</h2>
        <ul className="model-tabs__list">
          <li
            data-image={minicar1}
            className="model-tabs__items model-tabs__items-active"
          >
            Car & SUV
          </li>
          <li
            data-image={minivan2}
            className="model-tabs__items"
          >
            Minivan & MPV
          </li>
          <li
            data-image={minipickub3}
            className="model-tabs__items"
          >
            Pickup & Offroad
          </li>
          <li
            data-image={minibus4}
            className="model-tabs__items"
          >
            Bus
          </li>
          <li
            data-image={minitruck5}
            className="model-tabs__items"
          >
            Truck
          </li>
          <li
            data-image={ministar}
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
        <img
          className="model-content__img"
          src={car1}
          alt="car1"
        />
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
      <div class="model-content">
                <img class="model-content__img" src={minivan} alt="car2"/>
                <div class="model-content__text-box">
                    <a href="#" class="text-box__btn"><small>C</small>37</a>
                    <p class="text-box__price">$30,586</p>
                </div>
      </div>
      <div class="model-content">
                <img class="model-content__img" src={pickup} alt="car3"/>
                <div class="model-content__text-box">
                    <a href="#" class="text-box__btn"><small>Rich</small>6</a>
                    <p class="text-box__price">$48,428</p>
                </div>
      </div>
      <div class="model-content">
                <img class="model-content__img" src={bus} alt="car4"/>
                <div class="model-content__text-box">
                    <a href="#" class="text-box__btn"><small>S</small>32</a>
                    <p class="text-box__price">$28,558</p>
                </div>
      </div>
      <div class="model-content">
                <img class="model-content__img" src={truck} alt="car5"/>
                <div class="model-content__text-box">
                    <a href="#" class="text-box__btn"><small>KX</small></a>
                    <p class="text-box__price">$55,505</p>
                </div>
      </div>
      <div class="model-content">
                <img class="model-content__img" src={special} alt="car6"/>
                <div class="model-content__text-box">
                    <a href="#" class="text-box__btn"><small>LHD/RHD</small></a>
                    <p class="text-box__price">$42,752</p>
                </div>
      </div>

    </section>
  );
};

export default ModelComponent;
