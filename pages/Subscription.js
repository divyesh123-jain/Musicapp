import React from "react";
import { BsArrowLeftCircle } from "react-icons/bs";
import { TiTick } from "react-icons/ti";

const Subscription = () => {
  return (
    <>
      <div class="md:ml-[270px] min-h-[100vh] text-white p-5">
        <div className="align-items-center justify-content-between flex text-white">
          <h2 className="text-white ml-[10px] font-sf-pro-text text-[24px] font-semibold tracking-normal text-left sm:text-[20px]">
            Subscriptions
          </h2>
        </div>
        <div className="flex mt-10 ml-2 justify-between text-gray-300 font-semibold text-xl">
          All Services
        </div>

        <div className="md:mt-10 ">
          <div className="mt-5 md:flex flex-row justify-start md:space-x-2 space-y-2 md:space-y-0">
            <div className="p-5 border rounded-lg backdrop-opacity-25 bg-white/10 border-white/40 md:w-[30vw]">
              <div className="flex justify-between">
                <div>Marketing Campaign</div>
                <div>149.99$ / annum</div>
              </div>
              <div className="grid grid-cols-2 mt-5">
                <div className="flex ">
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
                    <TiTick className="text-green-400 text-xl" />
                  </div>{" "}
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
              <div className="space-y-3 md:space-y-0 mt-5 md:flex md:justify-between">
                <div className="pl-16 pr-16 pt-2 pb-2 text-gray-200 bg-gray-900 rounded-full flex justify-center items-center">
                  EDIT
                </div>
                <div className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full flex justify-center items-center">
                  DEACTIVATE
                </div>
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
    // <div className="mx-72 flex flex-col space-y-4 mt-9">
    //   <div className="w-[489px] h-[288px] relative bg-white bg-opacity-10 rounded-lg border border-neutral-400">
    //     <div className="absolute left-4 top-4 flex items-center gap-4">
    //       <div className="w-6 h-6 relative">
    //         <div className="w-5 h-4 absolute left-1 top-1"></div>
    //       </div>
    //       <div className="text-neutral-50 text-sm font-normal leading-normal">Marketing Campaign</div>
    //     </div>
    //     <div className="absolute right-4 top-4 text-right text-neutral-50 text-sm font-normal leading-normal">$149.99 / annum</div>

    //     <div className='relative flex space-x-16 justify-center top-[82px]'>

    //     <div className="grid grid-cols-2 space-x-16 text-white mt-5">
    //             <div className="flex  ">
    //               {" "}
    //               <div>
    //                 <TiTick className="text-green-400 text-xl" />
    //               </div>{" "}
    //               <div>Social Media Ads</div>{" "}
    //             </div>
    //             <div className="flex ">
    //               {" "}
    //               <div>
    //                 <TiTick className="text-green-400 text-xl" />
    //               </div>{" "}
    //               <div>Youtube Ads</div>{" "}
    //             </div>
    //             <div className="flex ">
    //               {" "}
    //               <div>
    //                 <TiTick className="text-green-400  text-xl" />
    //               </div>
    //               <div>Influencer</div>{" "}
    //             </div>
    //             <div className="flex ">

    //               <div>
    //                 <TiTick className="text-green-400 text-xl" />
    //               </div>{" "}
    //               <div>Email</div>{" "}
    //             </div>
    //           </div>

    //     </div>

    //       </div>

    //   </div>
  );
};

export default Subscription;
