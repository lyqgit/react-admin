import React,{ Component } from 'react'
import { Route } from "react-router-dom";
import { Layout } from 'antd'
import SideMenu from '@/components/SideMenu'
import Index from '@/components/Index'
import FooterContainer from '@/components/Footer'
import HeaderContainer from '@/components/Header'
import lazyComponent from '@/utils/lazyComponent'
import styles from './HomeLayout.module.scss'
export default class HomeLayout extends Component{

  constructor(props){
    super(props)
    this.state={
      collapsed: false,
    }
  }

  toggleCollapsed=()=>{
    this.setState({
      collapsed:!this.state.collapsed
    })
  }

  togPush(){
    this.props.history.push('/home/user')
  }

  //菜单跳转
  routerPush=(path,params={})=>{
    JSON.stringify(params) ==="{}"
    ?
    this.props.history.push({
      pathname:path
    })
    :
    this.props.history.push({
      pathname:path,
      params
    })
  }

  // 挂载路由
  createRouter=router=>router.map((item,index)=>{
    if(item.isNodeFold === false){
      let UserDiv = lazyComponent('pages/'+item.component)
      return (
        <Route key={index} path={item.path} component={UserDiv}></Route>
      )
    }
    if(item.children){
      return this.createRouter(item.children)
    }
  })
  

  render(){
    // console.log(this.props)
    
    // console.log(this.props.location['params.router'])

    let router = JSON.parse(sessionStorage.getItem('router'))
    router !== null || (this.props.location.params && sessionStorage.setItem('router',JSON.stringify(this.props.location.params.router)))
    router = JSON.parse(sessionStorage.getItem('router'))
    
    // console.log(router)
    // console.log(this.createRouter(router))
    

    const { Header, Content, Footer, Sider } = Layout
    return (
      
        <Layout
          className={styles.rootContainer}
        >
          <Sider
            className={styles.slideContainer}
            collapsed={this.state.collapsed}
          >
            <SideMenu router={router} routerPush={this.routerPush}/>
          </Sider>
        
          <Layout>
            <Header style={{backgroundColor:'#ffffff'}}>
              <HeaderContainer
                collapsed={this.state.collapsed}
                toggleCollapsed={this.toggleCollapsed}
              />
            </Header>   
            <Content>
              {this.createRouter(router)}
              {this.props.location.pathname === '/home'?<Index/>:''}
            </Content>
            <Footer>
              <FooterContainer/>
            </Footer>
          </Layout>
        </Layout>
    )
  }
}