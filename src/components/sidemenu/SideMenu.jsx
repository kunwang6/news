import React,{useEffect,useState} from 'react'
import { Layout, Menu } from 'antd';
import { withRouter } from 'react-router-dom';
import axios from 'axios';
import {
  
   
  } from '@ant-design/icons';
import './index.css'
const {  Sider,} = Layout;
const { SubMenu } = Menu;


 function SideMenu(props) {
   const [menu, setMenu] = useState([])
  useEffect(()=>{
    axios.get('http://localhost:5000/rights?_embed=children').then(res=>{
      console.log(res.data);
      setMenu(res.data)
    })
  },[])

 const checkpage = (item)=>{
      return item.pagepermisson === 1
  }

  const  renderMenu=(menuList)=>{
    return menuList.map(item=>{
      if(item.children?.length>0&&checkpage(item)){
        return <SubMenu  key={item.key} icon={item.icon} title={item.title} 
        
        onTitleClick={()=>{
         if(item.id===1){
          props.history.push(item.key)
         }
         return 
        }} >
          {renderMenu(item.children)}
        </SubMenu>
      }
      return checkpage(item)&& <Menu.Item key={item.key} icon={item.icon} onClick={()=>{
        props.history.push(item.key)
      }} >{item.title}</Menu.Item>
    })
  }
  const openKeys = ['/'+props.location.pathname.split('/')[1]]
    return (
        <Sider trigger={null} collapsible collapsed={false}> 
          <div style={{display:'flex',height:'100%',flexDirection:'column'}}>
            <div className="logo" >新闻发布管理系统会</div>
            <div style={{flex:'1',overflow:'auto'}}>
              <Menu theme="dark" mode="inline" defaultOpenKeys={openKeys} defaultSelectedKeys={[props.location.pathname]}>
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
                    {renderMenu(menu)}
              </Menu> 
            </div>
          </div>
        </Sider>
    )
}
export default withRouter(SideMenu)