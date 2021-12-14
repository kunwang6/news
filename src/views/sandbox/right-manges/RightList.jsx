import React,{useState,useEffect} from 'react'
import { Table, Tag,Button ,Modal} from 'antd'
import axios from 'axios'
import { ExclamationCircleOutlined } from '@ant-design/icons';
const { confirm } = Modal;

export default function RightList() {
    const [dataSource, setDataSource] = useState([])
    useEffect(() => {
        axios.get('http://localhost:5000/rights?_embed=children').then(res=>{
            const list = res.data
            list.forEach(item=>{
                if(item.children.length===0){
                    item.children = ''
                }
            })
            setDataSource(list)
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
              deleteMethod(item)
            },
            onCancel() {
              //console.log('Cancel');
            },
          });
     }
     //删除权限
     const deleteMethod = (item)=>{
        // console.log(item);
        //  setDataSource(dataSource.filter(item=> item.id!==deleteitem.id)
        setDataSource(dataSource.filter(date=>item.id!==date.id))
        axios.delete(`http://localhost:5000/rights/${item.id}`)
     }
    
    return (
        <div>
           <Table dataSource={dataSource} columns={columns} pagination={{pageSize:5}}/>;
        </div>
    )
}
