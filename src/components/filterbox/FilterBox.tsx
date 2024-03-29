import React, { ReactNode } from "react";

type FilterBoxProps = {
  children: ReactNode;
  filterTitle: string;
};

const FilterBox: React.FC<FilterBoxProps> = ({ children, filterTitle }) => {
  return (
    <div>
      <h2 className="text-lg mb-2">{filterTitle}</h2>
      <div className="border p-4 mb-4 rounded-md shadow-md">
        <div className="flex flex-col gap-4 mb-2">
          <div className="flex flex-col gap-2">{children}</div>
        </div>
      </div>
    </div>
  );
};

export default FilterBox;
