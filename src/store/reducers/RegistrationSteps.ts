import { RegistrationStep } from "@/static/staticData";
import {
  SET_CURRENT_STEP,
  SET_COMPLETED_STEPS,
  RegistrationStepsAction
} from "@/store/actions/RegistrationSteps";

export interface RegistrationStepsState {
  currentStep: RegistrationStep;
  completedSteps: RegistrationStep[];
}

export const initialRegistrationStepsState: RegistrationStepsState = {
  currentStep: "Summary",
  completedSteps: ["Contact Info", "Personal Info", "ID", "Financial Info", "Photo"],
};

export const RegistrationSteps_Reducer = (
  state: RegistrationStepsState = initialRegistrationStepsState,
  action: RegistrationStepsAction
): RegistrationStepsState => {
  switch (action.type) {
    case SET_COMPLETED_STEPS:
      return {
        ...state,
        completedSteps: action.payload.completedSteps,
      };

    case SET_CURRENT_STEP:
      return {
        ...state,
        currentStep: action.payload.currentStep,
      };

    default:
      return state;
  }
};