import React,{ Component } from 'react'
import { Icon,Menu } from 'antd'

const SubMenu = Menu.SubMenu;

export default class SideMenu extends Component {

  constructor(props){
    super(props)
    this.state = {
      theme: 'dark',
      current: '1',
    }
  }

  onClick=({ item,key })=>{
    console.log(item)
    console.log(key)

    this.setState({
      current: key,
    });
    
    this.props.routerPush(item.props.node.path)
  }

  loop=(routers)=>routers.map((item)=>(
    item.isNodeFold?
      <SubMenu
        key={item.id}
        node={item}
        title={<span><Icon type="pie-chart" /><span>{item.name}</span></span>}
      >
        {item.children && this.loop(item.children)}
      </SubMenu>
    :
      <Menu.Item
        key={item.id}
        node={item}
      >
        <Icon type="pie-chart" />
        <span>{item.name}</span>
      </Menu.Item>
  ))
  

  render(){

    const { router } = this.props

    

    return (
      <div>
        <div style={{height:'64px',color:'red',textAlign:'center',lineHeight:'64px',fontSize:'16px'}}>公司logo</div>
        <Menu
          mode="inline"
          theme={this.state.theme}
          selectedKeys={[this.state.current]}
          onClick={this.onClick}
        >
          {this.loop(router)}
        </Menu>
      </div>
    )
    
          
  }

}