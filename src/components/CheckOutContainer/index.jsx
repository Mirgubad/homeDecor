import { Formik, Form } from "formik";
import * as Yup from "yup";
import PhoneNumberInput from "../PhoneNumberInput";
import React from "react";
import styles from "../CheckOutContainer/checkout.module.css";
import TextInput from "../TextInputYup";

const CheckOutContainer = () => {
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(5, "Name must be at least 3 characters")
      .required("Name is required"),
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    address: Yup.string()
      .min(5, "Address must be at least 5 characters")
      .required("Address is required"),
    surname: Yup.string()
      .min(5, "Surname must be at least 5 characters")
      .required("Surname is required"),
    postalCode: Yup.string()
      .min(5, "Postal code must be at least 5 characters")
      .required("Postal code is required"),
    cardNumber: Yup.string()
      .min(16, "Card number must be 16 characters")
      .required("Card number is required"),
    expiryDate: Yup.string()
      .matches(
        /^(0[1-9]|1[0-2])\/\d{2}$/,
        "Expiry date must be in MM/YY format"
      )
      .required("Expiry date is required"),
    cvv: Yup.string()
      .matches(/^\d{3}$/, "CVV must be 3 digits")
      .required("CVV is required"),
  });

  return (
    <section className={styles.checkout}>
      <div className={`${styles.checkout__wrapper}`}>
        <Formik
          initialValues={{
            name: "",
            email: "",
            address: "",
            surname: "",
            postalCode: "",
            cardNumber: "",
            expiryDate: "",
            cvv: "",
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Your form submission logic here
            console.log("Form submitted with values:", values);
          }}
        >
          <Form className={styles.checkout__form}>
            <div className={styles["form__personal--info"]}>
              <p className={styles.header}>Personal information</p>

              <fieldset className={styles.info__left}>
                <TextInput
                  type="text"
                  name="name"
                  id="name"
                  placeholder="name"
                />
                <TextInput
                  type="text"
                  name="email"
                  id="email"
                  placeholder="email"
                />
                <TextInput
                  type="text"
                  name="address"
                  id="address"
                  placeholder="city,street"
                />
                <TextInput
                  type="text"
                  name="surname"
                  id="surname"
                  placeholder="surname"
                />
                <PhoneNumberInput countryCode="994" />

                <TextInput
                  id="postalCode"
                  name="postalCode"
                  type="text"
                  placeholder="Postal code"
                />
              </fieldset>
            </div>
            <div className={styles["form__card--info"]}>
              <p className={styles.header}>card information</p>
              <fieldset className={styles.info__right}>
                <TextInput
                  type="text"
                  name="cardNumber"
                  id="cardNumber"
                  placeholder="card number"
                />

                <div className={styles.customInput}>
                  <TextInput
                    id="expiryDate"
                    name="expiryDate"
                    type="text"
                    placeholder="expiry date"
                  />
                  <span className={styles.placeholder}>_/_/_</span>
                </div>

                <div className={styles.customInput}>
                  <TextInput
                    id="cvv"
                    name="cvv"
                    type="text"
                    placeholder="CVV"
                  />
                  <span className={styles.placeholder}>___________</span>
                </div>
              </fieldset>
            </div>
            <div className={styles["form__payment--info"]}>
              <p className={styles.header}>Payment method</p>
              <fieldset className={styles["form__group"]}>
                <label
                  className={styles["custom__radio--label"]}
                  htmlFor="card"
                >
                  <input
                    className={styles["custom__radio--input"]}
                    type="radio"
                    name="payment"
                    id="card"
                  />
                  Card
                </label>
                <label
                  className={styles["custom__radio--label"]}
                  htmlFor="cash"
                >
                  <input
                    className={styles["custom__radio--input"]}
                    defaultChecked
                    type="radio"
                    name="payment"
                    id="cash"
                  />
                  Cash
                </label>
              </fieldset>
            </div>
            <div className={styles["form__delivery--info"]}>
              <p className={styles.header}>Delivery method</p>
              <fieldset className={styles["form__group"]}>
                <label
                  className={styles["custom__radio--label"]}
                  htmlFor="courier"
                >
                  <input
                    className={styles["custom__radio--input"]}
                    type="radio"
                    name="delivery"
                    id="courier"
                  />
                  Courier
                </label>
                <label
                  className={styles["custom__radio--label"]}
                  htmlFor="pickup"
                >
                  <input
                    className={styles["custom__radio--input"]}
                    defaultChecked
                    type="radio"
                    name="delivery"
                    id="pickup"
                  />
                  Pickup
                </label>
              </fieldset>
            </div>

            <div className={styles["form__submit"]}>
              <input
                className={`${styles.primary__btn} btn`}
                type="submit"
                value="finish order"
              />
            </div>
          </Form>
        </Formik>
      </div>
    </section>
  );
};

export default CheckOutContainer;
