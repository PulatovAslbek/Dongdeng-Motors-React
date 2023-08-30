import React from "react";
import "./Partners.css";
import Airfrance from "../../../assets/images/partners-img/Airfrance.png";
import Versace from "../../../assets/images/partners-img/Versace.png";
import Costa from "../../../assets/images/partners-img/Costa.png";
import Mers from "../../../assets/images/partners-img/Mercedes-Benz.png";
import LastImg from "../../../assets/images/partners-img/Last-Part.png";

function Partners() {
    return (
        <section className="partners container">
            <h2 className="partners__title">OFFICIAL SUPPLIERS</h2>
            <div className="partners__box">
                <img className="partners-img" src={Airfrance} alt="Airfrance" />
                <img className="partners-img" src={Versace} alt="Versace" />
                <img className="partners-img" src={Costa} alt="Costa" />
                <img className="partners-img" src={Mers} alt="Mercedes-Benz" />
                <img className="partners-img" src={LastImg} alt="brand" />
            </div>
        </section>
    );
}

export default Partners;
