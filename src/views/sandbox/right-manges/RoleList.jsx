import React,{useState,useEffect} from 'react'
import { Table , Button } from 'antd'
import axios from 'axios'

export default function RoleList() {
    const [dataSource, setdataSource] = useState([])
    useEffect(() => {
      axios.get('http://localhost:5000/roles').then(res=>{
          setdataSource(res.data)
      })
    }, [])
    const columns = [
        {
            title: 'ID',
            dataIndex: 'id',
           render:id=>{
               return <b>{id}</b>
           }
          },
          {
            title: '角色名称',
            dataIndex: 'roleName',
          },
          {
            title: '操作',
           render:(item)=>{
               return <div>
                    <Button type="primary" >编辑</Button>
                    <Button type="primary" danger >删除</Button>
               </div>
           }
          },
        ]
    return (
        <div>
            <Table dataSource={dataSource} columns={columns} rowKey={(item)=>item.id}></Table>
        </div>
    )
}
