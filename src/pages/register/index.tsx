import styles from "./styles.module.scss";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";
import CustomStepper from "./CustomStepper";
import {
  setCompletedSteps,
  setCurrentStep,
} from "@/store/actions/RegistrationSteps";
import { RegistrationFields, RegistrationSteps } from "@/static/staticData";
import classNames from "classnames";

import { useState } from "react";
import GoogleInputBox from "../../components/googleInputBox";
import { setRegistrationField } from "@/store/actions/RegistrationInformation";
import { MuiTelInput } from "mui-tel-input";
import { validEmailRegex } from "@/utils/helpers";
import { notify } from "@/components/customToast";

import { AnimatePresence, motion } from "framer-motion";
import { Modal, Box, Typography } from "@mui/material";
import { MuiOtpInput } from 'mui-one-time-password-input'

function Register() {
  const dispatch = useAppDispatch();

  const { currentStep, completedSteps } = useAppSelector(
    (state) => state.RegistrationSteps,
  );

  const { mobileNumber, email } = useAppSelector(
    (state) => state.RegistrationInformation,
  );

  const [email2, setEmail2] = useState("");
  const [error, setError] = useState<RegistrationFields[]>([]);
  const [direction, setDirection] = useState(1);
  const [isAnimating, setIsAnimating] = useState(false);

  const [showConfirmationModal, setShowConfirmationModal] = useState(false);
  const [isContactConfirmed, setIsContactConfirmed] = useState(false);
  const [mobileVerificationOk, setMobileVerificationOk] = useState(false);
  const [mobileOtp, setMobileOtp] = useState("");
  const [emailOtp, setEmailOtp] = useState("");

  // ---------------------------
  // VALIDATION
  // ---------------------------
  const validateStep = (step: string): RegistrationFields[] => {
    const errors: RegistrationFields[] = [];

    switch (step) {
      case "Contact Info":
        if (
          !mobileNumber ||
          mobileNumber.replace("+63 ", "").replaceAll(" ", "").length !== 10
        ) {
          errors.push("Mobile Number");
        }

        if (!email) {
          errors.push("Email");
        } else if (!validEmailRegex.test(email)) {
          errors.push("Email");
        }

        if (!email2) {
          errors.push("Confirm Email");
        } else if (email2 !== email) {
          errors.push("Confirm Email");
        }

        break;
    }

    return errors;
  };

  // ---------------------------
  // NAVIGATION CORE
  // ---------------------------
  const proceedNextStep = () => {
    const currentIndex = RegistrationSteps.indexOf(currentStep);
    const nextStep = RegistrationSteps[currentIndex + 1];

    if (!nextStep) return;

    if (currentStep === "Contact Info" && !isContactConfirmed)
      return setShowConfirmationModal(true);

    setError([]);

    dispatch(setCurrentStep(nextStep));
    dispatch(setCompletedSteps([...completedSteps, currentStep]));
  };

  const proceedPrevStep = () => {
    const currentIndex = RegistrationSteps.indexOf(currentStep);
    const prevStep = RegistrationSteps[currentIndex - 1];

    if (!prevStep) return;

    dispatch(setCurrentStep(prevStep));
  };

  // ---------------------------
  // NEXT
  // ---------------------------
  const handleNext = () => {
    const errors = validateStep(currentStep);

    if (errors.length > 0) {
      setError(errors);

      notify("Please fix the highlighted fields", "error");

      errors.forEach((field) => notify(`Please check ${field}`, "error"));

      return;
    }

    setDirection(1);
    proceedNextStep();
  };

  // ---------------------------
  // PREV
  // ---------------------------
  const handlePrev = () => {
    setDirection(-1);
    proceedPrevStep();
  };

  // ---------------------------
  // STEP UI
  // ---------------------------
  const stepVariants = {
    initial: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? 50 : -50,
    }),
    animate: {
      opacity: 1,
      x: 0,
    },
    exit: (dir: number) => ({
      opacity: 0,
      x: dir > 0 ? -50 : 50,
    }),
  };

  const renderStep = () => {
    switch (currentStep) {
      case "Contact Info":
        return (
          <section className={classNames(styles.contactInfo, styles.slide)}>
            <h1>Make sure the personal information you provided is correct</h1>

            {/* MOBILE */}
            <div className={classNames(styles.mobileNumber, styles.field)}>
              <span>Mobile Number</span>
              <MuiTelInput
                // disableFormatting
                forceCallingCode
                onlyCountries={["PH"]}
                defaultCountry="PH"
                value={mobileNumber}
                className={classNames(styles.mobileNumberInput, {
                  [styles.errorInput]: error.includes("Mobile Number"),
                })}
                onChange={(value) =>
                  dispatch(setRegistrationField("mobileNumber", value))
                }
              />
            </div>

            {/* EMAIL */}
            <div className={classNames(styles.email1, styles.field)}>
              <span>Email</span>
              <GoogleInputBox
                type="email"
                value={email}
                classname={classNames(styles.emailInput1, {
                  [styles.errorInput]: error.includes("Email"),
                })}
                onChange={(value) =>
                  dispatch(setRegistrationField("email", value))
                }
              />
            </div>

            {/* CONFIRM EMAIL */}
            <div className={classNames(styles.email2, styles.field)}>
              <span>Confirm Email</span>
              <GoogleInputBox
                type="email"
                value={email2}
                classname={classNames(styles.emailInput2, {
                  [styles.errorInput]: error.includes("Confirm Email"),
                })}
                onChange={(value) => setEmail2(value)}
              />
            </div>
            <Modal
              open={showConfirmationModal}
              aria-labelledby="confirmation-modal-title"
              aria-describedby="confirmation-modal-description"
            >
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "background.paper",
                  outline: "2px solid #000",
                  boxShadow: 24,
                  p: 4,
                }}
              >
                <Typography
                  id="confirmation-modal-title"
                  variant="h6"
                  component="h2"
                >
                  {!mobileVerificationOk ? "Mobile Number Verified" : "Email Verification"}
                </Typography>
                <Typography id="confirmation-modal-description" sx={{ mt: 2 }}>
                  {!mobileVerificationOk ? `Please enter the 6 digit OTP sent to the number ending in ${mobileNumber.slice(-3)}` : "Email Verification"}
                  <MuiOtpInput
                    TextFieldsProps={{ placeholder: '-' }}
                    value={mobileOtp}
                    length={6}
                    onChange={(value) => setMobileOtp(value)}
                  />
                </Typography>
              </Box>
            </Modal>
          </section>
        );

      case "ID":
        return (
          <section className={classNames(styles.summary, styles.slide)}>
            <h1>ID</h1>
            <p>Please review the information you provided before submitting.</p>
          </section>
        );

      case "Photo":
        return (
          <section className={classNames(styles.summary, styles.slide)}>
            <h1>Photo</h1>
            <p>Please review the information you provided before submitting.</p>
          </section>
        );

      case "Personal Info":
        return (
          <section className={classNames(styles.summary, styles.slide)}>
            <h1>Personal Info</h1>
            <p>Please review the information you provided before submitting.</p>
          </section>
        );

      case "Financial Info":
        return (
          <section className={classNames(styles.summary, styles.slide)}>
            <h1>Financial Info</h1>
            <p>Please review the information you provided before submitting.</p>
          </section>
        );

      case "Summary":
        return (
          <section className={classNames(styles.summary, styles.slide)}>
            <h1>Summary</h1>
            <p>Please review the information you provided before submitting.</p>
          </section>
        );

      default:
        return null;
    }
  };

  return (
    <main className={styles.register}>
      <section className={styles.stepper}>
        <CustomStepper />
      </section>

      <section
        className={styles.pageContent}
        style={{ overflow: isAnimating ? "hidden" : "auto" }}
      >
        <AnimatePresence mode="wait" custom={direction}>
          <motion.div
            key={currentStep}
            custom={direction}
            variants={stepVariants}
            initial="initial"
            animate="animate"
            exit="exit"
            transition={{ duration: 0.25 }}
            onAnimationStart={() => setIsAnimating(true)}
            onAnimationComplete={() => setIsAnimating(false)}
          >
            {renderStep()}
          </motion.div>
        </AnimatePresence>
      </section>

      {/* ACTIONS */}
      <section className={styles.pageAction}>
        {currentStep !== "Contact Info" && completedSteps.length > 0 && (
          <button className="defaultButton" onClick={handlePrev}>
            Previous
          </button>
        )}

        {currentStep !== "Summary" && (
          <button className="defaultButton" onClick={handleNext}>
            Next
          </button>
        )}
      </section>
    </main>
  );
}

export default Register;
