// 保存登录状态
export const saveLogin = loginInfo => {
  // console.log(loginInfo)
  if (loginInfo) {
    sessionStorage.setItem('loginInfo', JSON.stringify(loginInfo));
  }
};

// 记录是否勾选记住账号信息
export const getAutoLoginStatus = () => {
  return localStorage.getItem('rememberMe') || false;
};

// 获取登录信息
export const getLogin = () => {
  return JSON.parse(sessionStorage.getItem('loginInfo')) || null;
};


//删除登录信息
export const delLogin = ()=>{
  sessionStorage.clear('loginInfo')
}