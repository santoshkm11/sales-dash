
import React from 'react';
import { Avatar, Badge, Space,Dropdown,Divider } from 'antd';
import { SearchOutlined } from '@ant-design/icons'; 
import MonthlyRevenues from './MonthlyRevenues';
import TotalSaleAnalytic from './TotalSaleAnalytic';
import TransactionHistory from './TransactionHistory';
import {  Icon } from 'antd';

import { UserOutlined, DownOutlined,BellOutlined  } from '@ant-design/icons';

const Tracking = () => {
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
    <div className="lg:ml-left mt-5 mr-3 w-3/5 bg-white-900  md:px-6 h-full lg:w-3/5 md:w-auto sm:w-auto sm:ml-14 md:ml-left xs:w-auto xs:ml-14  xs:px-1" >
    <div className='flex justify-end items-center md:flex lg:hidden md:mb-10 xs:mb-10 sm-mb-10 xs:justify-between '>
    <Badge dot  status="processing">
    <BellOutlined />
    </Badge>

    <div className='signin ml-5'>
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
<div className='relative flex flex-row items-center h-11 '>

<span class="inline-flex justify-center  ml-4">
                  <img src="/images/avatar-img.png"/>
                </span>
                <h3 class="ml-2 lg:text-2xl text-black font-body font-extrabold xs:mt-10 md:mt-0 xs:text-sm">Good Evening Team <br/> <span className=" text-sm text-slate-500 xs:text-xs">Have an in-depth look at all the metrics within your dashboard</span> </h3>
                <span class=" md:block px-2 py-0.5 ml-auto text-lg  font-body font-medium tracking-wide text-blue-500 bg-indigo-50 rounded-full"><SearchOutlined /></span>
</div>
          <MonthlyRevenues/>    
          <TotalSaleAnalytic/>
          <TransactionHistory/>              
   
    </div>
   </>
  )
}

export default Tracking