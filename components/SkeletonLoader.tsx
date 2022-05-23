import React from "react";

import styles from "../styles/components/Step.module.scss";

const SkeletonLoader = (): JSX.Element => {
  return (
    <div
      className={`${styles["step__container"]} ${styles["step__container__last--step"]} container`}
    >
      <div className={styles["body"]}>
        <div className={styles["body__description"]}>
          <h2 className={styles["title"]}>Exchange crypto</h2>
          <p className={styles["description"]}>for store credit</p>
        </div>

        <div className={styles["transactions__status"]}>
          <div className={styles["transaction"]}>
            <p
              className={`${styles["skeleton__loading"]} ${styles["skeleton__text--title"]}`}
            ></p>
            <p
              className={`${styles["skeleton__loading"]} ${styles["skeleton__loading--text"]}`}
            ></p>
          </div>
          <div className={styles["transaction"]}>
            <p
              className={`${styles["skeleton__loading"]} ${styles["skeleton__text--title"]}`}
            ></p>
            <p
              className={`${styles["skeleton__loading"]} ${styles["skeleton__text--j"]}`}
            ></p>
          </div>
        </div>

        <div className={styles["user__inputs"]}>
          <div className={styles["grid__inputs"]}>
            <div className={styles["input"]}>
              <div className={styles["value__input"]}>
                <p
                  className={`${styles["skeleton__loading"]} ${styles["skeleton__text--title"]}`}
                ></p>
                <p
                  className={`${styles["skeleton__loading"]} ${styles["skeleton__loading--text"]}`}
                ></p>
              </div>
            </div>
            <div className={styles["input"]}>
              <div className={styles["value__input"]}>
                <p
                  className={`${styles["skeleton__loading"]} ${styles["skeleton__text--title"]}`}
                ></p>
                <p
                  className={`${styles["skeleton__loading"]} ${styles["skeleton__loading--text"]}`}
                ></p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["transaction__footer"]}>
        <div className={styles["transactions__status"]}>
          <div className={styles["transaction"]}>
            <p
              className={`${styles["skeleton__loading"]} ${styles["skeleton__text--title"]}`}
            ></p>
            <p
              className={`${styles["skeleton__loading"]} ${styles["skeleton__loading--text"]}`}
            ></p>
          </div>
          <div className={styles["transaction"]}>
            <p
              className={`${styles["skeleton__loading"]} ${styles["skeleton__text--title"]}`}
            ></p>
            <p
              className={`${styles["skeleton__loading"]} ${styles["skeleton__text--j"]}`}
            ></p>
          </div>
        </div>

        <div
          className={`${styles["SkeletonQRCode"]} ${styles["skeleton__loading"]}`}
        ></div>

        <div className={styles["alert__box"]}>
          <p>
            Please send the exact amount from your wallet or exchange account to
            the payment address.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkeletonLoader;
