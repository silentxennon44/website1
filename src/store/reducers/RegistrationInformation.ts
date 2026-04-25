import { RegistrationInformationAction, SET_REGISTRATION_FIELD } from "../actions/RegistrationInformation";

const initialState: RegistrationInformationState = {
  mobileNumber: "",
  email: "",
};

export const RegistrationInformation_Reducer = (
  state: RegistrationInformationState = initialState,
  action: RegistrationInformationAction
): RegistrationInformationState => {
  switch (action.type) {
    case SET_REGISTRATION_FIELD:
      return {
        ...state,
        [action.payload.key]: action.payload.value,
      };

    default:
      return state;
  }
};