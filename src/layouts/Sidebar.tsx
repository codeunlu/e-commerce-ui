import FilterBox from "@/components/filterbox/FilterBox";
import React from "react";

type Props = {};

const SideBar = (props: Props) => {

  return <div className="w-[300px] h-screen">
    <FilterBox/>
  </div>;
};

export default SideBar;
