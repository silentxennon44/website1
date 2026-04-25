import { RegistrationStep } from "@/static/staticData";

export const SET_CURRENT_STEP = 'SET_CURRENT_STEP' as const
export const SET_COMPLETED_STEPS = 'SET_COMPLETED_STEPS' as const

export type SetCurrentStepAction = {
  type: typeof SET_CURRENT_STEP;
  payload: {
    currentStep: RegistrationStep;
  };
};

export type SetCompletedStepsAction = {
  type: typeof SET_COMPLETED_STEPS;
  payload: {
    completedSteps: RegistrationStep[];
  };
};

export type RegistrationStepsAction =
  | SetCurrentStepAction
  | SetCompletedStepsAction;

  export const setCurrentStep = (
  step: RegistrationStep
): SetCurrentStepAction => ({
  type: SET_CURRENT_STEP,
  payload: { currentStep: step },
});

export const setCompletedSteps = (
  steps: RegistrationStep[]
): SetCompletedStepsAction => ({
  type: SET_COMPLETED_STEPS,
  payload: { completedSteps: steps },
});