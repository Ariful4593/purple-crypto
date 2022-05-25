import React, { useEffect, useState } from "react";
import ExchangeStep from "./ExchangeStep";
import DynamicStepper from "./DynamicStepper";
import VerificationStep from "./VerificationStep";
import styles from "../styles/components/Step.module.scss";
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { StyleSheet, css } from "aphrodite";



const stylesHelpBtn = StyleSheet.create({
  helpBtn: {
    color: '#FFFFFF',
    cursor: 'pointer',
    width: '35%',
    height: '60px',
    padding: '1.2em',
    fontSize: '1.8rem',
    fontWeight: 700,
    borderRadius: '41px',
    background: '#a981c0',
    border: 'none',
    outline: 'none',
    boxShadow: 'none',
    transition: 'all 0.15s ease-in-out',
    "@media (max-width: 468px)": {
      color: '#FFFFFF',
      cursor: 'pointer',
      maxWidth: '50% !important',
      minWidth: '130px',
      height: '100% !important',
      padding: '1em',
      fontSize: '1.4rem',
      fontWeight: 700,
      borderRadius: '41px',
      background: '#a981c0',
      border: 'none',
      outline: 'none',
      boxShadow: 'none',
      transition: 'all 0.15s ease-in-out',
    }
  }
});


const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    padding: theme.spacing(2),
  },
  '& .MuiDialogActions-root': {
    padding: theme.spacing(1),
  },
}));

export interface DialogTitleProps {
  id: string;
  children?: React.ReactNode;
  onClose: () => void;
}


const StepContainer = ({ cryptoCurrencies, coinMultiplier }) => {
  const [step, setStep] = useState(1);
  const [transaction, setTransaction] = useState({
    email: "",
    amountSend: undefined,
    amountReceive: undefined,
    currencyDisplayName:
      cryptoCurrencies.length > 0 ? cryptoCurrencies[0].displayName : "Bitcoin",
    currencyDisplayAbbreviation:
      cryptoCurrencies.length > 0
        ? cryptoCurrencies[0].displayAbbreviation
        : "BTC",
    currencyApiName:
      cryptoCurrencies.length > 0 ? cryptoCurrencies[0].apiName : "Bitcoin",
    currencyApiAbbreviation:
      cryptoCurrencies.length > 0 ? cryptoCurrencies[0].apiAbbreviation : "BTC",
    currencyImagePath:
      cryptoCurrencies.length > 0 ? cryptoCurrencies[0].icon : "BTC",
    lastValueChanged: "SEND",
    isLoading: false,
  });

  const nextStep = () => {
    const isMaxStep = step < 2;
    const isFirstStepAlreadyCompleted = step == 1;
    const canGoToNextStep = !isMaxStep || !isFirstStepAlreadyCompleted;
    if (!canGoToNextStep) return;
    if (transaction.isLoading) return;
    setStep(step + 1);
  };

  const previousStep = () => {
    const isStepLessThanLimit = step <= 1;
    if (isStepLessThanLimit) return;
    if (transaction.isLoading) return;
    setStep(step - 1);
  };

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  const [asd, setAsd] = useState('')
  useEffect(() => {
    setAsd(css(stylesHelpBtn.helpBtn))
  }, [])
  return (
    <>
      <div
        className={`${styles["step__container"]} ${step > 2 && `${styles["step__container__last--step"]}`
          }`}
      >
        {coinMultiplier > 1 && (
          <>
            <div className={styles["booster"]}>
              <svg
                width="42"
                height="50"
                viewBox="0 0 42 50"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M23.0832 18.75H41.8332L12.6665 50L18.9165 31.25H0.166504L29.3332 0L23.0832 18.75ZM4.96025 29.1667H21.8061L17.6665 41.5896L37.0394 20.8333H20.1936L24.3332 8.41042L4.96025 29.1667V29.1667Z"
                  fill="white"
                />
              </svg>
              <p className={`${styles["coin__multiplier"]}`}>
                {coinMultiplier}x more coins
              </p>
            </div>
          </>
        )}

        <div className={styles["header"]}>
          <DynamicStepper
            step={step}
            nextStep={nextStep}
            previousStep={previousStep}
          />
        </div>

        {step === 1 && (
          <>
            <ExchangeStep
              cryptoCurrencies={cryptoCurrencies}
              transaction={transaction}
              onTransactionDataChange={setTransaction}
              nextStep={() => setStep(step + 1)}
            />

          </>
        )}
        {
          step === 2 && (
            <VerificationStep
              coinMultiplier={coinMultiplier}
              transaction={transaction}
              onTransactionDataChange={setTransaction}
            />
          )
        }
      </div >
      <div className={styles["body"]} style={{ marginTop: '20px' }}>
        <div className={styles["footer"]} style={{ textAlign: 'center' }}>
          <button
            className={asd}
            onClick={handleClickOpen}
          >
            Need Help?
          </button>
        </div>
        <div className={styles["css-1t1j96h-MuiPaper-root-MuiDialog-paper"]}>
          <BootstrapDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={open}
          >
            <div style={{ maxWidth: '560px', width: '100%', backgroundColor: '#110816', border: '1px solid rgb(41 33 46)' }}>
              <div style={{ padding: '20px' }}>
                <div style={{
                  borderColor: 'rgb(41 33 46)',
                  borderWidth: '1px',
                  borderRadius: '.75rem',
                  width: '100%',
                  padding: '20px',
                  color: 'rgb(255, 255, 255)',
                  backgroundColor: 'rgb(28 17 33)',
                  display: "flex",
                  justifyContent: 'space-between',
                  border: '1px solid rgb(41, 33, 46)'
                }} >
                  How to pay with crypto
                  <svg style={{ cursor: 'pointer' }} onClick={handleClose} width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.76155 9.88285C8.15207 10.2734 8.78524 10.2734 9.17576 9.88285L9.88286 9.17575C10.2734 8.78522 10.2734 8.15206 9.88286 7.76153L8.12352 6.0022C7.733 5.61167 7.73299 4.97851 8.12352 4.58798L9.88307 2.82843C10.2736 2.4379 10.2736 1.80474 9.88308 1.41422L9.17598 0.707115C8.78546 0.316589 8.15229 0.316588 7.76176 0.707113L6.00221 2.46667C5.61169 2.85719 4.97852 2.85719 4.588 2.46667L2.82844 0.707106C2.43792 0.316582 1.80476 0.31658 1.41423 0.707102L0.707114 1.41421C0.316587 1.80474 0.316586 2.43791 0.707114 2.82843L2.46668 4.58799C2.85721 4.97851 2.85721 5.61168 2.46669 6.00221L0.707351 7.76154C0.316826 8.15206 0.316825 8.78523 0.707347 9.17575L1.41444 9.88285C1.80497 10.2734 2.43814 10.2734 2.82866 9.88285L4.588 8.12351C4.97852 7.73299 5.61169 7.73299 6.00221 8.12351L7.76155 9.88285Z" fill="#F35D5D"></path>
                  </svg>
                </div>
              </div>
              <section style={{ padding: '0px 30px 11px' }}>
                <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                  <h3 style={{ color: 'rgb(255 255 255)', fontWeight: 500, fontSize: 'inherit', fontFamily: 'inherit' }}>Step 1.</h3>
                  <div style={{ padding: '16px 0', display: 'flex', }}>
                    <span style={{ alignSelf: 'center', }}>
                      <img style={{ maxWidth: '100%', height: 'auto', display: 'block', verticalAlign: 'middle', border: 0 }} src="https://imagedelivery.net/6F7wdo7jRAfQv44-W_8uRg/cc521bd8-db4e-41eb-f509-7f29cb14b200/public" alt="" />
                    </span>
                    <p style={{ paddingLeft: '0.75rem', alignSelf: 'center', margin: 0, color: 'rgb(186 143 211)' }}>Visit the <span style={{ color: 'rgb(255 255 255)' }}>Purple Prison Crypto Exchange</span></p>
                  </div>
                </div>

                <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                  <h3 style={{ color: 'rgb(255 255 255)', fontWeight: 500, fontSize: 'inherit', fontFamily: 'inherit' }}>Step 2.</h3>
                  <div style={{ padding: '16px 0', display: 'flex', }}>
                    <span style={{ alignSelf: 'center', paddingLeft: '.375rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M21.2653 15.9587C20.8666 11.5467 18.6666 9.33333 18.6666 9.33333L14.6666 4H9.33325L5.33325 9.33333C5.33325 9.33333 4.38725 10.2887 3.62192 12.1833C2.29592 12.6233 1.33325 13.8593 1.33325 15.3333C1.33325 16.2987 1.74992 17.1613 2.40592 17.77C2.15525 18.238 1.99992 18.7647 1.99992 19.3333C1.99992 20.6387 2.75725 21.7573 3.84992 22.304C4.70525 23.5853 5.84792 24 6.66658 24H17.3333C18.2526 24 19.5819 23.4807 20.4519 21.7933C21.7393 21.3327 22.6666 20.1133 22.6666 18.6667C22.6666 17.548 22.1106 16.564 21.2653 15.9587ZM11.9999 4C12.3666 4 12.7053 3.89467 12.9999 3.72267C13.2953 3.89467 13.6339 4 13.9999 4C15.1046 4 16.6666 2.43733 16.6666 1.33333C16.6666 1.33333 16.6666 0 15.3333 0C14.8079 0 14.6666 0.666667 13.9999 0.666667C13.3333 0.666667 13.3333 0 11.9999 0C10.6666 0 10.6666 0.666667 9.99992 0.666667C9.33325 0.666667 9.19258 0 8.66658 0C7.33325 0 7.33325 1.33333 7.33325 1.33333C7.33325 2.43733 8.89592 4 9.99992 4C10.3659 4 10.7046 3.89467 10.9999 3.72267C11.2953 3.89467 11.6339 4 11.9999 4Z" fill="#FDD888"></path>
                        <path d="M16 3.99999C16 4.368 15.702 4.66666 15.3333 4.66666H8.66667C8.29867 4.66666 8 4.368 8 3.99999C8 3.63199 8.29867 3.33333 8.66667 3.33333H15.3333C15.702 3.33333 16 3.63199 16 3.99999Z" fill="#BF6952"></path>
                        <path d="M15.9339 16.3613C15.9339 13.3767 10.2133 13.5713 10.2133 11.7707C10.2133 10.8987 11.0806 10.4727 12.0873 10.4727C13.7793 10.4727 14.0806 11.5187 14.8466 11.5187C15.3886 11.5187 15.6499 11.19 15.6499 10.8213C15.6499 9.96533 14.3006 9.31733 13.0066 9.09333V8.26666C13.0066 7.75133 12.5733 7.33333 12.0373 7.33333C11.5006 7.33333 11.0666 7.75133 11.0666 8.26666V9.12199C9.65594 9.43066 8.44193 10.372 8.44193 11.906C8.44193 14.772 14.1613 14.656 14.1613 16.6693C14.1613 17.3673 13.3759 18.0647 12.0873 18.0647C10.1533 18.0647 9.50927 16.8053 8.72393 16.8053C8.34127 16.8053 7.99927 17.1147 7.99927 17.5813C7.99927 18.3233 9.29127 19.2153 11.0679 19.464L11.0673 19.4707V20.4027C11.0673 20.9173 11.5019 21.336 12.0379 21.336C12.5739 21.336 13.0079 20.9173 13.0079 20.4027V19.4707C13.0079 19.4593 13.0026 19.4507 13.0019 19.4407C14.6006 19.154 15.9339 18.1527 15.9339 16.3613Z" fill="#67757F"></path>
                      </svg>
                    </span>
                    <p style={{ paddingLeft: '1.25rem', alignSelf: 'center', margin: 0, color: 'rgb(186 143 211)' }}><span style={{ color: 'rgb(255 255 255)' }}>Purple Prison Crypto Exchange</span>  and purchase
                      <strong style={{ color: 'rgb(255 255 255)', fontWeight: 'bolder' }}> 4.40 <small>USD</small></strong> of store credit
                    </p>
                  </div>
                </div>

                <div style={{ paddingTop: '0.5rem', paddingBottom: '0.5rem' }}>
                  <h3 style={{ color: 'rgb(255 255 255)', fontWeight: 500, fontSize: 'inherit', fontFamily: 'inherit' }}>Step 3.</h3>
                  <div style={{ padding: '16px 0', display: 'flex', }}>
                    <span style={{ alignSelf: 'center', paddingLeft: '0.5rem' }}>
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M11 2C9.02219 2 7.08879 2.58649 5.4443 3.6853C3.79981 4.78412 2.51809 6.3459 1.76121 8.17317C1.00433 10.0004 0.806299 12.0111 1.19215 13.9509C1.578 15.8907 2.53041 17.6725 3.92894 19.0711C5.32746 20.4696 7.10929 21.422 9.0491 21.8079C10.9889 22.1937 12.9996 21.9957 14.8268 21.2388C16.6541 20.4819 18.2159 19.2002 19.3147 17.5557C20.4135 15.9112 21 13.9778 21 12C21 10.6868 20.7413 9.38642 20.2388 8.17317C19.7363 6.95991 18.9997 5.85752 18.0711 4.92893C17.1425 4.00035 16.0401 3.26375 14.8268 2.7612C13.6136 2.25866 12.3132 2 11 2ZM11 20C9.41775 20 7.87104 19.5308 6.55544 18.6518C5.23985 17.7727 4.21447 16.5233 3.60897 15.0615C3.00347 13.5997 2.84504 11.9911 3.15372 10.4393C3.4624 8.88743 4.22433 7.46197 5.34315 6.34315C6.46197 5.22433 7.88743 4.4624 9.43928 4.15372C10.9911 3.84504 12.5997 4.00346 14.0615 4.60896C15.5233 5.21447 16.7727 6.23984 17.6518 7.55544C18.5308 8.87103 19 10.4177 19 12C19 14.1217 18.1572 16.1566 16.6569 17.6569C15.1566 19.1571 13.1217 20 11 20ZM11 6C10.7348 6 10.4804 6.10536 10.2929 6.29289C10.1054 6.48043 10 6.73478 10 7V11.42L7.9 12.63C7.70736 12.7392 7.5564 12.9092 7.47078 13.1134C7.38517 13.3176 7.36975 13.5444 7.42695 13.7583C7.48414 13.9722 7.61072 14.1611 7.78682 14.2953C7.96292 14.4296 8.17859 14.5015 8.4 14.5C8.57518 14.5012 8.7476 14.4564 8.9 14.37L11.5 12.87L11.59 12.78L11.75 12.65C11.7891 12.6005 11.8226 12.5468 11.85 12.49C11.8826 12.4363 11.9094 12.3793 11.93 12.32C11.9572 12.2564 11.9741 12.1889 11.98 12.12L12 12V7C12 6.73478 11.8946 6.48043 11.7071 6.29289C11.5196 6.10536 11.2652 6 11 6Z" fill="white"></path>
                      </svg>
                    </span>
                    <p style={{ paddingLeft: '1rem', alignSelf: 'center', margin: 0, color: 'rgb(186 143 211)' }}><span style={{ color: 'rgb(255 255 255)' }}>Redeem </span> your <span style={{ color: 'rgb(255 255 255)' }}>store credit code</span> on <span style={{ color: 'rgb(255 255 255)' }}>this page</span></p>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
                  <a href="https://buy.purpleprison.net/" target="_blank">
                    <button style={{
                      width: '140px',
                      height: '44px',
                      borderRadius: '15px',
                      background: '#AD3539',
                      fontStyle: 'inherit',
                      fontSize: 'inherit',
                      border: 'none',
                      cursor: 'pointer',
                      fontWeight: '600',
                    }}>
                      Get Support
                    </button>
                  </a>

                  <button style={{
                    width: '140px',
                    height: '44px',
                    borderRadius: '15px',
                    background: '#81B65C',
                    fontStyle: 'inherit',
                    fontSize: 'inherit',
                    border: 'none',
                    cursor: 'pointer',
                    fontWeight: 600,
                  }} onClick={handleClose}>
                    Close
                  </button>
                </div>
              </section>
            </div>
          </BootstrapDialog>
        </div>

      </div>
    </>

  );
};

export default StepContainer;