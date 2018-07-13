import {
  ADD_COMPANY_ADDRESS,
  ADD_COMPANY_PROFILE,
  ADD_MEETING_ROOM,
  REMOVE_MEETING_ROOM,
  REMOVE_COMPANY_ADDRESS,
  REMOVE_COMPANY_PROFILE,
  RESTORE_COMPANY_DATA
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
        id:data.id,
        name:data.name,
        phone:data.phone,
        revenue:data.revenue,
        office:[]
      }
    ]
  }
  localStorage.setItem('data',JSON.stringify(newState))
  return newState
}

const addCompanyOffice = (state, data) => {
  let temp = []
  let temp_state = state.dataCompanyProfile
  for(let i = 0;i < temp_state.length; i++){
    if(temp_state[i].id===parseInt(data.company_id,10)){
      temp_state[i].office.push(data)
    }
    temp.push(temp_state[i])
  }
  let newState = {
    ...state,
    dataCompanyProfile: temp
  }
  localStorage.setItem('data',JSON.stringify(newState))
  return newState
}
const addMeetingRoom = (state, data) => {
  let temp = []
  let temp_state = state.dataCompanyProfile
  for(let i = 0;i < temp_state.length; i++){
    if(temp_state[i].id===parseInt(data.company_id,10)){
      let temp_office = temp_state[i].office
      for(let x = 0; x < temp_office.length; x++){
        if(temp_office[x].id===parseInt(data.office_id,10)){
          temp_office[x].meeting_room.push(data)
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
  localStorage.setItem('data',JSON.stringify(newState))
  return newState
}

const removeCompanyOffice = (state, data) => {
  let temp = []
  let temp_state = state.dataCompanyProfile
  for(let i = 0;i < temp_state.length; i++){
    if(temp_state[i].id===parseInt(data.company_id,10)){
      let temp_office=[]
      let temp_office_state=temp_state[i].office
      for(let x = 0;x < temp_office_state.length; x++){
        if(temp_office_state[x].id!==parseInt(data.id,10)){
          temp_office.push(temp_office_state[x])
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
  localStorage.setItem('data',JSON.stringify(newState))
  return newState
}

const removeMeetingRoom = (state, data) => {
  let temp = []
  let temp_state = state.dataCompanyProfile
  for(let i = 0;i < temp_state.length; i++){
    if(temp_state[i].id===parseInt(data.company_id,10)){
      let temp_office=[]
      let temp_office_state=temp_state[i].office
      for(let x = 0;x < temp_office_state.length; x++){
        if(temp_office_state[x].id===parseInt(data.office_id,10)){
          let temp_meeting=[]
          let temp_meeting_state=temp_office_state[x].meeting_room
          for(let y = 0;y < temp_meeting_state.length;y++){
            if(temp_meeting_state[y].id!==parseInt(data.id,10)){
              temp_meeting.push(temp_meeting_state[y])
            }
          }
          temp_office_state[x].meeting_room=temp_meeting
        }
        temp_office.push(temp_office_state[x])
      }
      temp_state[i].office=temp_office
    }
    temp.push(temp_state[i])
  }
  let newState = {
    ...state,
    dataCompanyProfile: temp
  }
  localStorage.setItem('data',JSON.stringify(newState))
  return newState
}

const removeCompanyProfile = (state, data) => {
  let temp = []
  let temp_state = state.dataCompanyProfile
  for(let i = 0;i < temp_state.length; i++){
    if(temp_state[i].id!==parseInt(data,10)){
      temp.push(temp_state[i])
    }
  }
  let newState = {
    ...state,
    dataCompanyProfile: temp
  }
  localStorage.setItem('data',JSON.stringify(newState))
  return newState
}

const restoreCompanyData = (state, data) => {
  let newState = {
    ...state,
    dataCompanyProfile: data
  }
  return newState
}
export default(state = initialState, {type, payload}) => {
  switch (type) {
    case ADD_COMPANY_ADDRESS:
      return addCompanyOffice(state, payload)
    case ADD_COMPANY_PROFILE:
      return addCompanyProfile(state, payload)
    case ADD_MEETING_ROOM:
      return addMeetingRoom(state, payload)
    case REMOVE_COMPANY_ADDRESS:
      return removeCompanyOffice(state, payload)
    case REMOVE_MEETING_ROOM:
      return removeMeetingRoom(state, payload)
    case REMOVE_COMPANY_PROFILE:
      return removeCompanyProfile(state, payload)
    case RESTORE_COMPANY_DATA:
      return restoreCompanyData(state, payload)
    default:
      return state
  }
}
