import { useEffect, useState } from "react";

export const useShopSelect = (options) => {
  const optionsNoMutate = [...options];

  const [selected, setSelected] = useState(
    optionsNoMutate.filter(({ isDefault }) => isDefault)[0]
  );

  const setSelectedHandler = (event, selectedValue) => {
    if (!selectedValue) return false;
    if (selected.value === selectedValue) return false;
    const optionsNoMutate = [...options];
    event.preventDefault();
    setSelected(
      optionsNoMutate.filter(({ value }) => value === selectedValue)[0]
    );
  };

  return { selected, setSelectedHandler };
};
