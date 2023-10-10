import React from 'react'

const TotalSaleCard = () => {
  return (
    <>
    <div class="lg:w-1/2 md:w-full xs:w-full xs:mb-6 lg:mb-0">
        <h2 className='xl:text-3xl text-black font-bold font-body lg:text-2xl xs:text-md my-1 sm:text-3xl xs:text-xl '>Total Sales & Cost</h2>
        <p className="xl:text-sm text-gray-400 font-light font-body xs:text-xs">Last 60 days</p>

        <div className='flex items-center mt-8'>
         <h4 className='xl:text-5xl font-extrabold primary-color my-2 font-body xs:text-md lg:text-2xl sm:text-3xl xs:text-xl'>$956.82k</h4>
        <span className='flex ml-3  bg-lightgreen p-2 rounded-full xl:text-sm text-greencolor font-body font-semibold xs:text-xs'> <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-5 h-5">
  <path fill-rule="evenodd" d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75s4.365 9.75 9.75 9.75 9.75-4.365 9.75-9.75S17.385 2.25 12 2.25zm.53 5.47a.75.75 0 00-1.06 0l-3 3a.75.75 0 101.06 1.06l1.72-1.72v5.69a.75.75 0 001.5 0v-5.69l1.72 1.72a.75.75 0 101.06-1.06l-3-3z" clip-rule="evenodd" />
</svg>
 + 1.4%</span>
        </div>
        <p className='text-sm font-light text-gray-400 font-body'><span className='text-greencolor font-medium font-body'>+8.20K</span> VS Prev.60 days</p>
    </div>
    </>
  )
}

export default TotalSaleCard