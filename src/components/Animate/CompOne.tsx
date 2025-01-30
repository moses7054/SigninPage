import React from "react";
import Image from "next/image";

type CompProps = {
  imageLink?: string;
  children?: React.ReactNode;
};

const CompOne = ({ imageLink, children }: CompProps) => {
  return (
    <div className="w-64 h-[151px] relative rounded-lg overflow-clip flex justify-center p-[14px] bg-white">
      {imageLink && (
        <Image
          alt="image"
          src={imageLink}
          className="object-cover absolute"
          fill
        />
      )}
      <div className="w-full bg-white z-10 flex justify-center items-center rounded-md">
        <div className="font-figtree font-normal text-xs leading-[14px] w-full text-center text-[#193647] flex justify-center items-center">
          {children}
        </div>
      </div>
    </div>
  );
};

export default CompOne;
