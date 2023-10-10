import React from 'react'

const MonthlyRevenues = () => {
  return (
    <>
    <div className='month-div bg-primary rounded-2xl lg:my-10 h-full xs:my-10'>
    <div className=' flex flex-row items-center justify-between '>
    <div className='grid lg:grid-cols-3 gap-6 mt-4 mb-4 ml-3 sm:gap-x-28 md:gap-x-12 xl:gap-x-16 md:grid-cols-3 sm:grid-cols-3 ms:grid-cols-3 xs:grid-cols-2 xs:gap-x-6 sm:gap-x-12 ms:gap-x-12 lg:gap-x-2'>
    <div  className='lg:flex items-center justify-between lg:flex-row md:flex-col xs:flex-col'>
    <div className='flex justify-center items-center w-16 h-14 bg-primary rounded-full'>
    <img className='xl:w-12 lg:w-12 md:w-12 xs:w-8' src="/images/icon-1.png"/>
    </div>
    <div className='text-left'>
    <p className='text-xs text-white font-body font-light mb-1'>Monthly Revenue</p>
    <h4 className='text-md font-body font-semibold text-white mb-2'>$ 3.500  <span className='bg-white rounded-full text-xs primary-color p-1 ml-2' > +2.4% </span></h4>
    <p className='text-xs text-white font-body font-light mb-1'>Previous month <span className='font-body font-semibold text-white text-xs'>$1.7K</span></p>
    </div>
    </div>
    <div  className='lg:flex items-center justify-between lg:flex-row md:flex-col'>
    <div className='flex justify-center items-center w-16 h-14 bg-primary rounded-full'>
    <img className='2xl:w-12 lg:w-12 md:w-12 xs:w-8' src="/images/icon-2.png"/>
    </div>
    <div className='text-left'>
    <p className='text-xs text-white font-body font-light mb-1'>Monthly Sales</p>
    <h4 className='text-md font-body font-semibold text-white mb-2'>$ 6.750  <span className='bg-white rounded-full text-xs primary-color p-1 ml-2' > +1.4% </span></h4>
    <p className='text-xs text-white font-body font-light mb-1'>Previous month <span className='font-body font-semibold text-white text-xs'>$3.1K</span></p>
    </div>
    </div>
    <div  className='lg:flex items-center justify-between lg:flex-row md:flex-col'>
    <div className='flex justify-center items-center w-16 h-14 bg-primary rounded-full'>
    <img className='2xl:w-12 lg:w-12 md:w-12 xs:w-8' src="/images/icon-3.png"/>
    </div>
    <div className='text-left'>
    <p className='text-xs text-white font-body font-light mb-1'>Total Profit</p>
    <h4 className='text-md font-body font-semibold text-white mb-2'>$ 10.900  <span className='bg-white rounded-full text-xs primary-color p-1 ml-2' > +4.3% </span></h4>
    <p className='text-xs text-white font-body font-light mb-1'>Previous year <span className='font-body font-semibold text-white text-xs'> $8.9K</span></p>
    </div>
    </div>
  
    </div>
                
</div>
    </div>
    </>
  )
}

export default MonthlyRevenues;