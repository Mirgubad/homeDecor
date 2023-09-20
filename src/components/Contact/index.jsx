import "../Contact/contact.css";
import { Form, Formik } from "formik";
import * as Yup from "yup";
import PopUp from "../PopUp";
import React, { useState } from "react";
import SectionTop from "../SectionTop";
import TextAreaYup from "../TextAreaYup";
import TextInputYup from "../TextInputYup";

const Contact = () => {
  const [submitted, setSubmitted] = useState(false);

  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    theme: Yup.string()
      .min(3, "Theme must be at least 3 characters")
      .required("Theme is required"),
    message: Yup.string()
      .min(20, "Message must be at least 20 characters")
      .required("Message is required"),
  });

  return (
    <section className="contact">
      {submitted && (
        <PopUp
          message={"thank YOU!"}
          description={
            "Your message has been received and we will contact you as soon as possible."
          }
        />
      )}
      <div className="container">
        <SectionTop title="Contact" />
        <div className="contact__items ">
          <div className="contact__left">
            <Formik
              initialValues={{
                name: "",
                email: "",
                theme: "",
                message: "",
              }}
              validationSchema={validationSchema}
              onSubmit={(message) => {
                console.table(message);
                setSubmitted(true);
              }}
            >
              <Form className="contactForm">
                <TextInputYup
                  name="name"
                  type="text"
                  placeholder="NAME, SURNAME"
                />

                <TextInputYup
                  type="email"
                  name="email"
                  placeholder="E-mail address"
                />

                <TextInputYup
                  type="text"
                  id="theme"
                  name="theme"
                  placeholder="THEME"
                />
                <TextAreaYup
                  id="message"
                  name="message"
                  placeholder="YOUR MESSAGE"
                ></TextAreaYup>

                <input className="btn send__btn" type="submit" value="Send" />
              </Form>
            </Formik>
          </div>
          <div className="contact__right">
            <img
              className="contact__img"
              src="https://www.figma.com/file/r9LDbjRUV4V3zlUFE3gpO3/image/1a816eed44a385856238ca77ac82ce311e6ee73e?fuid=1131637315550891943"
              alt="contact"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
