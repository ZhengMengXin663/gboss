export function getRedirectPath(type,avatar){
    let path ='';
    path += type==='boss'?'/boss':'/genius';
    if(!avatar){
        path+='info'
    }
    return path
}