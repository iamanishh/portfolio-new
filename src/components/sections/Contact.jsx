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
      <p>That’s a wrap? Maybe not.</p>
      <div className="contact-heading">
        <h2 className="title-med">
          Great things start with a 'Hello'!
          <span className="smiley">
            <img src="/images/smiley.gif" alt="smiley" />
          </span>
        </h2>
      </div>

      <div className="desc">
        <p className="top">
          Open to conversation 🗣️, collaboration 🤝, and creative challenges 🎨.
        </p>

        <p className="bottom">
          Have something exciting in mind? Let’s make it happen — share it here.
        </p>
      </div>

      <div className="btn-round-med contact__details-info">
        <span>
          <MdEmail />
        </span>
        <p>mmm.manish163@gmail.com</p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  return (
    <div className="contact__form">
      <div className="contact__form-field">
        <label htmlFor="name">What is your name ?</label>
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

      <button className=" btn btn-circle" type="submit">
        Submit
      </button>
    </div>
  );
};

export default Contact;
