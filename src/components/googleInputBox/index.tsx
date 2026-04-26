import { RiCloseCircleLine } from "react-icons/ri";
import classNames from "classnames";
import styles from "./styles.module.scss";
import { IconType } from "react-icons/lib";
import { HTMLInputTypeAttribute, FocusEvent, FormEvent } from "react";

type GoogleInputBoxProps = {
  value: string;
  onChange: (value: string) => void;
  onOk?: (value: string) => void;
  onBlur?: (value: FocusEvent<HTMLInputElement, Element>) => void;
  onFocus?: (value: FocusEvent<HTMLInputElement, Element>) => void;
  onInput?: (value: FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  buttonTitle?: string;
  classname?: string;
  showClear?: boolean;
  type?: HTMLInputTypeAttribute;
  AdditionalIcon?: IconType;
};

const GoogleInputBox = ({
  value,
  onChange,
  onOk,
  onBlur,
  onFocus,
  onInput,
  placeholder = "",
  buttonTitle = "Button",
  classname = "",
  showClear = false,
  type = "text",
  AdditionalIcon,
}: GoogleInputBoxProps) => {
  return (
    <div className={classNames(styles.inputContainer, classname)}>
      <input
        type={type}
        name={placeholder}
        className={"textbox"}
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        title={placeholder}
        onBlur={(e) => onBlur && onBlur(e)}
        onFocus={(e) => onFocus && onFocus(e)}
        onInput={(e) => onInput && onInput(e)}
      />
      <label htmlFor={placeholder} className={"label"}>
        {placeholder}
      </label>
      {showClear && value && (
        <span className={"clear"} onClick={() => onChange("")} title="Clear">
          <RiCloseCircleLine />
        </span>
      )}
      {AdditionalIcon ? (
        <button
          title={"Submit " + buttonTitle}
          type="button"
          className="inputButton"
          onClick={() => onOk && onOk(value)} // Call `onOk` only if it's defined
        >
          <AdditionalIcon />
        </button>
      ) : null}
    </div>
  );
};

export default GoogleInputBox;
