import React from "react";

type LoadingProps = {
  text?: string;
};

const Loading: React.FC<LoadingProps> = ({ text = "Loading" }) => {
    return (
      <div className="flex flex-col items-center justify-center space-x-2">
        <div className="animate-spin rounded-full h-12 w-12 border-t-8 border-blue-500"></div>
        <div className=" animate-pulse text-xl text-gray-600">{text}</div>
      </div>
    );
  };

export default Loading;