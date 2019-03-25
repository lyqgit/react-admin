import React from 'react'
import styles from './index.module.scss'

export default ()=>{
  return (
    <div
      className={styles.index}
    >
      <a
        href="https://github.com/lyqgit/react-admin"
        target="blank"
        className={styles.href}
      >
        github地址
      </a>
    </div>
  )
}