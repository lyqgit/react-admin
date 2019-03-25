import React from 'react'
import { Spin }  from 'antd'

const styles = {
  container:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    position:'absolute',
    top:'0',
    left:'100px',
    right:'0',
    bottom:'0'
  }
}

export default ()=>(
  <div style={styles.container}>
    <Spin size='large'/>
  </div>
)