import React from 'react'
import TotalSaleCard from './TotalSaleCard'
import AnalyticCard from './AnalyticCard'

const TotalSaleAnalytic = () => {
  return (
    <>
    <div className='border-2 rounded-lg p-4 my-10 flex xs:flex-col md:flex-col lg:flex-row'>
    <TotalSaleCard/>
    <AnalyticCard/>
    </div>
    </>
  )
}

export default TotalSaleAnalytic