import {
  SPINNER_OFF,
  SPINNER_ON
} from "../types";

export const spinnerON = () => ({
  type: SPINNER_ON,
  payload: false
})

export const spinnerOFF = () => ({
  type: SPINNER_OFF,
  payload: true
})