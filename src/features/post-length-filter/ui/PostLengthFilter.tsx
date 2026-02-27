import { lexicon } from "@/shared/lexicon/lexicon";
import styles from "./PostLengthFilter.module.css";

type PostLengthFilterProps = {
  onChange: (length: number | 0) => void;
};

function PostLengthFilter({ onChange }: PostLengthFilterProps) {
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const value = event.target.value;
    onChange(value ? Number(value) : 0);
  };

  return (
    <select
      className={styles.lengthFilter}
      onChange={handleChange}
      defaultValue=""
    >
      <option value="">{lexicon.titles.filterByTitleLength}</option>
      <option value="10">{lexicon.titles.filterByTitleOption(10)}</option>
      <option value="20">{lexicon.titles.filterByTitleOption(20)}</option>
      <option value="50">{lexicon.titles.filterByTitleOption(50)}</option>
      <option value="100">{lexicon.titles.filterByTitleOption(100)}</option>
    </select>
  );
}

export { PostLengthFilter };
