import { useEffect, useState } from "react";

//debounce 함수
export const useInput = <T>(value: T) => {
  const [onChangeValue, setOnChangeValue] = useState(value);
  useEffect(() => {
    const ChangeValue = setTimeout(() => {
      setOnChangeValue(value);
    }, 150);
    return () => {
      clearInterval(ChangeValue);
    };
  }, [value]);

  return onChangeValue;
};
