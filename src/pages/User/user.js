import React,{ Component } from 'react'


export default class User extends Component {

  click(){
    alert('user')
  }

  render(){
    console.log(this.props)
    return (
      <div onClick={this.click}>这是用户页面1</div>
    )
  }
}