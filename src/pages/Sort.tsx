import Select from "react-select";

type OptionType = {
  value: string;
  label: string;
};

interface SortProps {
  sortKey: string;
  setSortKey: (key: string) => void;
}

const options: OptionType[] = [
  { value: "default", label: "Default" },
  { value: "name", label: "Name" },
  { value: "price", label: "Price" },
  { value: "stock", label: "Stock" },
];

const Sort = ({ sortKey, setSortKey }: SortProps) => {
  const handleChange = (selected: OptionType | null) => {
    if (selected) {
      setSortKey(selected.value);
    }
  };

  return (
    <Select
      options={options}
      onChange={handleChange}
      defaultValue={options.find((opt) => opt.value === sortKey)}
      className="sort_select"
    />
  );
};

export default Sort;