import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState("Uzbekistan");
  const options = ["Uzbekistan", "Russia", "America", "Turkey"];

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionSelect = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <section className="contact">
      <div className="contact__box">
        <h3 className="box__title">CONTACT</h3>
        <form
          className="contact__form"
          action="https://echo.htmlacademy.ru"
          method="post"
        >
          <div className="form__field">
            <input
              id="user-name"
              name="user_name"
              type="text"
              className="form__input"
              placeholder=""
              required
              minLength="3"
            />
            <label htmlFor="user-name" className="form__label">
              Full Name
            </label>
          </div>

          <div className="form__field">
            <input
              id="user-email"
              name="user_email"
              type="email"
              className="form__input"
              value="someone@anywhere.com"
              placeholder=""
              required
              pattern="^([a-z0-9_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$"
            />
            <label htmlFor="user-email" className="form__label">
              Email
            </label>
          </div>

          <div className="form__select form-arrow dropdown">
            <h3 className="form__text">Country</h3>

        <button className="dropdown__btn forms" type="button" onClick={toggleDropdown}>
              {selectedOption}
        </button>
            
            {isOpen && ( 
            <ul className="dropdown__btn-list"> {options.map((option, index) => (
               <li key={index} className="dropdown__btn-item" onClick={() => handleOptionSelect(option)}>
                    {option}
               </li>))}
            </ul>)}
            
          </div>

          <button className="form__submit" type="submit">
            Submit
          </button>
        </form>
      </div>
    </section>
  );
};

const LastLine = () => {
  return <hr className="last-line" />;
};

export { Contact, LastLine };
