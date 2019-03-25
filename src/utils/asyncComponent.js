import React from 'react'

export default function asyncComponent(getComponent){
  return class AsyncComponent extends React.Component {
    static Component = null
    state = { Component: AsyncComponent.Component }

    componentDidMount(){
      if (!this.state.Component) {
        getComponent().then(({default:Component})=>{
          AsyncComponent.Component = Comment
          this.setState({Comment})
        })
      }
    }

    //组件被卸载
    componentWillUnmount(){
      this.setState = (state,callback)=>{
        return;
      }
    }

    render(){
      const { Component } = this.state
      if (Component) {
        return <Component {...this.props} />
      }
      return null
    }

  }
}