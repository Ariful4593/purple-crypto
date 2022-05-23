import React, { useEffect, useState } from "react";
import Image from "next/image";

import styles from "../styles/components/Step.module.scss";

import StaticStepper from "./StaticStepper";

import { formatNumber } from "../utilities/utils";

const PaymentStep = ({ transaction }): JSX.Element => {
  function copyClipboard(text) {
    navigator.clipboard.writeText(text).catch((err) => {
      console.log("Something went wrong", err);
      return;
    });
  }

  let url = window.location.href;
  return (
    <div
      className={`${styles["step__container"]} ${styles["step__container__last--step"]} container`}
    >
      <div className={styles["header"]}>
        <StaticStepper step="3" />
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
            <p className={styles["status"]}>{transaction.status_text}</p>
          </div>
        </div>

        <div className={styles["user__inputs"]}>
          <div className={styles["grid__inputs"]}>
            <div className={styles["input"]}>
              <div className={styles["value__input"]}>
                <p className={styles["description"]}>You send</p>
                <p className={styles["value__receive"]}>
                  {transaction.amountf * 1} {transaction.coin}
                </p>
              </div>
            </div>

            <div className={styles["input"]}>
              <div className={styles["value__input"]}>
                <p className={styles["description"]}>You receive</p>
                <p className={styles["value__receive"]}>
                  {formatNumber(transaction.amountReceive)} Credits
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className={styles["transaction__footer"]}>
        <div className={styles["transactions__status"]}>
          <div className={styles["transaction"]}>
            <p className={styles["title"]}>You must send</p>
            <p className={styles["currency"]}>
              {transaction.amountf * 1} {transaction.coin}
            </p>
          </div>
          <div className={styles["transaction"]}>
            <p className={styles["title"]}>To payment address</p>
            <p
              className={styles["address"]}
              onClick={() => copyClipboard(transaction.payment_address)}
            >
              {transaction.payment_address}
            </p>
          </div>
        </div>

        <div className={styles["QR__code"]}>
          <Image
            src={transaction.qrcode_url}
            alt={"Transaction QR Code"}
            width={128}
            height={128}
          />
        </div>

        <div className={styles["alert__box"]}>
          <p>
            Please send the exact amount from your wallet or exchange account to
            the payment address.
          </p>
        </div>
        <br></br>
        <div className={styles["alert__box"]}>
          <p className={styles["url"]}>
            Link to return to this page: <a href={url}>{url}</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
