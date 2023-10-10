import React from 'react'
import { DatePicker, Space, Select } from 'antd';
import Table from './Table';
const TransactionHistory = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
     
   
    const onChange = (date, dateString) => {
      
      };
     
  return (
    <>
    <div className="flex justify-between items-center sm:flex-row xs:flex-col">
     <h3 className='text-black  xl:text-3xl mb-3 font-body font-extrabold xs:text-md lg:text-2xl sm:text-3xl xs:text-xl'>Transaction History</h3>
     
     <Space direction="vertical">
     <DatePicker  onChange={onChange} picker="month" />
     </Space>
    </div>
    <div className='my-2 items-center xs:text-center md:text-left lg:text-left xs:my-4 lg:my-1'>
    <Space wrap>
      <Select className='sub-dropdowns ml-4 mb-4 font-body'
        defaultValue="Recepient"
        style={{
          width: 120,
          
        }}
        onChange={handleChange}
        options={[
          {
            value: 'Flyod',
            label: 'Flyod',
          },
          {
            value: 'Jhon',
            label: 'Jhon',
          },
          {
            value: 'Stan',
            label: 'Stan',
          },
         
        ]}
      />
    </Space>

    <Space wrap>
      <Select className='sub-dropdowns ml-4 mb-4'
        defaultValue="Amount"
        style={{
          width: 120,
          
        }}
        onChange={handleChange}
        options={[
          {
            value: '$100',
            label: '$100',
          },
          {
            value: '$250',
            label: '$250',
          },
          {
            value: '$500',
            label: '$500',
          },
         
        ]}
      />
    </Space>
    <Space wrap>
      <Select className='sub-dropdowns ml-4 mb-4'
        defaultValue="Status"
        style={{
          width: 120,
          
          
        }}
        onChange={handleChange}
        options={[
          {
            value: 'Success',
            label: 'Success',
          },
          {
            value: 'Pending',
            label: 'Pending',
          },
         
         
        ]}
      />
    </Space>
    </div>
   <Table/>
    </>
  )
}

export default TransactionHistory