import React from "react";

const Button = ({
  onClick,
  className,
  type = "button",
  bgColor = "primary",
  children,
}) => {
  let bgClassName = "bg-primary";
  switch (bgColor) {
    case "primary":
      bgClassName = "bg-primary";
      break;
    case "secondary":
      bgClassName = "bg-secondary";
      break;
    default:
      break;
  }
  return (
    <button
      type={type}
      onClick={onClick}
      className={`py-2 px-4 ${bgClassName} rounded-lg capitalize w-full mt-auto hover:bg-opacity-75 ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
