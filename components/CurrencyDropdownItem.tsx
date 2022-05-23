import React, { useEffect } from "react";
import styles from "../styles/components/CurrencyDropdown.module.scss";
import Image from "next/image";

const CurrencyDropdownItem = ({ currency, onClick }) => {
  return (
    <div className={styles["currency"]} onClick={onClick}>
      <div className={styles["icon"]}>
        <Image
          src={currency.icon}
          alt={currency.displayName}
          width={32}
          height={32}
        />
      </div>
      <div className={styles["description"]}>
        <p className={styles["abreviation"]}>{currency.displayAbbreviation}</p>
        <p className={styles["name"]}>{currency.displayName}</p>
      </div>
    </div>
  );
};

export default CurrencyDropdownItem;
