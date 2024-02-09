import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick?: () => void;
  addClass?: string;
}

const Button = ({ children, onClick, addClass }: ButtonProps) => {
  const buttonClasses = `w-full py-2 px-4 rounded-md text-center text-lg ${addClass}`;
  return (
    <button onClick={onClick} className={buttonClasses}>
      {children}
    </button>
  );
};

export default Button;
