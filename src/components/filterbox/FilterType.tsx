type Props = {
  filterType: string;
};

const FilterType = ({ filterType }: Props) => {
  return (
    <div className="flex flex-col space-x-2">
      <label className="inline-flex items-center space-x-2">
        <input type="checkbox" className="w-4 h-4 rounded-full" />
        <div className="text-lg">{filterType}</div>
      </label>
    </div>
  );
};

export default FilterType;
