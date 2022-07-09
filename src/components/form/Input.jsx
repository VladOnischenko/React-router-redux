import React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

const Input = ({ label, name, control, ...rest}) => {
  return (
    <div className="form-control">
      <label htmlFor={name}>{label}</label>
      <Field id={name} name={name} type={control} {...rest}/>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  );
};

export default Input;