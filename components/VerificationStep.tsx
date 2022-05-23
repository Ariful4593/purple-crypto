import axios from "axios";
import { useRouter } from "next/dist/client/router";
import React, { useState } from "react";
import { formatNumber } from "../utilities/utils";

import styles from "../styles/components/Step.module.scss";

const VerificationStep = ({
  transaction,
  coinMultiplier,
  onTransactionDataChange,
}): JSX.Element => {
  const [errors, setErrors] = useState(new Set());

  const router = useRouter();

  const handleCheckout = async () => {
    try {
      onTransactionDataChange({ ...transaction, isLoading: true });
      const { data } = await axios.post(
        `api/create-transaction`,
        {
          buyer_email: transaction.email,
          amount: transaction.amountSend,
          currencyAbbreviation: transaction.currencyApiAbbreviation,
          currency: transaction.currencyApiName,
        },
        { headers: { "Content-Type": "application/json" } }
      );
      onTransactionDataChange({ ...transaction, isLoading: false });
      router.push(`/transaction/${data.txn_id}`);
    } catch (error) {
      setErrors(new Set(errors).add(error.response.data.Error));
      onTransactionDataChange({ ...transaction, isLoading: false });
    }
  };

  return (
    <div className={styles["body"]}>
      <div className={styles["body__description"]}>
        <h2 className={styles["title"]}>Exchange crypto</h2>
        <p className={styles["description"]}>for store credit</p>
      </div>

      {errors.size > 0 && (
        <div className={styles["errors__tab"]}>
          {Array.from(errors).map((error, index) => (
            <div className={styles["error__tab"]} key={index}>
              <p>{error}</p>
            </div>
          ))}
        </div>
      )}

      <div className={styles["user__inputs"]}>
        <div className={styles["grid__inputs"]}>
          <div className={styles["input"]}>
            <div className={styles["value__input"]}>
              <p className={styles["description"]}>You send</p>
              <p className={styles["value__receive"]}>
                {transaction.amountSend}{" "}
                {transaction.currencyDisplayAbbreviation}
              </p>
            </div>
          </div>

          <div className={styles["input"]}>
            <div className={styles["value__input"]}>
              <p className={styles["description"]}>You receive</p>
              <p className={styles["value__receive"]}>
                {formatNumber(
                  transaction.amountReceive *
                    (coinMultiplier > 1 ? coinMultiplier : 1)
                )}{" "}
                Credits
              </p>
            </div>
          </div>
        </div>

        <div className={styles["input"]}>
          <div className={styles["value__input"]}>
            <p className={styles["description"]}>Your email address</p>
            <p className={styles["value__receive"]}>{transaction.email}</p>
          </div>
        </div>
      </div>
      <div className={styles["footer"]}>
        <button
          className={styles["action__btn"]}
          onClick={() => handleCheckout()}
        >
          {transaction.isLoading ? (
            <div className={styles["loading__animation"]}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          ) : (
            `Exchange your crypto`
          )}
        </button>
      </div>
    </div>
  );
};

export default VerificationStep;
