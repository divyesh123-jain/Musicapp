import React from "react";
import { TiTick } from "react-icons/ti";

const AddOnSection = ({ addOnData }) => {
  return (
    <div className="mt-5 md:flex flex-row justify-start md:space-x-2 space-y-2 md:space-y-0">
      {addOnData.map((item) => (
        <div
          key={item.id}
          className="p-5 border rounded-lg backdrop-opacity-25 bg-white/10 border-white/40 md:w-[30vw]"
        >
          <div className="flex justify-between">
            <div>{item.addOnTitle}</div>
            <div>{item.price}</div>
          </div>
          <div className="grid grid-cols-2 mt-5">
            {item.features.map((feature, index) => (
              <div className="flex" key={index}>
                <div>
                  <TiTick className="text-green-400 text-xl" />
                </div>
                <div>{feature}</div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default AddOnSection;
