import React from "react";

const Card15 = () => {
  return (
    <div>
      <div className="w-[256px] px-[15px] py-[20px] bg-white rounded-lg flex flex-col gap-[30px]">
        <div className="w-full h-[44px] px-[4px] py-1 flex flex-col justify-between bg-[#f3effe] border-dashed border-[1px] border-[#6a38ef]">
          <p className="font-figtree font-normal text-xs leading-[14px]">
            Question 1
          </p>
          <div className="">
            <div className="w-full h-[5.6px] bg-[#dcdaea] mb-1"></div>
            <div className="w-[164px] h-[5.6px] bg-[#dcdaea] "></div>
          </div>
        </div>
        {/* question2 */}
        <div className="w-full h-[37px] px-[4px] flex flex-col justify-between z-">
          <p className="font-figtree font-normal text-xs leading-[14px]">
            Question 2
          </p>
          <div>
            <div className="w-full h-[5.6px] bg-[#E6E8EA] mb-1"></div>
            <div className="w-[164px] h-[5.6px] bg-[#E6E8EA] "></div>
          </div>
        </div>
        {/* question 3 */}
        <div className="w-full h-[37px] px-[4px] flex flex-col justify-between">
          <p className="font-figtree font-normal text-xs leading-[14px]">
            Question 3
          </p>
          <div>
            <div className="w-full h-[5.6px] bg-[#E6E8EA] mb-1"></div>
            <div className="w-[164px] h-[5.6px] bg-[#E6E8EA] "></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card15;
