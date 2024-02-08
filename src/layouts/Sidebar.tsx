import FilterBox from "@/components/filterbox/FilterBox";
import FilterType from "@/components/filterbox/FilterType";
import Search from "@/components/shared/Search";
import React from "react";

type Props = {};

const SideBar = (props: Props) => {
  return (
    <div className="w-[300px] h-screen">
      <FilterBox filterTitle="Sort by">
        <FilterType filterType="Old to new" />
        <FilterType filterType="New to old" />
        <FilterType filterType="Price Low to High" />
        <FilterType filterType="Price High to Low" />
      </FilterBox>

      <FilterBox filterTitle="Brands">
        <FilterType filterType="Apple" />
        <FilterType filterType="Samsung" />
        <FilterType filterType="Huawei" />
      </FilterBox>

      <FilterBox filterTitle="Model">
        <FilterType filterType="11" />
        <FilterType filterType="12 Pro" />
        <FilterType filterType="13" />
        <FilterType filterType="13 Pro Max" />
      </FilterBox>
    </div>
  );
};

export default SideBar;
