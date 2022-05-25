import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/components/Home.module.scss";

import StepContainer from "../components/StepContainer";

interface Props {
  cryptoCurrencies: Object;
  coinMultiplier: number;
}

const Home: NextPage<Props> = ({ cryptoCurrencies, coinMultiplier }) => {
  return (
    <>
      <div className={"container"}>
        <div className={styles["exchange__grid"]}>
          <div className={`${styles["col"]} ${styles["description__col"]}`}>
            <div className={styles["homepage__description"]}>
              <Image
                    src={`/images/mainlogo.png`}
                    width={388}
                    height={336}
                    alt="Logo"
              />
              <p className={styles["small__description"]}>
                Crypto to store credit
              </p>
              <h1 className={styles["title"]}>
                Purchase store credit using cryptocurrency
              </h1>
              <p className={styles["description"]}>
              A fast and secure way to purchase anything on our store using 11 popular CryptoCurrencies.
              Fully automated and fast. No verification required.
              </p>
              <div className={styles["accepted__cryptocurrencies--list"]}>
                <Image
                  src={`/images/currencies/BTC.svg`}
                  width={38}
                  height={38}
                  alt="Bitcoin Crypto Currency"
                />
                <Image
                  src={`/images/currencies/ETH.svg`}
                  width={38}
                  height={38}
                  alt="Ethereum Crypto Currency"
                />
                <Image
                  src={`/images/currencies/USDT.svg`}
                  width={38}
                  height={38}
                  alt="USDT Crypto Currency"
                />
                <Image
                  src={`/images/currencies/USDC.svg`}
                  width={38}
                  height={38}
                  alt="USDC Crypto Currency"
                />    
                <Image
                  src={`/images/currencies/SOL.svg`}
                  width={38}
                  height={38}
                  alt="SOL Crypto Currency"
                />                            
              </div>
            </div>
          </div>
          <div className={`${styles["col"]} ${styles["steps__col"]}`}>
            <StepContainer
              cryptoCurrencies={cryptoCurrencies}
              coinMultiplier={coinMultiplier}
            />
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Home;

export const getStaticProps = async () => {
  const result = await import("../cryptocurrencies.json");
  return {
    props: {
      cryptoCurrencies: JSON.parse(JSON.stringify(result)).cryptoCurrencies,
      coinMultiplier: Number(process.env.COIN_MULTIPLIER || -1),
    },
  };
};
