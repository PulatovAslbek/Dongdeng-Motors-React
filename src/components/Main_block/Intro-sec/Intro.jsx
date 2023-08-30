import React from 'react';
import "./Intro.css";
import circleImg from "../../../assets/lib/circle-progress.svg";

const Intro = () => {
    return (
        <section className="intro">
            <div className="container">
                <div className="intro__text--box">
                    <div className="intro__title--box">
                        <p className="title--box__desc">NEW</p>
                        <h1 className="title--box__title">DONGFENG <br/> AEOLUS HAOJI</h1>
                    </div>
                    <img className="intro__bg" src={circleImg} alt="circleImg" />
                </div>
                <hr className="intro__break--line" />
                <div className="intro__info--box">
                    <a className="info--box__title" href="#">SHOW MORE</a>
                    <p className="info--box__price">$40 976.23</p>
                </div>
            </div>
        </section>
    );
}

export default Intro;
