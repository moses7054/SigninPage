import React from "react";
import CompOne from "../CompOne";

const Card3 = () => {
  return (
    <div>
      <CompOne imageLink="/CardImages/pastel.png">
        <div className="relative w-full h-[128px] flex flex-col  pt-[15px]">
          <p className="mb-4">Solicitation</p>
          <div className="flex justify-center items-center gap-[2px]">
            If agreement --&gt;{" "}
            <div className="w-[71px] h-[16px] bg-[#9EE0FD] inline-block"></div>
          </div>
          <div className="flex justify-center items-center gap-[2px] mt-[8px]">
            If completion --&gt;{" "}
            <div className="w-[35px] h-[16px] bg-[#9EE0FD] inline-block"></div>
          </div>
        </div>
      </CompOne>
    </div>
  );
};

export default Card3;
