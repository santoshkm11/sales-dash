import React from 'react'
import { Select, Space } from 'antd';
import Chart from './Chart';

const AnalyticCard = () => {
    const handleChange = (value) => {
        console.log(`selected ${value}`);
      };
  return (
    <>
    <div class="lg:w-1/2 md:w-full xs:w-full ">
        <div className='flex justify-between items-center my-1 '>
        <h6 className='xl:text-2xl font-bold text-black font-body xs:text-sm mb-3 lg:text-2xl sm:text-3xl xs:text-xl '>Analytic <span className="text-sm font-semibold text-greencolor font-body ml-1">+5.4%</span></h6>
        <Space wrap>
        <Select className='font-body'
      defaultValue="Month"
      style={{
        width: 120,
      }}
      onChange={handleChange}
      options={[
        {
          value: 'January',
          label: 'January',
        },
        {
          value: 'February',
          label: 'February',
        },
        {
          value: 'March',
          label: 'March',
        },
        {
          value: 'April',
          label: 'April',
          
        },
        {
            value: 'May',
            label: 'May',
          },
          {
            value: 'June',
            label: 'June',
          },
         
      ]}
    />
     </Space>
        </div>
<Chart/>
    </div>
    </>
  )
}

export default AnalyticCard