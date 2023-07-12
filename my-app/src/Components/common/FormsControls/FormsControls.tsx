import React, { FC } from "react";
import classes from "./FormsControls.module.css";
import { WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";

type FormControlPropsType = {
  meta: WrappedFieldMetaProps
}


const FormControl: FC<FormControlPropsType> = ({meta: {touched, error}, ...props }) => {
  const hasError = touched && error;
  return (
    <div className={classes.formControl + " " + (hasError ? classes.error : "")}>
      <div>{props.children}</div>
      <div>{hasError && <span>{error}</span>}</div>
    </div>
  );
};



export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps}></textarea>
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, ...restProps } = props;
  return (
    <FormControl {...props}>
      <input {...input} {...restProps}></input>
    </FormControl>
  );
};
