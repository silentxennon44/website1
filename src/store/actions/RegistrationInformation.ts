export const SET_REGISTRATION_FIELD = "SET_REGISTRATION_FIELD" as const;
export const SET_REGISTRATION_SECTION = "SET_REGISTRATION_SECTION" as const;

export interface RegistrationState {
  contact: {
    mobileNumber: string;
    email: string;
  };
  personal: {
    firstName: string;
    lastName: string;
    address: string;
    birthday: string;
    birthPlace: string;
  };
  address:{
    street: string;
    barangay: string;
    city: string;
    province: string;
    country: string;
    zipCode: string;
  }
  MailingAddress:{
    street: string;
    barangay: string;
    city: string;
    province: string;
    country: string;
    zipCode: string;
  }
  citizenship: {
    citizenship: string;
    isFilipino: boolean;
  };
  politics:{
    isPolitician: boolean;
    isConnectedToPolitician: boolean;
  }
  work:{
    source: string;
    nature: string;
  }
}

export type SetRegistrationFieldAction<
  S extends keyof RegistrationState = keyof RegistrationState,
  K extends keyof RegistrationState[S] = keyof RegistrationState[S]
> = {
  type: typeof SET_REGISTRATION_FIELD;
  payload: {
    section: S;
    key: K;
    value: RegistrationState[S][K];
  };
};

export type SetRegistrationSectionAction<
  S extends keyof RegistrationState = keyof RegistrationState
> = {
  type: typeof SET_REGISTRATION_SECTION;
  payload: {
    section: S;
    data: Partial<RegistrationState[S]>;
  };
};

export type RegistrationAction =
  | {
      [S in keyof RegistrationState]: {
        [K in keyof RegistrationState[S]]: SetRegistrationFieldAction<S, K>;
      }[keyof RegistrationState[S]];
    }[keyof RegistrationState]
  | SetRegistrationSectionAction;

  export const setRegistrationField = <
  S extends keyof RegistrationState,
  K extends keyof RegistrationState[S]
>(
  section: S,
  key: K,
  value: RegistrationState[S][K]
): SetRegistrationFieldAction<S, K> => ({
  type: SET_REGISTRATION_FIELD,
  payload: { section, key, value },
});

export const setRegistrationSection = <
  S extends keyof RegistrationState
>(
  section: S,
  data: Partial<RegistrationState[S]>
): SetRegistrationSectionAction<S> => ({
  type: SET_REGISTRATION_SECTION,
  payload: { section, data },
});