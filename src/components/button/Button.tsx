import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  addClass?: string;
}

const Button = ({ children, onClick, addClass }: ButtonProps) => {
  const buttonClasses = `w-full py-2 px-4 rounded-md text-center text-lg bg-gradient-to-r from-indigo-500 to-blue-500 hover:bg-gradient-to-tr hover:from-blue-600 hover:to-blue-900 px-4 py-1.5 text-white duration-100 ${addClass}`;
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
