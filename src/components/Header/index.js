import React from 'react'
import styles from './index.module.scss'
import { Button,Icon } from 'antd'

export default (props)=>{
  return (
    <div
      className={styles.index}
    >
      <Button type="primary" onClick={props.toggleCollapsed} style={{ marginTop: 16,float:'left' }}>
        <Icon type={props.collapsed ? 'menu-unfold' : 'menu-fold'} />
      </Button>
      <div className={styles.userName}>
        <span>用户名</span>
        <ul className={styles.setList}>
          <li>用户设置</li>
          <li>退出登录</li>
        </ul>
      </div>
      
    </div>
  )
}