import {combineReducers}from 'redux'
import {ERROR_MSG,AUTH_SUCCESS,RESET_USER,RECEIVE_USER} from "./action-types";
import {getRedirectPath} from "../utils/index";

const initState={
    name:'',
    type:'',
    msg:'',
    redirectTo:''
};
function user(state=initState,action){
    switch (action.type){
        case AUTH_SUCCESS:
            let {type,avatar}=action.data;
            console.log(type,avatar);
            return {...action.data,redirectTo:getRedirectPath(type,avatar)};
        case ERROR_MSG:
            return {...state,msg:action.data};
        case RECEIVE_USER:
            return action.data;
        case RESET_USER:
            return {...initState, msg: action.data};
        default:
            return state
    }
}

export default combineReducers({
    user
})