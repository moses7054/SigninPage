import AnimatedCards from "@/components/Animate/AnimatedCards";
import SigninCard from "@/components/SigninCard";
import React from "react";

const Home = () => {
  return (
    <div className=" items-center bg-gradient-to-r from-[#2f9ce2] to-[#baacf1] relative w-full overflow-hidden min-h-screen h-auto ">
      <div className="w-[454px] h-[454px] rounded-full bg-white blur-3xl opacity-60 absolute -bottom-[106px] -left-[106px] "></div>
      <div className="w-[711px] h-[711px] rounded-full bg-white blur-3xl opacity-50 absolute -top-[328px] -right-[328px] "></div>
      <div className="w-[387px] h-[387px] rounded-full bg-white blur-3xl opacity-60 absolute -bottom-[80px] -right-[77px] "></div>
      <div className="w-full h-full flex flex-col py-[66px] px-[50px] max-xl:py-[10px] max-lg::p-4 max-lg:items-center ">
        <p className="text-white font-figtree font-semibold text-[34px] mb-6 ml-[8px] z-20">
          mermory
        </p>
        <SigninCard />
        <AnimatedCards />
      </div>
    </div>
  );
};

export default Home;
