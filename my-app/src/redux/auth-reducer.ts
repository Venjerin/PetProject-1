import { stopSubmit } from "redux-form";
import { ResultCodeEnum, ResultCodeForCaptcha, authAPI, securityAPI } from "../api/api.ts";

const SET_USER_DATA = "auth/SET_USER_DATA";
const UPDATE_NEW_MESSAGE = "UPDATE_NEW_MESSAGE";
const GET_CAPTCHA_URL_SUCCESS = "auth/GET_CAPTCHA_URL_SUCESS";


// export type InitialStateType = {
//   userId: number | null
//   email: string | null
//   login: string | null
//   isFetching: boolean
//   isAuth: boolean
//   captchaUrl: string | null
// };

let initialState = {
  userId: null as number | null,
  email: null as string | null,
  login: null as string | null,
  isFetching: false,
  isAuth: false,
  captchaUrl: null as string | null
};

export type InitialStateType = typeof initialState;
const authReducer = (state = initialState, action: any): InitialStateType => {
  switch (action.type) {
    case SET_USER_DATA:
      return {
        ...state,
        ...action.payload,
      };
    case GET_CAPTCHA_URL_SUCCESS:
      return {
        ...state,
        ...action.payload,
      };
    default:
      return state;
  }
};

export const updateNewMessageActionCreator = (text) => ({
  type: UPDATE_NEW_MESSAGE,
  newMessage: text,
});

type SetAuthUserDataActionPayloadType = {
  userId: number | null
  email: string | null
  login: string | null
  isAuth: boolean
} 

type SetAuthUserDataActionType = {
  type: typeof SET_USER_DATA
  payload: SetAuthUserDataActionPayloadType
}

export const setAuthUserData = (
  userId: number | null, email: string | null, login: string | null, isAuth: boolean )
  : SetAuthUserDataActionType => ({
  type: SET_USER_DATA,
  payload: { userId, email, login, isAuth },
});


type GetCaptchaUrlSuccessActionType = {
  type: typeof GET_CAPTCHA_URL_SUCCESS
  payload: { captchaUrl: string}
}

export const getCaptchaUrlSuccess = (captchaUrl: string): GetCaptchaUrlSuccessActionType => ({
  type: GET_CAPTCHA_URL_SUCCESS,
  payload: {captchaUrl},
});

export const getAuthUserData = () => async (dispatch: any) => {
  let meData = await authAPI.me();

  if (meData.resultCode === ResultCodeEnum.Success) {
    let { id, login, email } = meData.data;
    dispatch(setAuthUserData(id, email, login, true));
  }
};

export const login = (email: string, password: string, rememberMe: boolean, captcha: any) => async (dispatch: any) => {
  let loginData = await authAPI.login(email, password, rememberMe, captcha);
  if (loginData.resultCode === ResultCodeEnum.Success) {
    dispatch(getAuthUserData());
  } else {
    if (loginData.resultCode === ResultCodeForCaptcha.CaptchIsRequired) {
      dispatch(getCaptchaUrl());
    }
    let message =
      loginData.messages.length > 0
        ? loginData.messages[0]
        : "Something went wrong";
    dispatch(stopSubmit("login", { _error: message }));
  }
};

export const logout = () => async (dispatch: any) => {
  let response = await authAPI.logout();
  if (response.data.resultCode === 0) {
    dispatch(getAuthUserData(null, null, null, false, false));
  }
};

export const getCaptchaUrl = () => async (dispatch: any) => {
  let response = await securityAPI.getCaptchUrl();
  const captchaUrl = response.data.url;
    dispatch(getCaptchaUrlSuccess(captchaUrl));
};


export default authReducer;

