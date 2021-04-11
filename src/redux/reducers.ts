import { combineReducers } from "redux";

const currTheme = (state:boolean = false, action:any)=>{
  switch(action.type) {
    case 'CH_DARK':
      return false;
    case 'CH_LIGHT':
      return true;
    default:
      return state;
  }
}

export default(combineReducers({currTheme}));