import React, { forwardRef } from "react";

const EditMarketingCard = forwardRef(({ closeModal }, ref) => {

  EditMarketingCard.displayName = "EditMarketingCard";
  return (
    <div ref={ref} className="w-[90vw] md:w-[500px] bg-black p-7 rounded-3xl relative">
      <div className="font-semibold text-white">Edit Marketing Campaign Service:</div>
      <div className="w-full pt-1">
        <div className="mt-7">
          <div>
            <div className="text-gray-400">Title</div>
            <div className="mt-3">
              <div className="relative flex items-center w-[90%] md:w-[95%] h-[45px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
                <input
                  className="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2 text-white"
                  type="text"
                  id="search"
                  placeholder="Marketing Campaign"
                />
              </div>
            </div>
          </div>

          <div className="mt-5">
            <div className="text-gray-400">Price/ annum</div>
            <div className="mt-3">
              <div className="relative flex items-center w-[90%] md:w-[95%] h-[45px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
                <input
                  className="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2 text-white"
                  type="text"
                  id="search"
                  placeholder="149.99"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-end space-x-10 items-center mt-10">
        <div className="text-white/90 cursor-pointer" onClick={closeModal}>
          Cancel
        </div>
        <div className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full cursor-pointer" onClick={closeModal}>
          Save
        </div>
      </div>
    </div>
  );
});

export default EditMarketingCard;









// import React, { forwardRef } from "react";

// const EditMarketingCard = forwardRef(({ closeModal }, ref) => {
//   return (
//     <div ref={ref} className="w-[70vw] md:w-[510px] bg-black p-7 rounded-3xl relative">
//         <div className="font-semibold text-white">Edit Marketing Campaign Service:</div>
//           <div className="w-full pt-1">
//             <div className="mt-7">
//               <div>
//                 <div className="text-gray-400">Title</div>
//                 <div className="mt-3">
//                   <div class="relative flex items-center w-[90%] md:w-[95%] h-[45px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
//                     <input
//                       class="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2"
//                       type="text"
//                       id="search"
//                       placeholder="Marketing Campaign"
//                     />
//                   </div>
//                 </div>
//               </div>

//               <div className="mt-5">
//                 <div className="text-gray-400">Price/ annum</div>
//                 <div className="mt-3">
//                   <div class="relative flex items-center w-[90%] md:w-[95%] h-[45px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
//                     <input
//                       class="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2"
//                       type="text"
//                       id="search"
//                       placeholder="149.99"
//                     />
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <div className="flex justify-end space-x-10 items-center mt-10">
//         <div className="text-white/90 cursor-pointer" onClick={closeModal}>
//           Cancel
//         </div>
//         <div
//           className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full cursor-pointer"
//           onClick={closeModal}
//         >
//           Save
//         </div>
//       </div>
//       </div>
//   );
// });

// export default EditMarketingCard;
