import React, { FC } from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls.tsx";
import { requiredField } from "../../utils/validators/validators.ts";
import { connect, useDispatch, useSelector } from "react-redux";
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


const Login: FC< MapDispatchPropsType> = (props) => {

  const captchaUrl = useSelector((state: AppStateType) => state.auth.captchaUrl);
  const isAuth = useSelector((state: AppStateType) => state.auth.isAuth);
  const dispatch = useDispatch();

  const onSubmit = (formData: LoginFormValuesType) => {
    // dispatch(login(formData.email, formData.password, formData.rememberMe, formData.captcha))
    props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
  };
  if (isAuth) {
    return <Navigate to={"/profile"}></Navigate>;
  }
  return (
    <div>
      <h1>Login</h1>
      <LoginReduxForm onSubmit={onSubmit} captchaUrl={captchaUrl}></LoginReduxForm>
    </div>
  );
};



export default connect(null, { login })(Login);
