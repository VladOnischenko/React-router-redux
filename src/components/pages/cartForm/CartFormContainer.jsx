import React from 'react';
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import FormControl from "../../form/FormControl";
import {useSelector} from "react-redux";

const CartFormContainer = () => {
  const { cartReducer } = useSelector(state => state)
  const { cart } = cartReducer

  const initialValues = {
    name: '',
    surname: '',
    userAge: '',
    address: '',
    phoneNumber: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string().min(3, 'Must be more than 3 characters').required("Name is required"),
    surname: Yup.string().min(5, 'Must be more than 5 characters').required("Surname is required"),
    userAge: Yup.number().required("Age is required"),
    address: Yup.string().required("Address is required"),
    phoneNumber: Yup.string().required("Phone is required"),
  })

  const onSubmit = (values) => console.log("Submit form", values)

  const priceCounter = () => {
    let totalPrice = null
    try {
      cart.forEach( item => {
        const parsed = JSON.parse(item)
        totalPrice += parsed.price
      })
    }catch (e) {
      throw new Error(e.message)
    }
    return +totalPrice.toFixed(2)
  }

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
      {
        formik =>
          <Form>
            <FormControl control="text" name="name" label="Name"/>
            <FormControl control="text" name="surname" label="Surname"/>
            <FormControl control="text" name="userAge" label="Age"/>
            <FormControl control="text" name="address" label="Address"/>
            <FormControl control="text" name="phoneNumber" label="Phone number"/>
            <h4>Total price: ${priceCounter()}</h4>
            <button
              type="submit"
              disabled={!formik.isValid || formik.isSubmitting}
              className={
                !formik.isValid || formik.isSubmitting ? 'custom-btn btn-disabled' : 'custom-btn btn-enabled'
            }>Checkout</button>
          </Form>
      }
    </Formik>
  )
};

export default CartFormContainer;