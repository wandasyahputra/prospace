import {
  ADD_COMPANY_ADDRESS,
  REMOVE_COMPANY_ADDRESS
} from '../action/constant'

export const actionAddCompanyAddress = data => {
  return {
    type: ADD_COMPANY_ADDRESS,
    payload: data
  }
}

export const actionRemoveCompanyAddress = data => {
  return {
    type: REMOVE_COMPANY_ADDRESS,
    payload: data
  }
}
