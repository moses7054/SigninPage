import React from "react";
import Image from "next/image";

const Card12 = () => {
  return (
    <div>
      {" "}
      <div className=" px-[24px] py-[14px] rounded-lg bg-[#FFFFFF] flex flex-col drop-shadow-[0_3.2px_6.4px_1.28px_#0000001A]  text-[#001F2E]">
        <p className="font-figtree font-semibold text-sm mb-[20px]">Chat</p>
        <div className="flex flex-col gap-[12.8px]">
          {/* first chat box */}
          <div className="w-[209px] h-[53px] bg-[#F5FCFF] border-[0.8px] border-[#0077BA] rounded-[7px] flex items-center justify-center gap-4 ">
            <Image
              alt="image"
              src={"/CardImages/chatImage1.png"}
              width={20}
              height={20}
              className="rounded-full -translate-y-1"
            />
            <p className="font-figtree font-normal text-[12px] leading-[14px] w-[149px]">
              Have a follow-up question? Ask away!
            </p>
          </div>

          {/* Second chat box */}
          <div className="w-[209px] h-[53px] bg-[#F9FAFB] border-[0.8px] border-[#C2C9CC] rounded-[7px] flex items-center justify-center gap-4 ">
            <Image
              alt="image"
              src={"/CardImages/chatImage2.png"}
              width={20}
              height={20}
              className="rounded-full -translate-y-1"
            />
            <p className="font-figtree font-normal text-[12px] leading-[14px] w-[149px]">
              Solve the question and explain it step-by-step.
            </p>
          </div>

          {/* Third box */}
          <div className="w-[209px]  bg-[#F5FCFF] border-[0.8px] border-[#0077BA] rounded-[7px] flex items-start justify-center gap-4 py-[12px] ">
            <Image
              alt="image"
              src={"/CardImages/chatImage1.png"}
              width={20}
              height={20}
              className="rounded-full"
            />
            <div className="flex flex-col gap-5">
              <p className="font-figtree font-normal text-[12px] leading-[14px] w-[149px]">
                Have a follow-up question? Ask away!
              </p>
              <p className="font-figtree font-semibold text-[12px] leading-[14px] w-[149px]">
                Step 1: Identify the numbers to add.{" "}
              </p>
              <p className="font-figtree font-normal text-[12px] leading-[14px] w-[149px]">
                We are given the numbers 2 and 2.
              </p>
              <p className="font-figtree font-semibold text-[12px] leading-[14px] w-[149px]">
                Step 2: Perform the addition.
              </p>
              <p className="font-figtree font-normal text-[12px] leading-[14px] w-[149px]">
                When you add 2 and 2, you combine them together: <br />[ 2 + 2 =
                4 ]
              </p>
              <p className="font-figtree font-semibold text-[12px] leading-[14px] w-[149px]">
                Final Answer: 2 + 2 = 4
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card12;
