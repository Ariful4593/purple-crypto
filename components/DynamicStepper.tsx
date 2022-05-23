import React from "react";
import styles from "../styles/components/Stepper.module.scss";

const DynamicStepper = ({ step, nextStep, previousStep }): JSX.Element => {
  return (
    <div className={styles["stepper"]}>
      <div
        className={`${styles["step"]} ${
          step == 1 && `${styles["active__step"]}`
        } ${step == 2 && `${styles["step__back"]}`}`}
        onClick={() => previousStep()}
      >
        {step == 2 ? (
          <>
            <span className={styles["icon__back"]}>
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M14 27C21.1797 27 27 21.1797 27 14C27 6.8203 21.1797 1 14 1C6.8203 1 1 6.8203 1 14C1 21.1797 6.8203 27 14 27Z"
                  stroke="#41A4FF"
                  strokeWidth="1.5"
                  strokeMiterlimit="10"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <path
                  d="M15.638 18.5889L11.062 13.9999L15.638 9.41089"
                  stroke="#41A4FF"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
            <p className={styles["description"]}>Go Back</p>
          </>
        ) : (
          <>
            <p className={styles["title"]}>Step 1</p>
            <p className={styles["description"]}>Exchange</p>
          </>
        )}
      </div>
      <div
        className={`${styles["step"]} ${
          step == 2 && `${styles["active__step"]}`
        }`}
        onClick={() => nextStep()}
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
          step == 3 && `${styles["active__step"]}`
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

export default DynamicStepper;
