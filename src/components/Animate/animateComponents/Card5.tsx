import React from "react";

const Card5 = () => {
  return (
    <div>
      {/* Squares */}
      <div className="px-[15px] py-[20px] flex justify-center items-center gap-[3.2px] bg-white rounded-lg">
        {/* yellow squares */}
        <div className="w-[55px] h-[26px] bg-[#FBC02D1A] rounded-[6.4px] border-[0.8px] border-[#FBC02D] flex flex-col items-center justify-center gap-[1.6px]">
          <p className="font-figtree font-semibold text-[8px] ">Again</p>
          <p className="font-figtree font-normal text-[5.6px] ">1 min</p>
        </div>
        {/* Red */}
        <div className="w-[55px] h-[26px] bg-[#E539351A] rounded-[6.4px] border-[0.8px] border-[#E53935] flex flex-col items-center justify-center gap-[1.6px]">
          <p className="font-figtree font-semibold text-[8px] ">Hard</p>
          <p className="font-figtree font-normal text-[5.6px] ">15 min</p>
        </div>
        {/* green */}
        <div className="w-[55px] h-[26px] bg-[#007F701A] rounded-[6.4px] border-[0.8px] border-[#007F70] flex flex-col items-center justify-center gap-[1.6px]">
          <p className="font-figtree font-semibold text-[8px] ">Good</p>
          <p className="font-figtree font-normal text-[5.6px] ">1 day</p>
        </div>
        {/* violet */}
        <div className="w-[55px] h-[26px] bg-[#2A20BC1A] rounded-[6.4px] border-[0.8px] border-[#2A20BC] flex flex-col items-center justify-center gap-[1.6px]">
          <p className="font-figtree font-semibold text-[8px] ">Easy</p>
          <p className="font-figtree font-normal text-[5.6px] ">3 days</p>
        </div>
      </div>
    </div>
  );
};

export default Card5;
