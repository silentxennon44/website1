export const SET_REGISTRATION_FIELD = "SET_REGISTRATION_FIELD" as const;

export type SetRegistrationFieldAction<
  K extends keyof RegistrationInformationState = keyof RegistrationInformationState
> = {
  type: typeof SET_REGISTRATION_FIELD;
  payload: {
    key: K;
    value: RegistrationInformationState[K];
  };
};

export type RegistrationInformationAction = SetRegistrationFieldAction;

export const setRegistrationField = <
  K extends keyof RegistrationInformationState
>(
  key: K,
  value: RegistrationInformationState[K]
): SetRegistrationFieldAction<K> => ({
  type: SET_REGISTRATION_FIELD,
  payload: { key, value },
});