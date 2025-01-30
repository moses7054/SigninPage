import React from "react";
import GoogleIcon from "../icons/Google.svg";
import AplleIcon from "../icons/Apple.svg";
import FaceBookIcon from "../icons/facebook.svg";
import SignupForm from "./SignupForm";

const SocialLinks = [
  { imageIcon: <GoogleIcon />, text: "Continue with Google" },
  { imageIcon: <AplleIcon />, text: "Continue with Google" },
  { imageIcon: <FaceBookIcon />, text: "Continue with Google" },
];

const SigninCard = () => {
  return (
    <div className="p-10 bg-white rounded-3xl shadow-[0px_5px_10px_2px_#0000001A] flex flex-col items-center max-w-[556px] z-20 max-md:px-5 max-sm:py-5 max-sm:rounded-md ">
      <p className="font-figtree font-semibold text-4xl leading-[42px] text-center mb-6 max-sm:text-xl max-sm:leading-5">
        Get Started to unlock your <br /> study potential.
      </p>
      <p className="font-figtree font-normal text-base leading-5 text-[#5E7078] mb-[16px] hover:cursor-default">
        Already have an account?{" "}
        <span className="text-[#007CB5] hover:cursor-pointer">Sign in</span>
      </p>

      {/* Social Links */}
      <div className="flex flex-col gap-3 w-full  ">
        {SocialLinks.map((social, index) => (
          <button
            key={index}
            className="w-full border-2 border-[#E6E8EA] flex justify-center gap-2 py-2 rounded-lg  transition-all duration-300 
                 hover:shadow-md hover:-translate-y-0.3 active:scale-95 "
          >
            {social.imageIcon}
            <p className="font-figtree font-normal text-base " key={index}>
              {social.text}
            </p>
          </button>
        ))}
      </div>

      {/* Or Line */}
      <div className="flex gap-[14px] w-full items-center mt-4">
        <div className="h-[1px] w-full bg-[#E6E8EA]"></div>
        <p className="font-figtree font-normal text-xs leading-[18px] text-[#5E7078]">
          OR
        </p>
        <div className="h-[1px] w-full bg-[#E6E8EA]"></div>
      </div>

      <SignupForm />
      <p className="text-center mt-4 font-figtree font-normal text-sm leading-4 text-[#5E7078] max-sm:text-xs hover:cursor-default">
        By continuing, you agree to our{" "}
        <span className="text-[#007CB5] hover:cursor-pointer">
          User Agreement{" "}
        </span>
        <br /> and acknowledge our{" "}
        <span className="text-[#007CB5] hover:cursor-pointer">
          Privacy Policy.
        </span>
      </p>
    </div>
  );
};

export default SigninCard;
