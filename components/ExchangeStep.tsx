import React, { useEffect, useState, useRef, useCallback } from "react";
import Image from "next/image";
import axios from "axios";
import { isValidEmail, formatNumber } from "../utilities/utils";

import styles from "../styles/components/Step.module.scss";
import CurrencyDropdown from "./CurrencyDropdown";

const ExchangeStep = ({
  cryptoCurrencies,
  transaction,
  onTransactionDataChange,
  nextStep,
}): JSX.Element => {
  const [isEnabledDropdown, setEnabledDropdown] = useState(false);

  const [errors, setErrors] = useState(new Set());

  const [isLoading, setLoading] = useState(false);

  const dropdownRef = useRef<HTMLDivElement>();

  const buttonDropdownRef = useRef<HTMLButtonElement>();

  const convertCurrency = async (currencyApiName) => {
    setLoading(true);
    const { data } = await axios.get(
      `api/convertor?ids=${currencyApiName}&vs_currencies=usd`
    );
    setLoading(false);
    return data;
  };

  const convertReceiveAmount = async (value, currencyApiName) => {
    const numberValue = Number(value);
    const data = await convertCurrency(currencyApiName);
    const amountSend =
      numberValue === 0 ? "" : Number((numberValue / data).toFixed(8)) * 1;

    return { amountReceive: numberValue, amountSend: amountSend };
  };

  const convertSendAmount = async (value, currencyApiName) => {
    const numberValue = Number(value);

    const data = await convertCurrency(currencyApiName);

    return {
      amountSend: numberValue,
      amountReceive:
        numberValue === 0 ? "" : Number((numberValue * data).toFixed(8)) * 1,
    };
  };

  const onAmountSendChange = async (e) => {
    if (String(e.target.value).length > 15) return;

    if (Number(e.target.value) < 0) return;

    const numberValue = Number(e.target.value);

    onTransactionDataChange({
      ...transaction,
      amountSend: e.target.value,
      lastValueChanged: "SEND",
    });

    const { amountSend, amountReceive } = await convertSendAmount(
      numberValue,
      transaction.currencyApiName
    );

    onTransactionDataChange({
      ...transaction,
      amountSend: e.target.value,
      amountReceive,
      lastValueChanged: "SEND",
    });
  };

  const onAmountReceiveChange = async (e) => {
    if (String(e.target.value).length > 15) return;

    if (Number(e.target.value) < 0) return;

    const numberValue = Number(e.target.value);

    onTransactionDataChange({
      ...transaction,
      amountReceive: numberValue,
      lastValueChanged: "RECEIVE",
    });

    const { amountSend, amountReceive } = await convertReceiveAmount(
      numberValue,
      transaction.currencyApiName
    );

    onTransactionDataChange({
      ...transaction,
      amountSend: amountSend,
      amountReceive: numberValue,
      lastValueChanged: "RECEIVE",
    });
  };

  const handleClickOutsideDropdown = (e) => {
    if (!dropdownRef.current) return;

    if (buttonDropdownRef.current.contains(e.target)) return;

    if (!dropdownRef.current.contains(e.target)) {
      setEnabledDropdown(false);
    }
  };


  const handleChangeEmail = (e) => {
    onTransactionDataChange({ ...transaction, email: e.target.value });
    setErrors(new Set());
  };

  const getValidationErrors = () => {
    const errors = new Set();

    if (transaction.isLoading) {
      errors.add("Transaction is loading. Please try again.");
    }

    if (!transaction.email || !isValidEmail(transaction.email)) {
      errors.add("Invalid email address!");
    }

    if (
      Number(transaction.amountSend || 0) <= 0 ||
      Number(transaction.amountReceive || 0) <= 0
    ) {
      errors.add("You must enter a valid amount!");
    }

    return errors;
  };

  const handleExchange = async () => {
    const validationErrors = getValidationErrors();

    if (validationErrors.size > 0) {
      setErrors(validationErrors);
      return;
    }

    nextStep();
  };

  const onCurrencyChange = async (currency) => {
    setEnabledDropdown(false);

    const { amountSend, amountReceive, lastValueChanged } = transaction;

    const newTransaction = { ...transaction };

    if (amountSend && lastValueChanged === "SEND") {
      const { amountSend, amountReceive } = await convertSendAmount(
        transaction.amountSend,
        currency.apiName
      );
      newTransaction.amountSend = amountSend;
      newTransaction.amountReceive = amountReceive;
    }

    if (amountReceive && lastValueChanged === "RECEIVE") {
      const { amountSend, amountReceive } = await convertReceiveAmount(
        transaction.amountReceive,
        currency.apiName
      );
      newTransaction.amountSend = amountSend;
      newTransaction.amountReceive = amountReceive;
    }

    onTransactionDataChange({
      ...newTransaction,
      currencyDisplayName: currency.displayName,
      currencyDisplayAbbreviation: currency.displayAbbreviation,
      currencyApiName: currency.apiName,
      currencyApiAbbreviation: currency.apiAbbreviation,
      currencyImagePath: currency.icon,
      isLoading: false,
    });
  };

  const onKeyboardExitDropdown = (e) => {
    if (e.keyCode === 27 && isEnabledDropdown) {
      setEnabledDropdown(false);
    }
  };

  const onEnterInputEvent = (e) => {
    if (e.keyCode !== 13) return;
    handleExchange();
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutsideDropdown);
    document.addEventListener("keydown", onKeyboardExitDropdown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutsideDropdown);
      document.removeEventListener("keydown", onKeyboardExitDropdown);
    };
  });

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

        <div className={styles["user__input"]}>
          <label htmlFor="receive">
            <span className={styles["description"]}>
              Store Credit to Buy:
            </span>
            <input
              className={styles["value__input"]}
              name="receive"
              type="number"
              id="receive"
              autoComplete="on"
              placeholder="Enter an amount"
              value={transaction.amountReceive || ""}
              onChange={onAmountReceiveChange}
              min="1"
              onKeyUp={onEnterInputEvent}
            />
          </label>

          <p className={styles["usd"]}>USD</p>

        </div>

        <div className={styles["user__input"]}>
          <label htmlFor="exchanger_input">
            <span className={styles["description"]}>You send</span>
            <input
                id="exchanger_input"
                value={transaction.amountSend || ""}
                onChange={onAmountSendChange}
                name="exchanger"
                className={styles["value__input"]}
                type="number"
                placeholder="Enter an amount..."
                min="0"
                max="999999999999999"
                onKeyUp={onEnterInputEvent}
            />
          </label>

          <div className={styles["currency__selector"]}>
            <p className={styles["currency__value"]}>
              ~ {formatNumber(transaction.amountReceive || 0)}$
            </p>
            <button
                className={styles["selector"]}
                onClick={() => setEnabledDropdown(!isEnabledDropdown)}
                ref={buttonDropdownRef}
            >
              <Image
                  src={transaction.currencyImagePath}
                  width={24}
                  height={24}
                  alt={transaction.currencyDisplayName}
              />

              <span className={styles["currency__name"]}>
                {transaction.currencyDisplayAbbreviation}{" "}
                <span
                    className={`${styles["arrow__down--icon"]} ${
                        isEnabledDropdown ? `${styles["active__icon"]}` : ``
                    }`}
                ></span>
              </span>
            </button>
          </div>

          {isEnabledDropdown && (
              <div ref={dropdownRef}>
                <CurrencyDropdown
                    cryptoCurrencies={cryptoCurrencies}
                    onCurrencyChange={onCurrencyChange}
                />
              </div>
          )}
        </div>

        <div className={styles["user__input"]}>
          <label htmlFor="email">
            <span className={styles["description"]}>Your email address</span>
            <input
              className={styles["value__input"]}
              name="email"
              type="email"
              id="email"
              autoComplete="on"
              placeholder="Enter your email address..."
              value={transaction.email}
              onChange={handleChangeEmail}
              onKeyUp={onEnterInputEvent}
            />
          </label>
        </div>
      </div>

      <div className={styles["footer"]}>
        <button
          className={`${styles["action__btn"]}`}
          onClick={() => handleExchange()}
        >
          Exchange Now
        </button>
      </div>
    </div>
  );
};

export default ExchangeStep;
