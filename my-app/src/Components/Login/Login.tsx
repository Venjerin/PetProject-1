import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControls.tsx";
import { requiredField } from "../../utils/validators/validators.ts";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer.ts";
import { Navigate } from "react-router";
import classes from "../common/FormsControls/FormsControls.module.css";
import { AppStateType } from "../../redux/redux-store.js";

const LoginForm: FC<InjectedFormProps<LoginFormValuesType, LoginFormOwnProps> & LoginFormOwnProps> = ({ handleSubmit, error, captchaUrl }) => {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <Field
          placeholder="Email"
          name="email"
          component={Input}
          validate={[requiredField]}
        ></Field>
      </div>
      <div>
        <Field
          placeholder="Password"
          name="password"
          type="password"
          component={Input}
          validate={[requiredField]}
        ></Field>
      </div>
      <div>
        <Field type={"checkbox"} name="rememberMe" component={Input}></Field>{" "}
        remember me
      </div>

      {captchaUrl && <img src={captchaUrl}></img>}
      {captchaUrl && <Field
          placeholder="Write captcha"
          name="captcha"
          component={Input}
          validate={[requiredField]}
        ></Field>}

      {error && <div className={classes.formSummaryError}>{error}</div>}
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

const LoginReduxForm = reduxForm<LoginFormValuesType, LoginFormOwnProps>({ form: "login" })(LoginForm);

type MapStatePropsType = {
  captchaUrl: string | null
  isAuth: boolean
}

type MapDispatchPropsType = {
  login: (email: string, password: string, rememberMe: boolean, captcha: any) => void
}

type LoginFormValuesType = {
  email: string
  password: string
  rememberMe: boolean
  captcha: string
}

type LoginFormOwnProps = {
  captchaUrl: string | null
}


const Login: FC<MapStatePropsType & MapDispatchPropsType> = (props) => {
  const onSubmit = (formData: LoginFormValuesType) => {
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (props.isAuth) {
    return <Navigate to={"/profile"}></Navigate>;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={props.captchaUrl}></LoginReduxForm>
    </div>
  );
};

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
  captchaUrl:state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
