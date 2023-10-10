import React from 'react'

const Sidebar = () => {
  return (
    <>
    <div className='border-r-2 border-inherit  fixed flex flex-col top-0 left-0 w-14 md:w-64 bg-white-900 h-full text-black  z-10 sidebar'>
        <div className='sm:overflow-y-auto sm:overflow-x-hidden xs:overflow-auto xs:overflow-x-hidden flex flex-col justify-between flex-grow'>
        <ul className='flex flex-col py-4 '>
        <li className='px-5 md:block sm:px-1.5 xs:px-1.5'>
            <img src="/images/dashboard-logo.png" alt="logo"/>
        </li>
        <li className='px-5 mt-10 sm:px-1.5 xs:px-1.5'>
            <a href="#" className='py-4 relative flex flex-row items-center h-7 text-black hover:bg-primary-clr hover:text-white hover:rounded-md hover:transition-all duration-300'>
                <span className='inline-flex justify-center items-center ml-4'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
</svg>
</span>
                <span className='ml-2 text-base font-body '>Home</span>
               
                </a>
        </li>
        <li className='px-5 mt-5 sm:px-1.5 xs:px-1.5'>
            <a href="#" className=' py-4 relative flex flex-row items-center h-7 text-black hover:bg-primary-clr hover:text-white hover:rounded-md hover:transition-all duration-300'>
                <span className='inline-flex justify-center items-center ml-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
</svg>

</span>
                <span className='ml-2 text-base font-body'>Analytic</span>
               
                </a>
        </li>
        <li className='px-5 mt-5 sm:px-1.5 xs:px-1.5'>
            <a href="#" className='py-4 relative flex flex-row items-center h-7 text-black hover:bg-primary-clr hover:text-white hover:rounded-md hover:transition-all duration-300'>
                <span className='inline-flex justify-center items-center ml-4'><svg class=" text-black w-6 h-6"  width="24" height="24" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="8 16 10 10 16 8 14 14 8 16" />  <circle cx="12" cy="12" r="9" /></svg>

</span>
                <span className='ml-2 text-base font-body'>Explore</span>
               
                </a>
        </li>
        <li className='px-5 mt-5 sm:px-1.5 xs:px-1.5'>
            <a href="#" className='py-4 relative flex flex-row items-center h-7 text-black hover:bg-primary-clr hover:text-white hover:rounded-md hover:transition-all duration-300'>
                <span className='inline-flex justify-center items-center ml-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>


</span>
                <span className='ml-2 text-base font-body'>Shop</span>
               
                </a>
        </li>
        <li className='px-5 mt-5 sm:px-1.5 xs:px-1.5'>
            <a href="#" className='py-4 relative flex flex-row items-center h-7 text-black hover:bg-primary-clr hover:text-white hover:rounded-md hover:transition-all duration-300'>
                <span className='inline-flex justify-center items-center ml-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M8.625 12a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H8.25m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0H12m4.125 0a.375.375 0 11-.75 0 .375.375 0 01.75 0zm0 0h-.375M21 12c0 4.556-4.03 8.25-9 8.25a9.764 9.764 0 01-2.555-.337A5.972 5.972 0 015.41 20.97a5.969 5.969 0 01-.474-.065 4.48 4.48 0 00.978-2.025c.09-.457-.133-.901-.467-1.226C3.93 16.178 3 14.189 3 12c0-4.556 4.03-8.25 9-8.25s9 3.694 9 8.25z" />
</svg>



</span>
                <span className='ml-2 text-base font-body'>Inbox</span>
               
                </a>
        </li>
        <div className='md:px-5 text-xs text-slate-500 mt-8 xs:invisible md:visible sm:px-0'>Tools</div>
        <li className='px-5 mt-5 sm:px-1.5 xs:px-1.5'>
            <a href="#" className='py-4 relative flex flex-row items-center h-7 text-black hover:bg-primary-clr hover:text-white hover:rounded-md hover:transition-all duration-300'>
                <span className='inline-flex justify-center items-center ml-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
</svg>
</span>
                <span className='ml-2 text-base font-body'>Setting</span>
               
                </a>
        </li>
        <li className='px-5 mt-5 sm:px-1.5 xs:px-1.5'>
            <a href="#" className='py-4 relative flex flex-row items-center h-7 text-black hover:bg-primary-clr hover:text-white hover:rounded-md hover:transition-all duration-300'>
                <span className='inline-flex justify-center items-center ml-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
</svg>
</span>
                <span className='ml-2 text-base font-body'>Help</span>
               
                </a>
        </li>
        <div className='md:px-5 text-xs text-slate-500 mt-8 font-body sm:px-0 xs:invisible md:visible'>Projects</div>
        <li className='px-5 mt-5 sm:px-1.5 xs:px-1.5'>
            <a href="#" className='py-4 relative flex flex-row items-center h-7 text-black hover:bg-primary-clr hover:text-white hover:rounded-md hover:transition-all duration-300'>
                <span className='inline-flex justify-center items-center ml-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>

</span>
                <span className='ml-2 text-base font-body'>Amazon</span>
               
                </a>
        </li>
        <li className='px-5 mt-5 sm:px-1.5 xs:px-1.5'>
            <a href="#" className='py-4 relative flex flex-row items-center h-7 text-black hover:bg-primary-clr hover:text-white hover:rounded-md hover:transition-all duration-300'>
                <span className='inline-flex justify-center items-center ml-4'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 014.5 9.75h15A2.25 2.25 0 0121.75 12v.75m-8.69-6.44l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z" />
</svg>

</span>
                <span className='ml-2 text-base font-body'>Invinity HQ</span>
               
                </a>
        </li>
        </ul>
        </div>
    </div>
    </>
  )
}

export default Sidebar