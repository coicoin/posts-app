import styles from "./PostLengthFilter.module.css";
import React, { useState } from "react";

type PostLengthFilterProps = {
  onChange: (length: number) => void;
};

function PostLengthFilter({ onChange }: PostLengthFilterProps) {
  const [length, setLength] = useState<number>(0);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    setLength(value);
    onChange(value);
  };

  return (
    <input
      className={styles.lengthFilter}
      type="number"
      min="0"
      value={length}
      onChange={handleChange}
    />
  );
}

export default PostLengthFilter;
