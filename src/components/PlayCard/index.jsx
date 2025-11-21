import React from "react";

export default function PlayCard({ title, text, icon, onClick }) {
  return (
    <div onClick={onClick} 
          className="bg-(--white-soft) rounded-3xl shadow-md p-6 m-[15px] flex flex-col justify-between hover:shadow-lg transition-shadow duration-300 transform transition-all duration-300 hover:scale-105 cursor-pointer max-w-full sm:max-w-[320px] md:max-w-[360px] min-h-[180px]">
      <div>
        <h3 className="text-(--pink-strong) text-xl font-semibold mb-3">
          {title}
        </h3>
        <p className="text-base font-medium">{text}</p>
      </div>

      <div className="flex justify-end mt-4 text-(--pink-strong) text-2xl">
        {icon}
      </div>
    </div>
  );
}