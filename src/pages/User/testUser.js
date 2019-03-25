import React from 'react'
import User from '@/pages/User/user'

export default class TestUser extends User{

  click(){
    alert('TestUser')
  }

  render(){
    console.log('这是子组件')
    return super.render()
  }
}