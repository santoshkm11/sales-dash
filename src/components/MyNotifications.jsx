import React from 'react'
import { Badge, Icon } from 'antd';

import { UserOutlined, DownOutlined,BellOutlined  } from '@ant-design/icons';
import { Avatar, Space,Dropdown,Divider } from 'antd';

import UpgradeCard from './UpgradeCard';
import CalendarCard from './CalendarCard';
import TasksCard from './TasksCard';

const MyNotifications = () => {
    const items = [
        {
          key: '1',
          label: (
            <a target="" rel="noopener noreferrer" href="#">
              Log out
            </a>
          ),
        }
    ]
  return (
    <>
    <div className="w-1/4 px-2 mt-4 bg-white-900 h-12 pr-6 lg:w-1/4 md:w-auto lg:ml-0 md:ml-left sm:w-auto sm:ml-14 xs:w-auto xs:ml-14" >
<div className='flex justify-between items-center xs:hidden sm:hidden md:hidden lg:flex'>
    <Badge dot  status="processing">
    <BellOutlined />
    </Badge>

    <div className='signin'>
    <Dropdown menu={{ items }}>
    <a onClick={(e) => e.preventDefault()}>
      <Space>
      <div className='bg-white-900 p-2 border rounded-xl shadow-sm text-sm text-black font-semibold' ><Avatar className='mr-5' shape="square" size="small" icon={<UserOutlined />} />Jhonson
        <DownOutlined className='ml-1' /></div> 
      </Space>
    </a>
  </Dropdown>
    </div>
    </div>
     <UpgradeCard/>
     <Divider />
    <CalendarCard/>
    <TasksCard/>
    
    </div>
   
    </>
  )
}

export default MyNotifications;