import React from 'react'
import { Divider } from 'antd';
const TasksCard = () => {
  return (
   <>
   <div className=' mb-6 flex flex-wrap items-center xs:justify-center lg:justify-start'>
   <div className='my-2 bg-white flex items-center mb-6 xs:mr-6 md:mr-0' >
   
   <span class="inline-flex justify-center  ml-4">
                  <img className="rounded-full bg-icon w-8 "src="/images/laptop.png"/>
                </span>
                
                <h3 class="ml-2 text-lg text-white font-semibold"><span className="text-sm text-black font-bold font-body">Meeting With Client</span> <br/> 
                <p className='flex items-center text-xs text-stone-400 font-light'> 
              <span className='flex justify-between text-xs items-center'> <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>
      <p className="p-1 font-body">Google Meet</p>
     </span> 
       <p className='ml-10 flex justify-between items-center'><svg className='mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<span className='bg-white p-1  rounded-e-lg text-xs text-stone-400 font-body'>12pm</span></p>
</p>
  </h3>
   </div>
<Divider className='xs:hidden sm:hidden md:vivible'/>
   <div className='my-2 bg-white flex items-center mb-6 xs:mr-6 md:mr-0' >
   
   <span class="inline-flex justify-center  ml-4">
                  <img className='rounded-full bg-icon w-8 ' src="/images/books.png"/>
                </span>
                
                <h3 class="ml-2 text-lg text-white "><span className="text-sm text-black font-bold font-body">Weekly Report</span> <br/> 
                <p className='flex items-center text-xs text-stone-400 font-light'> 
              <span className='flex justify-between text-xs items-center'> <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>
      <p className="p-1 font-body">Google Meet</p>
     </span> 
       <p className='ml-10 flex justify-between items-center'><svg className='mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<span className='bg-white p-1  rounded-e-lg text-xs text-stone-400 font-body'>03pm</span></p>
</p>
  </h3>
   </div>

   <Divider className='xs:hidden sm:hidden md:vivible'/>
   <div className='my-2 bg-white flex items-center mb-6 xs:mr-6 md:mr-0' >
   
   <span class="inline-flex justify-center  ml-4">
                  <img className='rounded-full w-8 bg-icon p-1 ' src="/images/scrum.png"/>
                </span>
                
                <h3 class="ml-2 text-lg text-white font-semibold"><span className="text-sm text-black font-bold font-body">Daly Scrum Meeting</span> <br/> 
                <p className='flex items-center text-xs text-stone-400 font-light'> 
              <span className='flex justify-between text-xs items-center'> <svg className='mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
</svg>
      <p className="p-1 font-body">Google Meet</p>
     </span> 
       <p className='ml-10 flex justify-between items-center'><svg className='mr-2' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-3 h-3">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>
<span className='bg-white p-1  rounded-e-lg text-xs text-stone-400 font-body'>05pm</span></p>
</p>
  </h3>
   </div>
   </div>
   </>
  )
}

export default TasksCard