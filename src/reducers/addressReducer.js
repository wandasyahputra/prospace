import {
  ADD_COMPANY_ADDRESS,
  REMOVE_COMPANY_ADDRESS
} from '../action/constant'

const initialState = {
    companyAddress:[],
}

const addCompanyAddress = (state, data) => {
  let newState = {
    ...state,
    dataCompanyAddress: [
      ...state.dataCompanyAddress,
      {
        data
      }
    ]
  }
  return newState
}

const removeCompanyAddress = (state, data) => {
  let temp = state.dataCompanyAddress.map((item,key)=>{return item.id!==data.id})
  let newState = {
    ...state,
    dataCompanyAddress: temp
  }
  return newState
}
export default(state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_COMPANY_ADDRESS:
      return addCompanyAddress(state, payload)
    case REMOVE_COMPANY_ADDRESS:
      return removeCompanyAddress(state, payload)
    default:
      return state
  }
}
