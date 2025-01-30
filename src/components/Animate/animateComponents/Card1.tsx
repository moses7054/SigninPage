import React from "react";
import CompOne from "../CompOne";

const Card1 = () => {
  return (
    <div>
      {" "}
      <CompOne imageLink={"/CardImages/CompOne.png"}>
        <p className="w-[206px]">
          The largest mountain range in the world; home of the Chavin and Inca
          civilizations
        </p>
      </CompOne>{" "}
    </div>
  );
};

export default Card1;
