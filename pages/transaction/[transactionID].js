import React, { useEffect, useState, useCallback } from "react";
import { useRouter } from "next/router";
import Head from "next/head";
import axios from "axios";
import SkeletonLoader from "../../components/SkeletonLoader";
import PaymentStep from "../../components/PaymentStep";
import PaymentCompletedStep from "../../components/PaymentCompletedStep";

const Transaction = () => {
  const router = useRouter();
  const { transactionID } = router.query;

  const [transactionData, setTransactionData] = useState({});

  const [isLoading, setLoading] = useState(true);

  const [errors, setErrors] = useState(new Set());

  const [isCopied, setTextCopied] = useState(false);

  const loadTransaction = useCallback(async () => {
    if (!router.isReady) return;

    console.log(`Loading transaction`);
    setLoading(true);
    try {
      const { data } = await axios.get(
        `/api/transaction?txid=${transactionID}`
      );
      setTransactionData(data);
      setLoading(false);
    } catch (error) {
      console.log(`There was an error`);
      setErrors((errors) => new Set(errors).add(error.response.data.Error));
      setLoading(false);
    }
  }, [router.isReady, transactionID]);

  useEffect(() => {
    loadTransaction();
  }, [router.isReady, transactionID, loadTransaction]);

  useEffect(() => {
    if (!router.isReady) return;
    if (transactionData.status === 100 || transactionData.status === 2) return;
    const timer = setInterval(() => loadTransaction(), 1000 * 60 * 3);
    return () => clearInterval(timer);
  }, [router.isReady, errors, transactionID, transactionData, loadTransaction]);

  useEffect(() => {
    if (!isCopied) return;

    const timerID = setTimeout(() => {
      setTextCopied(false);
    }, 1500);

    return () => {
      clearTimeout(timerID);
    };
  }, [isCopied]);

  return (
    <>
      <Head>
        <title>
          {process.env.NEXT_PUBLIC_SERVER_NAME} - Exchange your crypto
        </title>
      </Head>
      {isLoading ? (
        <SkeletonLoader />
      ) : errors.size > 0 ? (
        [...errors].map((error, index) => <h1 key={index}>{error}</h1>)
      ) : transactionData.status !== 100 && transactionData.status !== 2 ? (
        <PaymentStep
          transaction={{
            id: transactionID,
            ...transactionData,
          }}
        />
      ) : (
        <PaymentCompletedStep
          transaction={{
            id: transactionID,
            ...transactionData,
          }}
        />
      )}
    </>
  );
};

export default Transaction;
