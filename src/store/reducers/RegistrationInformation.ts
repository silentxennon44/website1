import { RegistrationAction, RegistrationState, SET_REGISTRATION_FIELD, SET_REGISTRATION_SECTION } from "../actions/RegistrationInformation";

// const initialState: RegistrationState = {
//   contact: {
//     mobileNumber: "",
//     email: "",
//   },
//   personal: {
//     firstName: "",
//     lastName: "",
//     address: "",
//   },
// };
const initialState: RegistrationState = {
  contact: {
    mobileNumber: "+639171234567",
    email: "juan.delacruz@example.com",
  },

  personal: {
    firstName: "Juan",
    lastName: "Dela Cruz",
    address: "123 Mabini Street",
    birthday: "1998-05-21",
    birthPlace: "Quezon City",
  },

  address: {
    street: "123 Mabini Street",
    barangay: "Bagumbayan",
    city: "Quezon City",
    province: "Metro Manila",
    country: "Philippines",
    zipCode: "1100",
  },

  MailingAddress: {
    street: "456 Rizal Avenue",
    barangay: "San Antonio",
    city: "Pasig City",
    province: "Metro Manila",
    country: "Philippines",
    zipCode: "1600",
  },

  citizenship: {
    citizenship: "Filipino",
    isFilipino: true,
  },

  politics: {
    isPolitician: false,
    isConnectedToPolitician: false,
  },

  work: {
    source: "Software Development",
    nature: "Full-time Employment",
  },
};

export const RegistrationInformation_Reducer = (
  state: RegistrationState = initialState,
  action: RegistrationAction
): RegistrationState => {
  switch (action.type) {
    case SET_REGISTRATION_FIELD: {
      const { section, key, value } = action.payload;

      return {
        ...state,
        [section]: {
          ...state[section],
          [key]: value,
        },
      };
    }

    case SET_REGISTRATION_SECTION: {
      const { section, data } = action.payload;

      return {
        ...state,
        [section]: {
          ...state[section],
          ...data,
        },
      };
    }

    default:
      return state;
  }
};