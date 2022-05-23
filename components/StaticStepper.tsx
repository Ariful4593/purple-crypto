import React from "react";
import styles from "../styles/components/Stepper.module.scss";

const StaticStepper = ({ step }) => {
  return (
    <div className={styles["stepper"]}>
      <div
        className={`${styles["step"]} ${
          step == 1 ? `${styles["active__step"]}` : ""
        }`}
      >
        {!(step > 1) ? (
          <p className={styles["title"]}>Step 1</p>
        ) : (
          <span className={styles["step__finished--icon"]}></span>
        )}
        <p className={styles["description"]}>Exchange</p>
      </div>
      <div
        className={`${styles["step"]} ${
          step == 2 ? `${styles["active__step"]}` : ""
        }`}
      >
        {!(step > 2) ? (
          <p className={styles["title"]}>Step 2</p>
        ) : (
          <span className={styles["step__finished--icon"]}></span>
        )}
        <p className={styles["description"]}>Confirm</p>
      </div>
      <div
        className={`${styles["step"]} ${
          step == 3 ? `${styles["active__step"]}` : ""
        }`}
      >
        {!(step > 3) ? (
          <p className={styles["title"]}>Step 3</p>
        ) : (
          <span className={styles["step__finished--icon"]}></span>
        )}
        <p className={styles["description"]}>Payment</p>
      </div>
    </div>
  );
};

export default StaticStepper;
