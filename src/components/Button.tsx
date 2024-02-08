import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ children, onClick }) => {
  return (
    <button onClick={onClick} className="w-full py-2 px-4 bg-secondary rounded-md text-center text-white text-lg">
      {children}
    </button>
  );
};

export default Button;