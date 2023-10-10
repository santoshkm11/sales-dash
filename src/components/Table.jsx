import React from 'react'
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';
import { Avatar, Divider, Tooltip,Badge } from 'antd';
const Table = () => {
   
  return (
   <>
   <div className=' mx-4 my-12 overflow-x-auto lg:my-12 md:my-4'>    
    <table className='w-full'>
     <thead>
        <tr className='text-xs font-semibold text-left font-body text-gray-500 border-b border-slate-400'>
        <th className="px-4 py-3 ">Customer</th>
        <th className="px-4 py-3">Status</th>
        <th className="px-4 py-3">Date</th>
        <th className="px-4 py-3">Invoice</th>
        <th className="px-4 py-3">people</th>
        </tr>
     </thead>
     <tbody className='bg-white'>
     <tr className="border-b border-slate-400">
        <td className='px-4 py-4'>
        <div className="flex items-center text-sm">
                        <div className="relative w-8 h-8 mr-3 rounded-full md:block">
                          <img src="/images/client-img.png"/>
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className="font-semibold font-body">Floyod Jhonson</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 font-body font-semibold">jhonstan@gmail.com</p>
                        </div>
                      </div>
        </td>
        <td className="px-4 py-3 text-sm "><span className="border rounded-3xl flex justify-between p-2 font-body font-semibold"><Badge dot status="success"></Badge> Success</span></td>
        <td className="px-4 py-3 text-sm font-body font-semibold">NOV 02,2021</td>
        <td className="px-4 py-3 text-sm font-body font-semibold">$100,000</td>
        <td className="px-4 py-3 text-sm font-body font-semibold">
        <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1677ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
            </td>
     </tr>
     <tr className="border-b border-slate-400">
        <td className='px-4 py-4'>
        <div className="flex items-center text-sm">
                        <div className="relative  w-8 h-8 mr-3 rounded-full md:block">
                          <img src="/images/client-img.png"/>
                          <div className="absolute inset-0 rounded-full shadow-inner" aria-hidden="true"></div>
                        </div>
                        <div>
                          <p className="font-semibold font-body">Floyod Jhonson</p>
                          <p className="text-xs text-gray-600 dark:text-gray-400 font-body font-semibold">jhonstan@gmail.com</p>
                        </div>
                      </div>
        </td>
        <td className="px-4 py-3 text-sm"><span className="border rounded-3xl flex justify-between p-2 font-body font-semibold"><Badge dot status="warning"></Badge> Pending</span></td>
        <td className="px-4 py-3 text-sm font-body font-semibold">NOV 02,2021</td>
        <td className="px-4 py-3 text-sm font-body font-semibold">$100,000</td>
        <td className="px-4 py-3 text-sm font-body font-semibold">
        <Avatar.Group
      maxCount={2}
      size="large"
      maxStyle={{
        color: '#f56a00',
        backgroundColor: '#fde3cf',
      }}
    >
      <Avatar src="https://xsgames.co/randomusers/avatar.php?g=pixel&key=3" />
      <Avatar
        style={{
          backgroundColor: '#f56a00',
        }}
      >
        K
      </Avatar>
      <Tooltip title="Ant User" placement="top">
        <Avatar
          style={{
            backgroundColor: '#87d068',
          }}
          icon={<UserOutlined />}
        />
      </Tooltip>
      <Avatar
        style={{
          backgroundColor: '#1677ff',
        }}
        icon={<AntDesignOutlined />}
      />
    </Avatar.Group>
            </td>
     </tr>
     </tbody>
    </table>
   </div>
   </>
  )
}

export default Table