import {
  actionAddCompanyProfile,
  actionRemoveCompanyProfile,
  actionAddCompanyOffice,
  actionRemoveCompanyOffice
} from '../action/company.js'

export const dispatchAddCompanyProfile = (data) => {
  return dispatch => {
    dispatch(actionAddCompanyProfile(data))
  }
}
export const dispatchAddCompanyOffice = (data) => {
  return dispatch => {
    dispatch(actionAddCompanyOffice(data))
  }
}
export const dispatchRemoveCompanyOffice = (data) => {
  return dispatch => {
    dispatch(actionRemoveCompanyOffice(data))
  }
}
export const dispatchRemoveCompanyProfile = (data) => {
  return dispatch => {
    dispatch(actionRemoveCompanyProfile(data))
  }
}
