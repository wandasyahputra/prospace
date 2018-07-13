import {
  actionAddCompanyProfile,
  actionRemoveCompanyProfile,
  actionAddCompanyOffice,
  actionRemoveCompanyOffice,
  actionAddMeetingRoom,
  actionRemoveMeetingRoom,
  actionRestoreCompanyData
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
export const dispatchAddMeetingRoom = (data) => {
  return dispatch => {
    dispatch(actionAddMeetingRoom(data))
  }
}
export const dispatchRemoveMeetingRoom = (data) => {
  return dispatch => {
    dispatch(actionRemoveMeetingRoom(data))
  }
}
export const dispatchRestoreCompanyData = (data) => {
  return dispatch => {
    dispatch(actionRestoreCompanyData(data))
  }
}
