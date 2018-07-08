import {
  ADD_COMPANY_ADDRESS,
  ADD_COMPANY_PROFILE,
  REMOVE_COMPANY_ADDRESS,
  REMOVE_COMPANY_PROFILE,
} from '../action/constant'

export const actionAddCompanyOffice = data => {
  return {
    type: ADD_COMPANY_ADDRESS,
    payload: data
  }
}
export const actionAddCompanyProfile = data => {
  return {
    type: ADD_COMPANY_PROFILE,
    payload: data
  }
}
export const actionRemoveCompanyOffice = data => {
  return {
    type: REMOVE_COMPANY_ADDRESS,
    payload: data
  }
}
export const actionRemoveCompanyProfile = data => {
  return {
    type: REMOVE_COMPANY_PROFILE,
    payload: data
  }
}
