import React from 'react';
import {ErrorMessage, Field} from "formik";
import TextError from "./TextError";

const TextArea = ({name, label, ...rest}) => {
  return (
    <div className="from-control">
      <label htmlFor={name}>{label}</label>
      <Field as="textarea" id={name} name={name} {...rest}/>
      <ErrorMessage name={name} component={TextError}/>
    </div>
  );
};

export default TextArea;