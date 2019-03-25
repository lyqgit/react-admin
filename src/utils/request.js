import axios from 'axios'
import { getLogin } from '@/utils/login'



const ajax = axios.create({
  timeout:5000,
  baseURL: process.env.NODE_ENV === 'development'?'http://localhost:3000':'',
  headers:{
    // 'Content-Type':'application/x-www-form-urlencoded' //表单提交方式
    'Content-Type':'application/json' //json提交方式
  }
})

// http状态码
const codeMessage = {
  200: '服务器成功返回请求的数据。',
  201: '新建或修改数据成功。',
  202: '一个请求已经进入后台排队（异步任务）。',
  204: '删除数据成功。',
  400: '发出的请求有错误，服务器没有进行新建或修改数据的操作。',
  401: '用户没有权限（令牌、用户名、密码错误）。',
  403: '用户得到授权，但是访问是被禁止的。',
  404: '发出的请求针对的是不存在的记录，服务器没有进行操作。',
  406: '请求的格式不可得。',
  410: '请求的资源被永久删除，且不会再得到的。',
  422: '当创建一个对象时，发生一个验证错误。',
  500: '服务器发生错误，请检查服务器。',
  502: '网关错误。',
  503: '服务不可用，服务器暂时过载或维护。',
  504: '网关超时。',
};

//http request 请求拦截器
ajax.interceptors.request.use(config => {

  const loginInfo = getLogin();

  const postToken = loginInfo && loginInfo.access_token ? loginInfo.token_type + ' ' + loginInfo.access_token : '';
  config.headers={
    Authorization:postToken,
    ...config.headers
  }
  // const token = getCookie('名称');注意使用的时候需要引入cookie方法，推荐js-cookie
  // config.data = JSON.stringify(config.data);
  // if(token){
  //   config.params = {'token':token}
  // }
  return config;
},
error => {
  return Promise.reject(error);
})


//http response 返回拦截器
ajax.interceptors.response.use(
  response=>{
    if (response.status >= 200 && response.status < 300) {
      return response;
    }
    const errortext = codeMessage[response.status] || response.statusText;
    const error = new Error(errortext);
    error.name = response.status;
    error.response = response;
    throw error;
  },
  error=>{
    return Promise.reject(error);
  }
)

// get方法
export function get(url,params={}){
  return new Promise((resolve,reject)=>{
    ajax.get(url,{
      params
    }).then(response=>{
      resolve(response)
    }).catch(err=>{
      reject(err)
    })
  })
}

export function post(url,data={},options={}){
  return new Promise((resolve,reject)=>{
    ajax.post(url,data,options).then(response=>{
      resolve(response)
    }).catch(err=>{
      reject(err)
    })
  })
}
