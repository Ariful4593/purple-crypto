import React, { useState } from "react";
import styles from "../styles/components/CurrencyDropdown.module.scss";

import CurrencyDropdownItem from "./CurrencyDropdownItem";

const CurrencyDropdown = ({
  cryptoCurrencies,
  onCurrencyChange,
}): JSX.Element => {
  const [currencies, setCurrencies] = useState(cryptoCurrencies);

  const [inputText, setInputText] = useState("");

  const [hasFoundCurrency, setFoundCurrency] = useState(true);

  const [isSearchingCurrencies, setSearchingCurrencies] = useState(false);

  const clearSearch = () => {
    setInputText("");
    setSearchingCurrencies(false);
    setCurrencies([...cryptoCurrencies]);
    setFoundCurrency(true);
  };

  const filterCurrency = (currency, inputText) => {
    return (
      currency.displayName.toUpperCase().includes(inputText.toUpperCase()) ||
      currency.displayAbbreviation
        .toUpperCase()
        .includes(inputText.toUpperCase())
    );
  };

  const onInputTextChange = (e) => {
    const inputText = e.target.value;
    setInputText(inputText);
    const filteredCurrencies = [...cryptoCurrencies].filter((currency) =>
      filterCurrency(currency, inputText)
    );
    setFoundCurrency(filteredCurrencies.length > 0);
    setCurrencies(filteredCurrencies);
    setSearchingCurrencies(inputText.length > 0);
  };

  return (
    <div className={styles["currency__dropdown"]}>
      <label htmlFor="search">
        <span className={styles["search__icon"]}></span>
        <input
          type="text"
          id="search"
          className={styles["search__bar"]}
          name="currency"
          placeholder="Search for a currency..."
          value={inputText}
          onChange={onInputTextChange}
        />
        {isSearchingCurrencies && (
          <span
            className={styles["close__icon"]}
            onClick={() => clearSearch()}
          ></span>
        )}
      </label>
      <div className={styles["currencies"]}>
        {currencies.map((currency, index) => (
          <CurrencyDropdownItem
            currency={currency}
            onClick={() => onCurrencyChange(currency)}
            key={index}
          />
        ))}

        {!hasFoundCurrency && (
          <p className={styles["no__currency--found"]}>No currency found</p>
        )}
      </div>
    </div>
  );
};

export default CurrencyDropdown;
