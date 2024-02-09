import FilterBox from "@/components/filterbox/FilterBox";
import FilterType from "@/components/filterbox/FilterType";
import { productsDataStore } from "@/store/products/productsSlice";
import { useState } from "react";
import { useSelector } from "react-redux";
import Select from 'react-select';

const options = [
  { value: 'chocolate', label: 'Chocolate' },
  { value: 'strawberry', label: 'Strawberry' },
  { value: 'vanilla', label: 'Vanilla' },
];

const SideBar = () => {
  const { brands, models } = useSelector(productsDataStore);
  const [selectedOption, setSelectedOption] = useState(null);

  return (
    <div className="w-[300px] h-screen">
      <FilterBox filterTitle="Sort by">
        <FilterType filterType="Old to new" />
        <FilterType filterType="New to old" />
        <FilterType filterType="Price Low to High" />
        <FilterType filterType="Price High to Low" />
      </FilterBox>

      <FilterBox filterTitle="Brands">
        <div className="max-h-[300px] overflow-y-auto">
        {brands.map((brand) => (
          <FilterType filterType={brand} />
        ))}
        </div>
      </FilterBox>

      <FilterBox filterTitle="Model">
      <div className="max-h-[300px] overflow-y-auto">
        {models.map((model) => (
          <FilterType filterType={model} />
        ))}
      </div>
      </FilterBox>

      <FilterBox filterTitle="Select">
      <Select
        defaultValue={selectedOption}
        onChange={setSelectedOption}
        options={options}
      />
      </FilterBox>
    </div>
  );
};

export default SideBar;
