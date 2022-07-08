import React from 'react';
import * as Yup from 'yup'
import {Formik, Form} from "formik";
import FormControl from "./FormControl";

const FormContainer = () => {
  const initialValues = {
    name: '',
    surname: '',
    userAge: '',
    address: '',
    phoneNumber: ''
  }

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    surname: Yup.string().required("Surname is required"),
    userAge: Yup.number().required("Age is required"),
    address: Yup.string().required("Address is required"),
    phoneNumber: Yup.number().required("Phone is required"),
  })

  const onSubmit = (values) => console.log("Submit form", values)

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        formik =>
          <Form>
            <FormControl control="input" type="input" name="name" label="Name"/>
            <FormControl control="input" type="input" name="surname" label="Surname"/>
            <FormControl control="input" type="input" name="userAge" label="Age"/>
            <FormControl control="input" type="input" name="address" label="Address"/>
            <FormControl control="input" type="input" name="phoneNumber" label="Phone number"/>
            <button type="submit" disabled={!formik.isValid || formik.isSubmitting}>Submit</button>
          </Form>
      }
    </Formik>
  )
};

export default FormContainer;