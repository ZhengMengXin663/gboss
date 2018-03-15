import {combineReducers}from 'redux'
import {ERROR_MSG,AUTH_SUCCESS} from "./action-types";
const initState={
    name:'',
    type:'',
    msg:'',
    redirectTo:''
};
function user(state=initState,action){
    switch (action.type){
        case AUTH_SUCCESS:
            return {...action.data,redirectTo:'/'}
        case ERROR_MSG:
            return {...state,msg:action.data}
        default:
            return state
    }
}

export default combineReducers({
    user
})