import { IoSearch } from "react-icons/io5";

type Props = {
  value: string | "";
  placeholder: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ value, placeholder, onChange }: Props) => {
  return (
    <div className="relative mx-auto text-gray-600">
        <input
          className="border-2 bg-white h-10 px-5 pr-16 rounded-lg"
          type="text"
          defaultValue={value}
          placeholder={placeholder}
          onChange={onChange}
        />
        <div className="absolute right-0 top-0 mt-2 mr-4">
          <IoSearch className="text-gray-600 h-6 w-6 " />
        </div>
      </div>
  );
};

export default Search;
