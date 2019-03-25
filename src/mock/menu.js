import Mock from 'mockjs'
import config from '@/mock/config'
const { baseURL } = config

Mock.mock(baseURL+'/api/menu',(options)=>{
  console.log(options)
  return {
    success:true,
    code:0,
    data:[
      {
        id:1,
        name:'部门管理',
        path: '',
        component: '',
        isNodeFold:true,
        children:[
          {
            id:3,
            name:'部门列表',
            path: '/home/department/list',
            component: 'Department/list',
            isNodeFold:false,
          }
        ]
      },
      {
        id:2,
        name:'员工管理',
        path: '',
        component: '',
        isNodeFold:true,
        children:[
          {
            id:4,
            name:'员工列表',
            path: '/home/user/list',
            component: 'User/list',
            isNodeFold:false,
          },
          {
            id:5,
            name:'添加员工',
            path: '/home/user/add',
            component: 'User/add',
            isNodeFold:false,
          }
        ]
      }
    ]
  }
})