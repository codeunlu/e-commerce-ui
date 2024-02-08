import { FaSearch } from "react-icons/fa";

type Props = {
  placeholder: string;
};

const Search = ({ placeholder }: Props) => {
  return (
    <>
      <div className="flex gap-2 items-center justify-center border bg-white rounded-lg p-1">
        <FaSearch className="w-6 h-6 text-gray-500 cursor-pointer" />
        <input type="text" placeholder={placeholder} className="h-6" />
      </div>
    </>
  );
};

export default Search;
