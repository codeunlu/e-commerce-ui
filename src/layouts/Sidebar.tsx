import Button from "@components/button/Button";
import FilterBox from "@components/filterbox/FilterBox";
import {
  addFilterBrand,
  addFilterModel,
  productsDataStore,
  sortByProduct,
} from "@store/products/productsSlice";
import { Option } from "@/utils/type";
import { useCallback, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import Select from "react-select";

const orderOptions = [
  { value: "dateasc", label: "Old to New" },
  { value: "datedesc", label: "New to Old" },
  { value: "priceasc", label: "Price Low to High" },
  { value: "pricedesc", label: "Price High to Low" },
];

const SideBar = () => {
  const { brands, models } = useSelector(productsDataStore);
  const dispatch = useDispatch();
  const [brandFilter, setBrandFilter] = useState<string>("");
  const [modelFilter, setModelFilter] = useState<string>("");

  const onChangeBrands = useCallback((items: any) => {
    const filter = createFilterString(items);
    setBrandFilter(filter);
  }, []);

  const onChangeModels = useCallback((items: any) => {
    const filter = createFilterString(items);
    setModelFilter(filter);
  }, []);

  const onChangeOrder = useCallback(
    (item: any) => {
      dispatch(sortByProduct(item.value));
    },
    [dispatch]
  );

  const createFilterString = (items: any) => {
    let filter = "";
    items?.forEach((element: Option, index: number) => {
      if (index === items.length - 1) {
        filter += `${element.value}`;
        return;
      }

      filter += `${element.value},`;
    });
    return filter;
  };

  const handlerBrandFilter = useCallback(() => {
    dispatch(addFilterBrand(brandFilter));
  }, [brandFilter, dispatch]);

  const handlerModelFilter = useCallback(() => {
    dispatch(addFilterModel(modelFilter));
  }, [modelFilter, dispatch]);

  return (
    <div className="w-[300px] h-screen">
      <FilterBox filterTitle="Sort by">
        <Select
          name="orderby"
          options={orderOptions}
          onChange={onChangeOrder}
        />
      </FilterBox>

      <FilterBox filterTitle="Brands">
        <Select
          isMulti
          name="brands"
          options={brands}
          isLoading={brands.length > 0 ? false : true}
          onChange={onChangeBrands}
        />
        <Button
          onClick={handlerBrandFilter}
          addClass="w-full py-2 px-4 rounded-md text-center text-lg text-white bg-primary"
        >
          Filter
        </Button>
      </FilterBox>

      <FilterBox filterTitle="Model">
        <Select
          isMulti
          name="models"
          options={models}
          isLoading={models.length > 0 ? false : true}
          onChange={onChangeModels}
        />
        <Button
          onClick={handlerModelFilter}
          addClass="w-full py-2 px-4 rounded-md text-center text-lg text-white bg-primary"
        >
          Filter
        </Button>
      </FilterBox>
    </div>
  );
};

export default SideBar;
