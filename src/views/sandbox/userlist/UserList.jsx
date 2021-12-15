import React,{useState,useEffect} from 'react'
import { Table,Button ,Modal, Switch} from 'antd'
import axios from 'axios'
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

export default function UserList() {
    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/users?_expand=role').then(res=>{
            const list = res.data
            setDataSource(list)
        })
    }, [])

    const columns = [
        {
          title: '区域',
          dataIndex: 'region',
         render:region=>{
             return <b>{region===""?'全球':region}</b>
         }
        },
        {
          title: '角色名称',
          dataIndex: 'role',
          render:(role)=>{
              return role.roleName
          }
        },
        {
          title: '用户名',
          dataIndex: 'username',
        },
        {
            title: '用户状态',
            dataIndex: 'roleState',
           render:region=>{
               return <Switch></Switch>
           }
          },
        {
            title: '操作',
            render:(item)=>{
              return <div>
                        <Button type="primary">编辑</Button>
                        <Button type="primary" danger  onClick={()=>myconfirm(item)}>删除</Button>
                     </div>
                    
                 }
            },
    ];

   

     const myconfirm = (item)=>{
        confirm({
            title: '你确定要删除吗',
            icon: <ExclamationCircleOutlined />,
            onOk() {
              //console.log('OK');
              //deleteMethod(item)
            },
            onCancel() {
              //console.log('Cancel');
            },
          });
     }
     //删除权限
    
    return (
        <div>
           <Table dataSource={dataSource} columns={columns} pagination={{pageSize:5}} rowKey={item=>item.id}/>;
        </div>
    )
}
