import React,{useState} from 'react'
import { Layout ,Dropdown,Menu,Avatar} from 'antd';
import { DownOutlined,UserOutlined  } from '@ant-design/icons';

import {
    MenuUnfoldOutlined,
    MenuFoldOutlined
  } from '@ant-design/icons';
const { Header } = Layout;

export default function TopHeader() {
    const [state, setstate] = useState(false)
    const changeCollapsed = ()=>{
        setstate(!state)
    }

    const menu = (
      <Menu>
        <Menu.Item>
         超级管理员
        </Menu.Item>
        <Menu.Item danger>退出</Menu.Item>
      </Menu>
    );


    return (
        <Header className="site-layout-background" style={{ padding: '0 16px' }}>
          { 
            state ? <MenuUnfoldOutlined onClick={changeCollapsed}/> :<MenuFoldOutlined  onClick={changeCollapsed}/>
            }
          <div style={{float:'right'}}>
            <span>欢迎admin回来</span>
            <Dropdown overlay={menu}>
            <Avatar size="large" icon={<UserOutlined />} />
            </Dropdown>
          </div>
        </Header>
    )
}
