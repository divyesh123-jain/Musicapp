import React from "react";

const EditMemberCard = () => {
  return (
    <div>
      <div className="w-[510px] h-[360px] bg-black/50 p-[20px] rounded-3xl relative">
        <div className="font-semibold">Edit Marketing Campaign Service:</div>
          <div className="w-full pt-1">
            <div className="mt-7">
              <div>
                <div>Title</div>
                <div className="mt-3">
                  <div class="relative flex items-center w-[90%] md:w-[95%] h-[45px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
                    <input
                      class="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2"
                      type="text"
                      id="search"
                      placeholder="Marketing Campaign"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-5">
                <div>Price/ annum</div>
                <div className="mt-3">
                  <div class="relative flex items-center w-[90%] md:w-[95%] h-[45px] border backdrop-opacity-25 bg-white/10 border-white/40  rounded-lg focus-within:shadow-lg overflow-hidden">
                    <input
                      class="peer h-full w-full outline-none text-xl p-2 backdrop-opacity-25 bg-white/5 border-white/40 pr-2"
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
          <div>Cancel</div>
          <div className="pl-10 pr-10 pt-2 pb-2 text-gray-200 bg-gradient-to-r from-blue-700 to-red-500 rounded-full">
            Save
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditMemberCard;
