import React from "react";
import { BiSolidCrown } from "react-icons/bi";

const SubscriptionDetails = ({ subscriptionData }) => {
  return (
    <div className="flex flex-col space-y-4 mt-9">
      {subscriptionData.map((item) => (
        <div key={item.id}>
          <div className="flex justify-between rounded-[10px] py-1 px-2 backdrop-opacity-25 bg-white/10 border border-white/40">
            <BiSolidCrown className="text-3xl text-yellow-600 mt-4" />
            <div className="mr-10">
              {/* <div>{item.subscriptionType}</div> */}
              <div> AWB |  Artists with Benefits </div>
              <div className="text-sm">Date: {item.subscribe_at}</div>
              <div className="text-sm">Total paid: {item.price}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SubscriptionDetails;
