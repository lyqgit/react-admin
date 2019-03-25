import React,{ Component } from 'react'
import Login from '@/pages/Login';
import SyncDemo from '@/pages/Sync/sync';
import { BrowserRouter as Router,Switch , Route } from "react-router-dom";
import lazyComponent from '@/utils/lazyComponent'
import page404 from '@/pages/NotMatch/404'

const Home = lazyComponent('layout/HomeLayout')

export default class BasicLayout extends Component{
  render(){
    return (
      <Router>
        <Switch>
          <Route path="/" exact component={Login}></Route>
          <Route path="/sync" component={SyncDemo}></Route>
          <Route path="/home" component={Home}></Route>
          <Route component={page404}></Route>
        </Switch>
      </Router>
    )
  }
}