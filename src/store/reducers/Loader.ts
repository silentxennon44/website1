import { LoaderAction, SET_IS_PAGE_LOADING } from "../actions/Loader";

type PageLoadingType = {
  isPageLoading: boolean;
};

const initialState: PageLoadingType = {
  isPageLoading: false,
};

export const Loader_Reducer = (
  state: PageLoadingType = initialState,
  action: LoaderAction
): PageLoadingType => {
  switch (action.type) {
    case SET_IS_PAGE_LOADING:
      return {
        ...state,
        isPageLoading: action.payload,
      };

    default:
      return state;
  }
};