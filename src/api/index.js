import ajax from './ajax'

// 请求注册
export const reqRegister = (user) => ajax('/api/register', user, 'POST');
// 请求登陆
export const reqLogin = (user) => ajax('/api/login', user, 'POST');
// 更新user
export const reqUpdateUser =(user)=>ajax('/api/update',user,'POST');

export const reqUser=()=>ajax('/api/user');