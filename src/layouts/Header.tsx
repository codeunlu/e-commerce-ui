import User from "@/components/shared/User";
import Search from "@/components/shared/Search";
import Logo from "@/components/shared/Logo";
import { debounce } from "lodash";
import { useEffect, useRef, useState } from "react";
import HeaderShopping from "@/components/header-shopping/HeaderShopping";
import { useDispatch } from "react-redux";
import { addFilter } from "@/store/products/productsSlice";

const Header = () => {
  const [search, setSearch] = useState<string>();
  const dispatch = useDispatch();

  const debouncedSearch = useRef(
    debounce(async (criteria) => {
      setSearch(criteria);
    }, 300)
  ).current;

  useEffect(() => {
    return () => {
      debouncedSearch.cancel();
    };
  }, [debouncedSearch]);

  async function onChangeSearchInput(e: React.ChangeEvent<HTMLInputElement>) {
    debouncedSearch(e.target.value);
  }

  useEffect(() => {
    dispatch(addFilter(search));
  }, [search, dispatch]);

  return (
    <div className="h-[5.5rem] w-full bg-primary mb-3 flex items-center">
      <div className="mx-auto container flex justify-between">
        <div className="hidden lg:flex">
          <Logo />
        </div>
        <Search
          value={search || ""}
          placeholder={"Search Products"}
          onChange={onChangeSearchInput}
        />
        <div className="flex gap-6 text-white">
          <HeaderShopping />
          <User />
        </div>
      </div>
    </div>
  );
};

export default Header;
