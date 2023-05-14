import React from "react";
import { Field, reduxForm } from "redux-form";
import { Input } from "../common/FormsControls/FormsControls";
import { requiredField } from "../../utils/validators/validators";


const LoginForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Login" name="login" component={Input} validate={[requiredField]}></Field>
            </div>
            <div>
                <Field placeholder="Password"  name="password" component={Input} validate={[requiredField]}></Field>
            </div>
            <div>
                <Field type={"checkbox"}  name="rememberMe" component={Input}></Field> remember me
            </div>
            <div>
                <button>Login</button>
            </div>
        </form>
    )
}

const LoginReduxForm = reduxForm({form: 'login'})(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        console.log(formData)
    }
    return <div>
        <h1>Login</h1>
        <LoginReduxForm onSubmit={onSubmit}></LoginReduxForm>
    </div>
}


export default Login;
