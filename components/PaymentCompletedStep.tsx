import React, { useEffect, useState } from "react";

import styles from "../styles/components/Step.module.scss";
import { formatNumber } from "../utilities/utils";

import StaticStepper from "./StaticStepper";

const PaymentCompletedStep = ({ transaction }): JSX.Element => {
  function copyClipboard(text) {
    navigator.clipboard.writeText(text).catch((err) => {
      console.log("Something went wrong", err);
      return;
    });
  }

  return (
    <div
      className={`${styles["step__container"]} ${styles["step__container__last--step"]}`}
    >
      <div className={styles["header"]}>
        <StaticStepper step="4" />
      </div>

      <div className={styles["body"]}>
        <div className={styles["body__description"]}>
          <h2 className={styles["title"]}>Exchange crypto</h2>
          <p className={styles["description"]}>for store credit</p>
        </div>

        <div className={styles["transactions__status"]}>
          <div className={styles["transaction"]}>
            <p className={styles["title"]}>Your transaction</p>
            <p className={styles["address"]}>#{transaction.id}</p>
          </div>
          <div className={styles["transaction"]}>
            <p className={styles["title"]}>Status</p>
            <p className={styles["status"]}>Completed!</p>
          </div>
        </div>

        <div className={styles["user__inputs"]}>
          <div className={styles["grid__inputs"]}>
            <div className={styles["input"]}>
              <div className={styles["value__input"]}>
                <p className={styles["description"]}>You sent</p>
                <p className={styles["value__receive"]}>
                  {transaction.amountf * 1} {transaction.coin}
                </p>
              </div>
            </div>

            <div className={styles["input"]}>
              <div className={styles["value__input"]}>
                <p className={styles["description"]}>You received</p>
                <p className={styles["value__receive"]}>
                  {formatNumber(transaction.amountReceive)} Credits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {transaction.giftCard ? (
        <div className={styles["transaction__footer"]}>
          <p className={styles["title"]}>Your giftcard</p>
          <div
            className={styles["giftcard__box"]}
            onClick={(e) => copyClipboard(transaction.giftCard)}
          >
            <p>{transaction.giftCard}</p>
          </div>
        </div>
      ) : (
        <p>Waiting for giftcard to be created. This can take up to 5-10 Minutes. You may occasionally refresh this page.</p>
      )}
    </div>
  );
};

export default PaymentCompletedStep;
