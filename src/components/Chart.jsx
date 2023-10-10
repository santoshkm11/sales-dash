import React from 'react'
import { Column } from '@ant-design/plots';
const Chart = () => {
    const data = [
        {
          type: '1-10 Aug',
          value: 25,
        },
        {
          type: '11-20Aug',
          value: 50,
        },
        {
          type: '',
          value: 32,
        },
        {
          type: '21-30 Aug',
          value: 60,
        },
        {
          type: '',
          value: 22,
        },
        {
          type: '1-10 Nov',
          value: 40,
        },
        
      ];
      const paletteSemanticRed = '#6e62e5';
      const brandColor = '#d3cffc';
      const config = {
        
        data,
        height:140,
        xField: 'type',
        yField: 'value',
        seriesField: '',
        color: ({  type, value }) => {
          if (type > '10' ) {
            return paletteSemanticRed;
          }
     
    return brandColor;
         
          
        },
       
        legend: false,
        xAxis: {
          label: {
            autoHide: true,
            autoRotate: false,
          },
        },
    };
  return (
   <>
   <Column className='ml-2' {...config} />
   </>
  )
}

export default Chart