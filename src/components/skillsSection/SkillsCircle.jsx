import React from "react";
import { FcSettings } from "react-icons/fc";
import skillimg from "../../assets/images/jatin.png"

const SkillsCircle = () => {
  return (
    <div className="h-[200px] w-[200px]  rounded-full flex items-center justify-center absolute left-[50%] -translate-x-[50%] top-[50%] -translate-y-[50%] border-2  border-orange overflow-hidden">
      <img src={skillimg} />
    </div>
  );
};

export default SkillsCircle;
