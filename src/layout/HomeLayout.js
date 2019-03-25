import React,{ Component } from 'react'
import { Route, Link } from "react-router-dom";
import { Layout,Button,Icon } from 'antd'
import SideMenu from '@/components/SideMenu'
import lazyComponent from '@/utils/lazyComponent'

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
    console.log(this.createRouter(router))
    

    const { Header, Content, Footer, Sider } = Layout

    return (
      
        <Layout>
          {/* <Router> */}
          <Sider
            collapsed={this.state.collapsed}
          >
            <SideMenu router={router} routerPush={this.routerPush}/>
          </Sider>
        
          <Layout style={{height:'100vh'}}>
            <Header style={{backgroundColor:'#ffffff'}}>
              <Button type="primary" onClick={this.toggleCollapsed} style={{ marginBottom: 16 }}>
                <Icon type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'} />
              </Button>
              头部
            </Header>   
            <Content>
              
                  {this.createRouter(router)}
                  this is home page1
                  <Link to="/home/user">跳转到user</Link>
                  
              
              <Link to="/">跳转到登录页面</Link>
            </Content>
            <Footer>底部</Footer>
          </Layout>
          {/* </Router> */}
        </Layout>
    )
  }
}