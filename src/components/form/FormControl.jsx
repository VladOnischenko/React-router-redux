import React from 'react';
import Input from "./Input";
import TextArea from "./TextArea";

const FormControl = ({control, ...rest}) => {
  switch (control) {
    case 'input':
      return <Input {...rest}/>
    case 'textarea':
      return <TextArea {...rest}/>
    default:
      return null
  }
};

export default FormControl;