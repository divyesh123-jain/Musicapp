import React from 'react'
import { BiSearch } from 'react-icons/bi'

const Artist2 = () => {
  return (
   <>
    <div class="flex-1  justify-center items-center w-[256px] px-2 sm:px-0">
        <div class="flex justify-center items-center w-[756px]">
               <h3 class=" font-bold mt-12 text-4xl">All Artists</h3>
        </div>

        {/* ----search------ */}
        <div class='max-w-md mx-72 pt-5 '>
    <div class="relative flex items-center w-[931px] h-[56px] border-2 border-indigo-500  rounded-lg focus-within:shadow-lg bg-white overflow-hidden">
        
        <input
        class="peer h-full w-full outline-none text-xl mx-2 text-gray-700 pr-2"
        type="text"
        id="search"
        placeholder="Artists" /> 

<div class="grid place-items-center h-full w-12 text-gray-300">
            <BiSearch size={20}/>
        </div>
    </div>
</div>

       <div className=' mx-72  sm:mb-0 mt-10 grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 items-center lg:grid-cols-4'>
            <div className='relative group w-[214.8px] h-[207.8px] border-[1px]  bg-gray-900 items-center sm:py-12 px-4 flex flex-col space-y-2 cursor-pointer rounded-md hover:bg-gray-900/80 hover:smooth-hover'>
               <img className="w-[112px] h-[112px]   mx-10 justify-center  object-cover object-center rounded-full" src="https://via.placeholder.com/112x112" />
              
              {/*------- text------- */}
              <div className="pb-2 relative">
                <div className="w-[78px] h-[37px] pb-2 top-0 absolute">
                    <div className="left-0 top-[15px] absolute text-white text-[18px] font-normal">Ari Elkins</div>
                    <div className="left-[41px] top-0 pb-3 absolute text-stone-500 text-[12px] font-normal">Profile</div>
                </div>
              </div>
            </div>
          
        </div>
        
    </div>
   </>
  )
}

export default Artist2