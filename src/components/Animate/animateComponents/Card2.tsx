import React from "react";
import CompOne from "../CompOne";
import ForderIcon from "@/icons/PinkFolder.svg";

const Card2 = () => {
  return (
    <div>
      <CompOne>
        <div className="flex flex-col gap-2 items-center">
          <ForderIcon className="rotate-[7deg]" />
          <div className="font-figtree font-normal ">
            <p className=" text-[13px] leading-[15.6px] mb-[4.4px]">
              Drag or Drop <span className="text-[#BC0A6F]">Anki File</span>
            </p>
            <p className="text-[10px] leading-[12px]">
              The max file size is 10MB.
            </p>
          </div>
        </div>
      </CompOne>
    </div>
  );
};

export default Card2;
