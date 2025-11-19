import React from "react";

export default function Button({
  children,
  icon = null,
  bgColor = "bg-(--sage-green)",
  textColor = "text-white",
  padding = "py-3 px-8",
  fontSize = "text-base",
  rounded = "rounded-full",
  className = "",
  onClick,
}) {
  return (
    <button
    onClick={onClick}
    className={`
        ${bgColor} 
        ${textColor} 
        ${padding} 
        ${fontSize} 
        ${rounded} 
        font-semibold 
        uppercase
        hover:scale-105 
        transition 
        select-none 
        flex items-center justify-center gap-2
        button-hover
        ${className}
    `}
    >
    {children}
    {icon && <span className="wave-on-hover">{icon}</span>}
    </button>
  );
}
