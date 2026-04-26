import classNames from "classnames"
import styles from "./styles.module.scss"
import { useLocation } from "react-router-dom";
import { useAppSelector } from "@/store/hooks/hooks";
import { RegistrationStepsObj } from "@/static/staticData";

function Header({title, desc = ""}) {
  const location = useLocation();

  const {currentStep} = useAppSelector(state => state.RegistrationSteps);

  return (
    <header className={classNames(styles.header, )}>
      <h1 >{title}</h1>
      {desc && <span>{desc}</span>}
      {location.pathname==='/register' && <span>{RegistrationStepsObj.filter(item=>item.title===currentStep)[0].description}</span>}
    </header>
  )
}

export default Header