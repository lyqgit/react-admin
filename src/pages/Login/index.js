import React from 'react'
import Login from 'ant-design-pro/lib/Login';
import { notification } from 'antd';
import * as Ajax from '@/utils/request'
import { saveLogin } from '@/utils/login'
import './login.styl'

const { UserName, Password, Submit } = Login;

export default class LoginDemo extends React.Component {
  state = {
    notice: '',
    autoLogin: true,
  }
  onSubmit = async (err, values) => {

    let loginParams = new FormData();
    loginParams.append("grant_type","password");
    loginParams.append("username",values.username);
    loginParams.append("password",values.password);
    let res = await Ajax.post('/api/login',loginParams,{
      headers:{
        'Content-Type':'application/x-www-form-urlencoded',
        Authorization: 'Basic a25vd2xlZGdlLWFkbWluOndlYkFwcA==',
      }
    }).then(res=>res.data)

    if(res.success && res.code === 0){
      saveLogin(res)
      res = await Ajax.get('/api/menu').then(res=>res.data)
      // console.log(res)
      if(res.success && res.code === 0){
        this.props.history.push({pathname:'/home',state:{test3:1},params:{
          // router:[{path:'/home/user',component:'User/testUser'}],
          router:res.data,
        }})
      }else{
        notification.error({
          message:'用户名或密码错误'
        })
      }
      
    }
  }
  onTabChange = (key) => {
    this.setState({
      type: key,
    });
  }
  changeAutoLogin = (e) => {
    this.setState({
      autoLogin: e.target.checked,
    });
  }
  render() {
    return (
      <div className="container">
       <div className="container-login">
        <Login
          defaultActiveKey={this.state.type}
          onSubmit={this.onSubmit}
        >
          <div style={{textAlign:'center',marginBottom:'10px',fontSize:'20px'}}>登录</div>
          <UserName name="username" />
          <Password name="password" />
          
          <Submit>Login</Submit>
        </Login>
        </div>
      </div>
    );
  }
}