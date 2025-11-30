import React from "react";
// import imga_cover from "../../images/cover_imge.jpg";

const card = ({ image, title, description, author }) => {
  return (
    <div className="flex flex-col items-start gap-0.5 max-w-[200px] w-full cursor-pointer hover:overflow-hidden shadow-md p-3 rounded-lg bg-slate-50 hover:shadow-gray-500/30 hover:scale-105 transition-all duration-300 max-sm:shadow-none max-sm:p-2">
      <div className="cursor-pointer group relative rounded-lg w-full h-52 flex items-center justify-center runded-md overflow-hidden">
        <img
          src={image}
          alt={"image_cover"}
          className="group-hover:scale-105 transition object-cover w-full h-4/5 md:w-full md:h-full rounded-lg"
          width={800}
          height={800}
        />
      </div>

      <p className="md:text-base font-medium pt-2 w-full truncate">{title}</p>
      <p className="w-full text-xs text-gray-500/70 truncate">{description}</p>
      <div className="flex items-center gap-2">
        <p className="w-full text-xs text-gray-500/100 truncate">{author}</p>
      </div>

      <div className="flex items-end justify-between w-full mt-1">
        <button className=" px-4 py-1.5 text-gray-500 border border-gray-500/20 rounded-full text-xs hover:bg-slate-50 transition">
          Buy now
        </button>
      </div>
    </div>
  );
};

export default card;
