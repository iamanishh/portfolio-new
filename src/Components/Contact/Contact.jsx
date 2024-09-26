import React, { useRef } from "react";
import "./contact.scss";
import emailjs from "@emailjs/browser";
import { useForm } from "react-hook-form";
import { GoArrowDownRight } from "react-icons/go";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container contact">
        <ContactHeading />
        <ContactForm />
      </div>
    </section>
  );
};

const ContactHeading = () => {
  return (
    <div className="contact__header">
      <h2 className="section-heading">
        Interested <span className="curs">i</span>n
        <span className="curs"> talking,</span> <br />
        let’s do it.
      </h2>
      <p className="text4">
        Looking to discuss or collaborate for any project.
        <br /> I'm here for you.
      </p>
      <p className="text3">
        Tell me about your project in the form below. If you’d prefer to email
        instead, reach out to &nbsp;
        <span className="underline email">mmm.manish163@gmail.com</span>
        <br />
        <br />
        <span className="text4">/or</span>
      </p>

      <div className="fill-form">
        <GoArrowDownRight className="arrow" />
        <p> (Fill the Form)</p>
      </div>
    </div>
  );
};

const ContactForm = () => {
  const form = useRef();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const SendEmail = (data, e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_k2sao51",
        "template_9f2yery",
        form.current,
        "Vb2XASrKqz0HHJeEF"
      )
      .then(
        () => {
          console.log("Success");
          alert("Message sent successfully");
          reset();
        },
        (error) => {
          console.log("Failed to send", error.text);
          alert("Error sending message");
        }
      );
  };

  return (
    <div className="contact__content">
      <form
        className="contact__form"
        ref={form}
        onSubmit={handleSubmit(SendEmail)}
      >
        <div className="contact__form-field">
          <label htmlFor="name">What's your name?</label>
          <input
            type="text"
            id="name"
            placeholder="Name"
            {...register("name", { required: "Name is required" })}
          />
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>
        <hr />
        <div className="contact__form-field">
          <label htmlFor="email">What's your Email?</label>
          <input
            type="email"
            id="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is required",
              pattern: {
                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                message: "Invalid email address",
              },
            })}
          />
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>
        <hr />
        <div className="contact__form-field">
          <label htmlFor="message">What's your message?</label>
          <textarea
            id="message"
            placeholder="Message"
            cols="16"
            rows="6"
            {...register("message", { required: "Message is required" })}
          />
          {errors.message && <p className="error">{errors.message.message}</p>}
        </div>
        <hr />
        <button className="btn-round" type="submit">
          Send
        </button>
      </form>

      {/* <div className="contact__details">
        <div className="contact__section">
          <h2 className="contact__label">Contact Details</h2>
          <a href="mailto:mmm.maish163@gmail.com">mmm.maish163@gmail.com</a>
          <p>
            Phone: <a href="tel:+919430017091">+91 9430017091</a>
          </p>
        </div>
        <div className="contact__section">
          <h2 className="contact__label">Socials</h2>
          <a
            href="https://github.com/iamanishh"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/iamanishh"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a
            href="https://twitter.com/iamanish__"
            target="_blank"
            rel="noopener noreferrer"
          >
            Twitter
          </a>
        </div>
      </div> */}
    </div>
  );
};

export default Contact;
