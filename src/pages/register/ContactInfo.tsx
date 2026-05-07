import GoogleInputBox from "@/components/googleInputBox";
import { setRegistrationField } from "@/store/actions/RegistrationInformation"
import classNames from "classnames";
import { MuiTelInput } from "mui-tel-input";
import styles from "./styles.module.scss";
import { RegistrationFields } from "@/static/staticData";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "@/store/hooks/hooks";

function ContactInfo({ error }: { error: RegistrationFields[] }) {
  const dispatch = useAppDispatch();
  const { mobileNumber, email } = useAppSelector(
    (state) => state.RegistrationInformation.contact,
  );
  const [email2, setEmail2] = useState("");

  return (
    <section className={classNames(styles.contactInfo, styles.slide, "boxShadow")}>
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
          onChange={(value) => dispatch(setRegistrationField("email", value))}
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
      

    </section>
  );
}

export default ContactInfo;
