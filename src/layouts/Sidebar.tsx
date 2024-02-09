import FilterBox from "@/components/filterbox/FilterBox";
import FilterType from "@/components/filterbox/FilterType";
import { productsDataStore } from "@/store/products/productsSlice";
import { useSelector } from "react-redux";

const SideBar = () => {
  const { brands, models } = useSelector(productsDataStore);

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
    </div>
  );
};

export default SideBar;
