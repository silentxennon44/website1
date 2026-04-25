export const SET_IS_PAGE_LOADING = "SET_IS_PAGE_LOADING" as const;

export type SetIsPageLoadingAction = {
  type: typeof SET_IS_PAGE_LOADING;
  payload: boolean;
};

export type LoaderAction = SetIsPageLoadingAction;

export const setIsPageLoading = (
  value: boolean
): SetIsPageLoadingAction => ({
  type: SET_IS_PAGE_LOADING,
  payload: value,
});