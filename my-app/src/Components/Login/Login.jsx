import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input, createField } from "../common/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators/validators";
import { connect } from "react-redux";
import { login } from "../../redux/auth-reducer.ts";
import { Navigate } from "react-router";
import classes from "../common/FormsControls/FormsControls.module.css";

const LoginForm = ({ handleSubmit, error, captchaUrl }) => {
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

const LoginReduxForm = reduxForm({ form: "login" })(LoginForm);

const Login = (props) => {
  const onSubmit = (formData) => {
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

const mapStateToProps = (state) => ({
  captchaUrl:state.auth.captchaUrl,
  isAuth: state.auth.isAuth,
});

export default connect(mapStateToProps, { login })(Login);
