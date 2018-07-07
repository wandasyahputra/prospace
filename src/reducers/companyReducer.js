import {
  ADD_COMPANY_PROFILE,
  REMOVE_COMPANY_PROFILE
} from '../action/constant'

const initialState = {
    companyProfile:[],
}

const addCompanyProfile = (state, data) => {
  let newState = {
    ...state,
    dataCompanyProfile: [
      ...state.dataCompanyProfile,
      {
        data
      }
    ]
  }
  return newState
}

const removeCompanyProfile = (state, data) => {
  let temp = state.dataCompanyProfile.map((item,key)=>{return item.id!==data.id})
  let newState = {
    ...state,
    dataCompanyProfile: temp
  }
  return newState
}
export default(state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_COMPANY_PROFILE:
      return addCompanyProfile(state, payload)
    case REMOVE_COMPANY_PROFILE:
      return removeCompanyProfile(state, payload)
    default:
      return state
  }
}
