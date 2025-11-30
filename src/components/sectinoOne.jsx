import React from "react";
import imga_cover from "../assets/imge/cover_imge.jpg";

const sectino = () => {
  return (
    <div className="bg-slate-50 h-[500px] w-full px-[10px] pt-1 pb-50 flex justify-center items-center">
      <div
        className="bg-slate-200 h-[350px] w-full rounded-lg mx-10 max-md:mx-5 
             bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${imga_cover})` }}
      ></div>
    </div>
  );
};

export default sectino;
