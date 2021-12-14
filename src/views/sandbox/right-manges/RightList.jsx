import React,{useState,useEffect} from 'react'
import { Table, Tag,Button } from 'antd'
import axios from 'axios'

export default function RightList() {
    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/rights?_embed=children').then(res=>{
            setDataSource(res.data)
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
          title: '权限名称',
          dataIndex: 'title',
        },
        {
          title: '权限路径',
          dataIndex: 'key',
          render:key=>{
            return <Tag color={'lime'}>{key}</Tag>
        }
        },
        {
            title: '操作',
            render:()=>{
              return <div>
                  <Button type="primary">编辑</Button>
                  <Button type="primary" danger>删除</Button>
              </div>
          }
          },
      ];
    
    return (
        <div>
           <Table dataSource={dataSource} columns={columns} pagination={{pageSize:5}}/>;
        </div>
    )
}
