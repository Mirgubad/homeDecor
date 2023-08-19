import React from "react";
import "../Contact/contact.css";
import SectionTop from "../SectionTop";
import ButtonPrimary from "../ButtonPrimary";

const Contact = () => {
  return (
    <section className="contact">
      <div className="container">
        <SectionTop title="Contact" />
        <div className="contact__items ">
          <div className="contact__left">
            <form className="contactForm">
              <input type="text" placeholder="NAME, SURNAME" />
              <input type="text" placeholder="E-MAIL ADDRESS" />
              <input type="text" placeholder="THEME" />
              <textarea placeholder="YOUR MESSAGE"></textarea>
              <ButtonPrimary>Send</ButtonPrimary>
            </form>
          </div>
          <div className="contact__right">
            <img
              className="contact__img"
              src="https://s3-alpha-sig.figma.com/img/1a81/6eed/44a385856238ca77ac82ce311e6ee73e?Expires=1692576000&Signature=pl~XQJBwUQWrhRfgZybyJitWlRD~xtZ5aruZPerWl~tSfSFn87JiHKTOchnJTk7qFoI47DTFsWQuwDwYE5W-pzN0HsLfMZTqnnP4ZKJJm9wn5E~ic~NoU154RgAd7hJgnoSXcUtXT4gNPGqTDYGZlk3muopcA6BknqyrpI1cqKcYGE3uwZbpctB7fUujQu2HVB5mEKWHkPJNiIt3ZsB2Rf0tAY1KUNEcZhFpkXtVmx7XAixl71rcLbLJMmu5DqdPL6XgCzL90PftAJiPyUJaHaswBBBss0NOxt8ClAhIQHyuBbnMwu-tcHM58Q195O2zoa4tu9mO72rGSry4tK0nfw__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4"
              alt="contact"
            />
          </div>
        </div>{" "}
      </div>
    </section>
  );
};

export default Contact;
