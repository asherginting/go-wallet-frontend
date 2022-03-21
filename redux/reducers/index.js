import { combineReducers } from "redux";
import histories from "./histories";
import inputTransfer from "./transfer";
// import registerUser from "./auth";
import { registerUser, login, forgotPassword, changePassword } from "./auth";
import { phoneList, balance } from './profile';

const rootReducers = combineReducers({
  histories,
  inputTransfer,
  registerUser,
  login,
  forgotPassword,
  phoneList,
  balance
})

export default rootReducers;
