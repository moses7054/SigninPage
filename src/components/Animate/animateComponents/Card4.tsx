import React from "react";
import CompOne from "../CompOne";

const Card4 = () => {
  return (
    <div>
      <CompOne imageLink="/CardImages/cool.png">
        <div className="text-justify w-[192px]">
          <div className="w-[50px] h-[16px] bg-[#9EE0FD] border-b-2 border-[#1489BC] inline-block translate-y-1 mr-1"></div>
          states that when an event occurs, someone has to decide whether and
          how to pass the information to another person, such as a friend, an
          official, or even a journalist.
        </div>
      </CompOne>
    </div>
  );
};

export default Card4;
