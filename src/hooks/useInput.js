import { useState } from "react";

export const useInput = (initVal) => {
  const [value, setValue] = useState(null);
  return [
    {
      value,
      onChange: (e) => {
        setValue(e.target.value);
      },
    },
    () => setValue(initVal),
  ];
};