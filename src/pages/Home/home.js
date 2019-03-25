import React,{ Component, Suspense } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import User from '@/pages/User/user';



export default class Home extends Component{


  render(){
    console.log(this.props)
    console.log(this.props.location['params.router'])

    this.props.location.params && sessionStorage.setItem('router',JSON.stringify(this.props.location.params.router))

    

    const router = JSON.parse(sessionStorage.getItem('router'))

    console.log(router)

    return (    

        <Router>
          {router.map((item,index)=>{

          const UserDiv = React.lazy(()=>import('@/pages/'+item.component))

          const User = (props)=>(
            <Suspense fallback={<div>Loading...</div>}>
              <UserDiv {...props}/>
            </Suspense>
          )

            return (
              <Route key={index} path={'/home/user'} component={User}></Route>
            )
          })}
          this is home page1
          <Link to="/home/user">跳转到user</Link>
        </Router>
        
    )
  }
}