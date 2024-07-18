import React from "react";
import "./contact.scss";

import { useForm } from "react-hook-form";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);

    //logic starts here for implemenetation
  };

  return (
    <section className="contact">
      <div className="contact__header">
        <h2>Interested in talking,</h2>
        <h2>let’s do it.</h2>
        <p>
          I am always open to discuss or collaborate for any interesting
          projects &nbsp;
        </p>
      </div>
      <div className="contact__form">
        <div className="contact__form-left">
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="box">
              <label htmlFor="name">What's your name?</label>
              <input
                type="text"
                id="name"
                placeholder="John doe"
                {...register("name", { required: "Name is required" })}
              />
              {errors.name && <p>{errors.name.message}</p>}
            </div>
            <hr />
            <div className="box">
              <label htmlFor="email">What's your Email?</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="practice@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && <p>{errors.email.message}</p>}
            </div>
            <hr />

            <div className="box">
              <label htmlFor="message">What's your message?</label>
              <textarea
                name="message"
                placeholder="Messages"
                id="message"
                cols="20"
                rows="7"
                {...register("message", { required: "Message is required" })}
              />
              {errors.message && <p>{errors.message.message}</p>}
            </div>
            <hr />

            <button className="btn-round" type="submit">
              Send
            </button>
          </form>
        </div>
        <div className="contact__form-right">
          <div className="emails">
            <p className="tiny">CONTACT DETAILS</p>
            <a href="mailto:mmm.maish163@gmail.com">mmm.maish163@gmail.com</a>
            <p>Phone: +91 9430017091</p>
          </div>
          <div className="social">
            <p className="tiny">SOCIALS</p>
            <a href="#github.com">GitHub</a>
            <a href="#linkedIn.in">LinkedIn</a>
            <a href="#x.com">Twitter</a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
