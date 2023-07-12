import { stopSubmit } from "redux-form";
import { authAPI } from "../api/api.ts";
import { getAuthUserData } from "./auth-reducer.ts";
import { type } from "os";

const SET_INITIALIZED_SUCCESS = "SET_INITIALIZED_SUCCESS";


export type InitialStateType = {
  initialized: boolean
}

let initialState: InitialStateType = {
  initialized: false,
};

const appReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_INITIALIZED_SUCCESS:
      return {
        ...state,
        initialized: true,
      };
    default:
      return state;
  }
};

type InitializedSuccessActionType = {
  type: typeof SET_INITIALIZED_SUCCESS
}

export const setInitializedSuccess = (): InitializedSuccessActionType => ({ type: SET_INITIALIZED_SUCCESS });

export const initializeApp = () => (dispatch) => {
  let promise = dispatch(getAuthUserData());
  Promise.all([promise]).then(() => {
    dispatch(setInitializedSuccess());
  });
};

export default appReducer;
