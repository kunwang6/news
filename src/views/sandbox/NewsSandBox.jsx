import React from 'react'
import { Redirect, Route, Switch } from 'react-router-dom'
import { Layout } from 'antd'
import SideMenu from '../../components/sidemenu/SideMenu'
import TopHeader from '../../components/topheader/TopHeader'
import Home from './home/Home'
import UserList from './userlist/UserList'
import RoleList from './right-manges/RoleList'
import RightList from './right-manges/RightList'
import NoPermission from './nopermission/NoPermission'

// layout布局的css文件
import './NewsSandBox.css'

// antd

const { Content } = Layout

export default function NewsSandBox() {
    return (

        <Layout>
            <SideMenu />
                <Layout className="site-layout">
                    <TopHeader />

                <Content
                    className="site-layout-background"
                    style={{
                    margin: '24px 16px',
                    padding: 24,
                    minHeight: 280,
                    overflow: 'auto',
                    }}
                >
                    <Switch>
                        <Route path="/home" component={Home} />
                        <Route path="/user-manage/list" component={UserList} />
                        <Route path="/right-manage/role/list" component={RoleList} />
                        <Route path="/right-manage/right/list" component={RightList} />
                        <Redirect from="/" exact to="/home" />
                        <Route path="*" component={NoPermission} />
                    </Switch>
                </Content>
                </Layout>
        </Layout>

    )
}
