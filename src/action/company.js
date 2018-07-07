import {
  ADD_COMPANY_PROFILE,
  REMOVE_COMPANY_PROFILE
} from '../action/constant'

export const actionAddCompanyProfile = data => {
  return {
    type: ADD_COMPANY_PROFILE,
    payload: data
  }
}

export const actionRemoveCompanyProfile = data => {
  return {
    type: REMOVE_COMPANY_PROFILE,
    payload: data
  }
}
