import React, { useEffect } from "react";
import StepContainer from "../../components/StepContainer";

const IFrame = ({ cryptoCurrencies, coinMultiplier }) => {
  useEffect(() => {
    document.body.style.background = "transparent";
  });

  return (
    <div className="iframe__container">
      <StepContainer
        cryptoCurrencies={cryptoCurrencies}
        coinMultiplier={coinMultiplier}
      />
    </div>
  );
};

export const getStaticProps = async () => {
  const result = await import("../../cryptocurrencies.json");
  return {
    props: {
      cryptoCurrencies: JSON.parse(JSON.stringify(result)).cryptoCurrencies,
      coinMultiplier: Number(process.env.COIN_MULTIPLIER || -1),
    },
  };
};

export default IFrame;
