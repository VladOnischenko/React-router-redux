import React from 'react';
import * as Yup from 'yup'
import {Form, Formik} from "formik";
import FormControl from "../../form/FormControl";
import {useDispatch, useSelector} from "react-redux";
import {clearBasket} from "../../../store/Cart/cartAction";
import LoaderSpinner from "../../loader-spinner/LoaderSpinner";
import {spinnerOFF, spinnerON} from "../../../store/LoaderSpinner/spinnerAction";

const CartFormContainer = () => {
  const dispatch = useDispatch()
  const { cartReducer, spinnerReducer } = useSelector(state => state)
  const { cart } = cartReducer
  const { loading } = spinnerReducer
  const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/
  const initialValues = {
    name: '',
    surname: '',
    userAge: '',
    address: '',
    phoneNumber: ''
  }
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(3, 'Must be more than 3 characters')
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .required("Name is required"),
    surname: Yup.string()
      .min(5, 'Must be more than 5 characters')
      .matches(/^[aA-zZ\s]+$/, "Only alphabets are allowed for this field ")
      .required("Surname is required"),
    userAge: Yup.number()
      .typeError('You must specify a number')
      .required("Age is required"),
    address: Yup.string()
      .required("Address is required"),
    phoneNumber: Yup.string()
      .matches(phoneRegExp, 'Phone number is not valid')
      .required("Phone is required"),
  })

  const onSubmit = (values) => {
    dispatch(spinnerON())
    setTimeout(() => {
      console.log("Submit form", values)
      dispatch(clearBasket())
      dispatch(spinnerOFF())
    },2000)
  }

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
      <>
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
                <FormControl control="text" name="phoneNumber" label="Phone number"/>
                <FormControl control="text" name="address" label="Address"/>
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
        {
          !loading ? <LoaderSpinner /> : null
        }
      </>
  )
};

export default CartFormContainer;