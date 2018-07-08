import {actionAddCompanyProfile,actionRemoveCompanyProfile} from '../action/company.js'

export const dispatchAddCompanyProfile = (data) => {
  return dispatch => {
    dispatch(actionAddCompanyProfile(data))
  }
}

export const dispatchRemoveCompanyProfile = (data) => {
  return dispatch => {
    dispatch(actionRemoveCompanyProfile(data))
  }
}
