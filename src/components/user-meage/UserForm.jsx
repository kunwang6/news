import React, { forwardRef } from 'react'
import { Form ,Input ,Select} from 'antd'
const { Option } = Select;

const UserForm= forwardRef((props,ref)=> {
    return (
        <Form layout="vertical" ref={ref}>
            <Form.Item
            name="username"
            label="用户名"
            rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
            name="password"
            label="密码"
            rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
                <Input />
            </Form.Item>
            <Form.Item
                name="region"
                label="区域"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
            <Select >
                {
                   props.regionList.map(item=>{
                        return (
                            <Option value={item.value} key={item.id}>{item.title}</Option>
                        )
                    })
                }
            </Select>
            </Form.Item>
            <Form.Item
                name="roleId"
                label="角色"
                rules={[{ required: true, message: 'Please input the title of collection!' }]}
            >
            <Select >
                {
                    props.roleList.map(item=>{
                        return (
                            <Option value={item.id} key={item.id}>{item.roleName}</Option>
                        )
                    })
                }
            </Select>
            </Form.Item>
    </Form>
    )
})
export default UserForm