import { Stepper, Step, StepLabel, StepConnector, stepConnectorClasses, StepIconProps, styled, } from "@mui/material"
import styles from "./styles.module.scss"
import { RegistrationSteps } from "@/static/staticData"
import { useAppSelector } from "@/store/hooks/hooks";
import { FaRegCheckCircle } from "react-icons/fa";
import { FaDotCircle } from "react-icons/fa";
import { FaRegCircle } from "react-icons/fa";


function StepIcon(props: StepIconProps) {
  const { active, completed, className } = props;
  return (
    <StepIconRoot ownerState={{ completed, active }} className={className}>
      {completed ? <FaRegCheckCircle /> : active ? <FaDotCircle /> : <FaRegCircle />}
    </StepIconRoot>
  );
}

const StepIconRoot = styled('div')<{
  ownerState: { completed?: boolean; active?: boolean };
}>(() => ({
  fontSize: 24,
  width: 50,
  height: 50,
  display: 'flex',
  borderRadius: '50%',
  justifyContent: 'center',
  alignItems: 'center',
  color:  "var(--application-grey)",
  variants: [
    {
      props: ({ ownerState }) => ownerState.active,
      style: {
        color:  "var(--color-2)"
      },
    },
    {
      props: ({ ownerState }) => ownerState.completed,
      style: {
        color:  "var(--color-2)"
      },
    },
  ],
}));


const ColorlibConnector = styled(StepConnector)(({ theme }) => ({
  [`&.${stepConnectorClasses.alternativeLabel}`]: {
    top: 22,
  },

  [`&.${stepConnectorClasses.active} .${stepConnectorClasses.line}`]: {
    backgroundImage:
      "repeating-linear-gradient(to right, #1976d2 0, #1976d2 6px, transparent 6px, transparent 16px)",
  },

  [`&.${stepConnectorClasses.completed} .${stepConnectorClasses.line}`]: {
    backgroundImage:
      "repeating-linear-gradient(to right, #1976d2 0, #1976d2 6px, transparent 6px, transparent 16px)",
  },

  [`& .${stepConnectorClasses.line}`]: {
    height: 3,
    border: 0,
    backgroundImage:
      "repeating-linear-gradient(to right, #eaeaf0 0, #eaeaf0 6px, transparent 6px, transparent 16px)",
    borderRadius: 1,

    ...theme.applyStyles("dark", {
      backgroundImage:
        `repeating-linear-gradient(to right, ${theme.palette.grey[800]} 0, ${theme.palette.grey[800]} 6px, transparent 6px, transparent 16px)`,
    }),
  },
}));

function CustomStepper() {
  
    const { currentStep } = useAppSelector(state => state.RegistrationSteps);
  return (
    <Stepper alternativeLabel activeStep={RegistrationSteps.indexOf(currentStep)} connector={<ColorlibConnector />}>
      {RegistrationSteps.map((label) => (
        <Step key={label}>
          <StepLabel StepIconComponent={StepIcon}>{label}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}

export default CustomStepper