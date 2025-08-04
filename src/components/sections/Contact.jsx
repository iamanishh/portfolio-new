import React from "react";
import { MdEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
    <section id="contact">
      <div className="contact container">
        <ContactHeading />
        <ContactForm />
      </div>
    </section>
  );
};

const ContactHeading = () => {
  return (
    <div className="contact__details">
      <p className="btn-title">$_contact</p>
      <h2 className="title">
        Interested in talking, <br /> let’s do it.
      </h2>

      <p className="desc">
        Have a project in mind? Looking to discuss or collaborate for any
        project. I'm here for you. Tell me about your project here:-
      </p>
      <div className="contact__details-info">
        <p>
          <span>
            <MdEmail />
          </span>
          mmm.manish163@gmail.com
        </p>
        <p>
          <span>
            <FaWhatsapp />
          </span>
          (123) 456 789 00
        </p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="contact__form">
      <div className="contact__form-field">
        <label htmlFor="name">what is your name ?</label>
        <input type="text" id="name" placeholder="name" />
      </div>
      <div className="contact__form-field">
        <label htmlFor="email">What is your email? </label>
        <input type="email" id="email" placeholder="email" />
      </div>
      <div className="contact__form-field">
        <label htmlFor="message">What is your message ?</label>
        <textarea id="message" placeholder="message"></textarea>
      </div>

      <button className="btn1" type="submit">
        submit
      </button>
    </div>
  );
};

export default Contact;
