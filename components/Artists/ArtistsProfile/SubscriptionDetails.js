// import React from "react";
// import { BiSolidCrown } from "react-icons/bi";

// const SubscriptionDetails = ({ subscriptionData }) => {
//   return (
//     <div className="flex flex-col space-y-4 mt-9">
//       {subscriptionData?.map((item) => (
//         <div key={item.id}>
//           <div className="flex justify-evenly space-x-4 md:space-x-0 items-center rounded-[10px] py-1 px-2 backdrop-opacity-25 bg-white/10 border border-white/40">
//             <BiSolidCrown className="text-3xl text-yellow-500 " />
//             <div className="">
//               {/* <div>{item.subscriptionType}</div> */}
//               <div> AWB |  Artists with Benefits </div>
//               <div className="text-sm">Date: {item.subscribe_at}</div>
//               <div className="text-sm">Total paid: {item.price}</div>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default SubscriptionDetails;


import React from "react";
import { BiSolidCrown } from "react-icons/bi";

const SubscriptionDetails = ({ subscriptionData }) => {
  return (
    <div className="flex flex-col space-y-4 mt-9">
      {subscriptionData && subscriptionData.length > 0 ? (
        subscriptionData.map((item) => (
          <div key={item.id}>
            <div className="flex justify-evenly space-x-4 md:space-x-0 items-center rounded-[10px] py-1 px-2 backdrop-opacity-25 bg-white/10 border border-white/40">
              <BiSolidCrown className="text-3xl text-yellow-500" />
              <div className="">
                {/* <div>{item.subscriptionType}</div> */}
                <div> AWB | Artists with Benefits </div>
                <div className="text-sm">Date: {item.subscribe_at}</div>
                <div className="text-sm">Total paid: {item.price}</div>
              </div>
            </div>
          </div>
        ))
      ) : (
        <div className="empty py-3 flex flex-col items-center text-white">
          <BiSolidCrown className="text-5xl font-extrabold flex ml-auto mr-auto text-gray-500" />
          <p className="m-0">Empty list!</p>
          <p className="m-0">This artist has no subscriptions at this moment.</p>
        </div>
      )}
    </div>
  );
};

export default SubscriptionDetails;
