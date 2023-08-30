import React, { useState } from "react";
import "./Faq.css";

function Faq() {
  const faqItems = [
    {
      question: "How can I rent an electrical car?",
      answer:
        "Our main electric car model is the Tesla. Thanks to its large glass roof, its 15-inch touchscreen and a range of 614 kilometers, you can leave everyday life behind with the Tesla. Book your supercomputer on wheels today.",
    },
    {
      question: "How to check the status of booking code?",
      answer: "To check the status code of a booking, you would typically need to interact with the system or service that manages the bookings. The status code could indicate whether the booking is confirmed, pending, cancelled, or any other relevant status. take:",
    },
    {
      question: "How do I cancel a rent order?",
      answer: "Cancellation Process: Follow the steps provided by the platform to initiate the cancellation process. This might involve confirming your cancellation request, providing a reason for cancellation, and confirming any associated fees or penalties.",
    },
    {
      question: "How do I make a rent order change?",
      answer: "To make changes to a rent order, such as modifying dates, items, or other details, you'll typically need to follow the order modification process provided by the specific rental service or platform you're using.",
    },
  ];

  const [activeItemIndex, setActiveItemIndex] = useState(null);

  const toggleAcc = (index) => {
    setActiveItemIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <section className="faq container">
      <h2 className="faq__title">
        <span className="color">FAQ.</span> Answer for Questions
      </h2>

      {faqItems.map((item, index) => (
        <div
          key={index}
          className={`faq__item ${
            activeItemIndex === index ? "faq__item--active" : ""
          }`}
        >
          <ul className="faq__list">
            <li className="faq__box" onClick={() => toggleAcc(index)}>
              <span className="faq__caption">{item.question}</span>
              <i className="fa fa-plus fa-2x"></i>
            </li>
            <div className="faq__content">
              <p className="content__desc">{item.answer}</p>
            </div>
          </ul>
        </div>
      ))}
    </section>
  );
}

export default Faq;
