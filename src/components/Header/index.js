import React,{ Component } from 'react'
import styles from './index.module.scss'
import { Button,Icon } from 'antd'


export default class Header extends Component{


  render(){

    const { toggleCollapsed, collapsed, loginOut } = this.props

    return (
      <div
        className={styles.index}
      >
        <Button type="primary" onClick={toggleCollapsed} style={{ marginTop: 16,float:'left' }}>
          <Icon type={collapsed ? 'menu-unfold' : 'menu-fold'} />
        </Button>
        <div className={styles.userName}>
          <span>用户名</span>
          <ul className={styles.setList}>
            <li>用户设置</li>
            <li onClick={loginOut}>退出登录</li>
          </ul>
        </div>
        
      </div>
    )
  }
  
}