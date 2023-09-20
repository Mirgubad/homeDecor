import ButtonPrimary from "../../ButtonPrimary";
import FormBottomQuestion from "../FormBottomQuestion";
import FormTitle from "../FormTitle";
import React from "react";
import styles from "../Login/login.module.css";

const VerificationResetPassword = () => {
  return (
    <div className={styles["login"]}>
      <FormTitle title="VERIFICATION" />
      <form className={styles["login__form"]}>
        <div className={styles["form__label"]}>
          <input type="email" placeholder="ENTER VERIFICATION NUMBER" />
        </div>

        <ButtonPrimary>send</ButtonPrimary>
      </form>

      <FormBottomQuestion
        question="Didn’t receive a code?"
        path="auth/resend"
        pathname="resend"
      />
    </div>
  );
};

export default VerificationResetPassword;
