import Mock from 'mockjs'
import config from '@/mock/config'
const { baseURL } = config

Mock.mock(baseURL+'/api/login','post',(options)=>{
  console.log(options)
  return {
    success:true,
    code:0,
    data:{
      "access_token":"d0304c4c-5b14-480f-b45c-9855b8109622",
      "token_type":"bearer",
      "expires_in":3820,
      "msg":"登录成功",
      "nickName":"管理员",
      "avatarUrl":null,
      "realName":"王大锤",
      "birthday":null,
      "sex":"1",
      "email":null,
      "mobile":null,
      "createTime":1542107260000,
      "updateTime":1545214260000,
      "roles":["admin","user"]
    }
  }
})
