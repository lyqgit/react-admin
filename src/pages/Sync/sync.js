import React,{ Component } from 'react'
import PreLoad from '@/components/preLoad'

export default class Sync extends Component {
  render(){

    return (
      <div>
        <div>这是静态加载的页面</div>
        <PreLoad/>
      </div>
    )
  }
}