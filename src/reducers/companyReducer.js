import {
  ADD_COMPANY_ADDRESS,
  ADD_COMPANY_PROFILE,
  REMOVE_COMPANY_ADDRESS,
  REMOVE_COMPANY_PROFILE,
} from '../action/constant'

const initialState = {
    dataCompanyProfile:[],
}

const addCompanyProfile = (state, data) => {
  let newState = {
    ...state,
    dataCompanyProfile: [
      ...state.dataCompanyProfile,
      {
        address:data.address,
        cCode:data.cCode,
        id:new Date().getTime(),
        name:data.name,
        phone:data.phone,
        revenue:data.revenue,
        office:[]
      }
    ]
  }
  return newState
}

const addCompanyOffice = (state, data) => {
  let temp = []
  let temp_state = state.dataCompanyProfile
  for(let i = 0;i < temp_state.length; i++){
    if(temp_state[i].id===data.company_id){
      temp_state[i].office.push(data)
    }
    temp.push(temp_state[i])
  }
  let newState = {
    ...state,
    dataCompanyProfile: temp
  }
  return newState
}

const removeCompanyProfile = (state, data) => {
  let temp = []
  let temp_state = state.dataCompanyProfile
  for(let i = 0;i < temp_state.length; i++){
    if(temp_state[i].id!==data){
      temp.push(temp_state[i])
    }
  }
  let newState = {
    ...state,
    dataCompanyProfile: temp
  }
  return newState
}
export default(state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_COMPANY_ADDRESS:
      return addCompanyOffice(state, payload)
    case ADD_COMPANY_PROFILE:
      return addCompanyProfile(state, payload)
    case REMOVE_COMPANY_PROFILE:
      return removeCompanyProfile(state, payload)
    default:
      return state
  }
}
