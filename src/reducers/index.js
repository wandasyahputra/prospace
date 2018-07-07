import { combineReducers } from 'redux'
import addressReducer from './addressReducer'
import companyReducer from './companyReducer'

export default combineReducers({
  address:addressReducer,
  company:companyReducer
})
