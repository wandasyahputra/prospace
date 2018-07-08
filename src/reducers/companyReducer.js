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
  console.log(data);
  let temp = []
  let temp_state = state.dataCompanyProfile
  for(let i = 0;i < temp_state.length; i++){
    if(temp_state[i].id===parseInt(data.company_id)){
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

const removeCompanyOffice = (state, data) => {
  console.log(data);
  let temp = []
  let temp_state = state.dataCompanyProfile
  for(let i = 0;i < temp_state.length; i++){
    if(temp_state[i].id===parseInt(data.company_id)){
      let temp_office=[]
      let temp_office_state=temp_state[i].office
      for(let x = 0;x < temp_office_state.length; x++){
        if(temp_office_state[x].id!==parseInt(data.id)){
          temp_office.push(temp_office_state[i])
        }
      }
      temp_state[i].office=temp_office
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
    if(temp_state[i].id!==parseInt(data)){
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
    case REMOVE_COMPANY_ADDRESS:
      return removeCompanyOffice(state, payload)
    case REMOVE_COMPANY_PROFILE:
      return removeCompanyProfile(state, payload)
    default:
      return state
  }
}
