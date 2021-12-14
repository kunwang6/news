import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import SideMenu from '../../components/sidemenu/SideMenu'
import TopHeader from '../../components/topheader/TopHeader'
import Home from '../sandbox/home/Home'
import UserList from '../sandbox/userlist/UserList'
import RoleList from '../sandbox/right-manges/RoleList'
import RightList from '../sandbox/right-manges/RightList'
import NoPermission from '../sandbox/nopermission/NoPermission'

//layout布局的css文件
import './NewsSandBox.css'

//antd
import { Layout } from 'antd';

const {  Content } = Layout;

export default function NewsSandBox() {
    return (
        
        <Layout>
            <SideMenu></SideMenu>
                <Layout className="site-layout">
                    <TopHeader></TopHeader>
               
                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    overflow:'auto'
                    }}
                >
                    <Switch>
                        <Route path='/home' component={Home}></Route>
                        <Route path='/user-manage/list' component={UserList}></Route>
                        <Route path='/right-manage/role/list' component={RoleList}></Route>
                        <Route path='/right-manage/right/list' component={RightList}></Route>
                        <Redirect from='/' exact to='/home' ></Redirect>
                        <Route path='*' component={NoPermission}></Route>
                    </Switch>
                </Content>
            </Layout>
        </Layout>
      
    )
}
