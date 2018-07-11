import {
  ADD_COMPANY_ADDRESS,
  ADD_COMPANY_PROFILE,
  ADD_MEETING_ROOM,
  REMOVE_COMPANY_ADDRESS,
  REMOVE_COMPANY_PROFILE,
  REMOVE_MEETING_ROOM,
  RESTORE_COMPANY_DATA
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
export const actionAddMeetingRoom = data => {
  return {
    type: ADD_MEETING_ROOM,
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
export const actionRemoveMeetingRoom = data => {
  return {
    type: REMOVE_MEETING_ROOM,
    payload: data
  }
}
export const actionRestoreCompanyData = data => {
  return {
    type: RESTORE_COMPANY_DATA,
    payload: data
  }
}
