import React from 'react'
import Tracking from './Tracking';
import MyNotifications from './MyNotifications';

const CenterLayout = () => {
  return (
  <>
  <div className='flex lg:flex-row md:flex-col sm:flex-col xs:flex-col '>
 <Tracking/>
  <MyNotifications/>
  </div>
  </>
  )
}

export default CenterLayout