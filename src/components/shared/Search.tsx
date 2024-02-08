import { FaSearch } from "react-icons/fa";

type Props = {
  value: string | "";
  placeholder: string;
  onChange: (value: React.ChangeEvent<HTMLInputElement>) => void;
};

const Search = ({ value, placeholder, onChange }: Props) => {
  return (
    <div className="flex gap-2 items-center justify-center border bg-white rounded-lg p-1">
      <FaSearch className="w-6 h-6 text-gray-500 cursor-pointer" />
      <input
        type="text"
        defaultValue={value}
        placeholder={placeholder}
        className="h-6"
        onChange={onChange}
      />
    </div>
  );
};

export default Search;
