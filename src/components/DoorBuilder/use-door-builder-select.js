import { useState } from "react";

export const useDoorBuilderSelect = (options) => {
  const optionsNoMutate = [...options];
  const defaultValue = optionsNoMutate.filter(({ isDefault }) => isDefault)[0];
  const [selected, setSelected] = useState(defaultValue);

  const setSelectedHandler = (event, selectedValue, func) => {
    if (!selectedValue) return false;
    if (selected.value === selectedValue) return false;
    const optionsNoMutate = [...options];
    event.preventDefault();
    setSelected(
      optionsNoMutate.filter(({ value }) => value === selectedValue)[0]
    );
    if (func) func();
  };

  const reset = (event) => {
    if (selected.value === defaultValue.value) return false;
    setSelected(defaultValue);
  };

  return { reset, selected, setSelectedHandler };
};
