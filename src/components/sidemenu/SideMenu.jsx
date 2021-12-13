import React from 'react'
import { Layout, Menu } from 'antd';
import {
    UserOutlined,
    VideoCameraOutlined,
    UploadOutlined,
    MailOutlined
  } from '@ant-design/icons';
import './index.css'
const {  Sider,} = Layout;
const { SubMenu } = Menu;

const menuList = [
  {
    key:'/home',
    title:'首页',
    icon:<UserOutlined />
  },
  {
    key:'/user',
    title:'用户管理',
    icon:<UserOutlined />,
    children:[
        {key:'/user/list',
        title:'用户列表',
        icon:<UserOutlined />}
    ]
  },
  {
    key:'/role',
    title:'权限管理',
    icon:<UserOutlined />,
    children:[
        {key:'/role/list',
        title:'角色列表',
        icon:<UserOutlined />},
        {key:'/right/list',
        title:'权限列表',
        icon:<UserOutlined />}
    ]
  }
]
    




export default function SideMenu() {
const  renderMenu=(menuList)=>{
    return menuList.map(item=>{
      if(item.children){
        return <SubMenu  key={item.key} icon={item.icon} title={item.title}></SubMenu>
      }
      return <Menu.Item key={item.key} icon={item.icon} >{item.title}</Menu.Item>
    })
  }
    return (
        <Sider trigger={null} collapsible collapsed={false}> 
          <div className="logo" >新闻发布管理系统会</div>
           <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            {/* <Menu.Item key="1" icon={<UserOutlined />}>
              首页
            </Menu.Item>
            <Menu.Item key="2" icon={<VideoCameraOutlined />}>
              nav 2
            </Menu.Item>
            <Menu.Item key="3" icon={<UploadOutlined />}>
              nav 3
            </Menu.Item>
            <SubMenu key="sub1" icon={<MailOutlined />} title="用户管理">
                <Menu.Item key="5">Option 3</Menu.Item>
                <Menu.Item key="6">Option 4</Menu.Item>
            </SubMenu> */}
                {renderMenu(menuList)}
          </Menu> 

      
        </Sider>
    )
}
