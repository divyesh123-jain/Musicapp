import React from 'react';
import { TiTick } from 'react-icons/ti';

const Subscription = () => {
  return (
    <div className="mx-72 flex flex-col space-y-4 mt-9">
      <div className="w-[489px] h-[288px] relative bg-white bg-opacity-10 rounded-lg border border-neutral-400">
        <div className="absolute left-4 top-4 flex items-center gap-4">
          <div className="w-6 h-6 relative">
            <div className="w-5 h-4 absolute left-1 top-1"></div>
          </div>
          <div className="text-neutral-50 text-sm font-normal leading-normal">Marketing Campaign</div>
        </div>
        <div className="absolute right-4 top-4 text-right text-neutral-50 text-sm font-normal leading-normal">$149.99 / annum</div>
        
        <div className='relative flex space-x-16 justify-center top-[82px]'>

        <div className="grid grid-cols-2 space-x-16 text-white mt-5">
                <div className="flex  ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Social Media Ads</div>{" "}
                </div>
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Youtube Ads</div>{" "}
                </div>
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400  text-xl" />
                  </div>
                  <div>Influencer</div>{" "}
                </div>
                <div className="flex ">
                  {" "}
                  <div>
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
                  <div>Email</div>{" "}
                </div>
              </div>
           

        </div>
        
       
          </div>
        
      </div>
  
  );
};

export default Subscription;
