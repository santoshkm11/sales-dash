import React from 'react'
import { Avatar,Tooltip } from 'antd';
import { AntDesignOutlined, UserOutlined } from '@ant-design/icons';

const UpgradeCard = () => {
  return (
    <>
    <div className='my-5'>
        <p className='text-sm font-medium primary-color mb-1 font-body md:text-lg sm:text-lg'>Premium Access</p>
        <h2 className='xl:text-3xl text-black font-extrabold font-body xs:text-md lg:text-2xl md:text-2xl md:mb-4 sm:text-lg'>Take Back Your Creative Control <span> <Avatar.Group
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
    </Avatar.Group></span> </h2>

    <p className='lg:text-xs text-gray-400 font-medium flex items-center font-body md:text-lg sm:text-lg'>The Professional Platform <span className='ml-2'><svg  xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
</svg></span>
</p>
<button type="button" className="primary-color font-body border border-stone-300 py-4 bg-white-700 hover:bg-primary-clr hover:text-white focus:ring-4 focus:outline-none  font-medium rounded-xl lg:text-sm px-5 my-3 text-center inline-flex items-center md:text-lg sm:text-lg ">
    Upgrade plan
    <span className='ml-12'><svg class="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
  </svg></span>
</button>
    </div>
    </>
  )
}

export default UpgradeCard