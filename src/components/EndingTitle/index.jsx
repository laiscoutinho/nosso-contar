import React from "react";
import TitleEnding from "../../assets/decor/titleEnding.png";

export default function EndingTitle() {
  return (
    <aside className="flex items-center justify-center px-3 md:px-6 pt-4 pb-8">
      <img
        src={TitleEnding}
        alt="Entre em um mundo de gestos, histórias e descobertas em Libras."
        className="w-[320px] md:w-[600px] lg:w-[700px] max-w-full select-none transform md:-translate-x-5"
      />
    </aside>
  );
}
