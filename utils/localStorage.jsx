import { useEffect, useState } from "react";

export const useLocalStorageState = (key, defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !!navigator.cookieEnabled &&
      !!window.localStorage
    ) {
      try {
        const item = window.localStorage.getItem(key);
        setValue(item ? JSON.parse(item) : defaultValue);
      } catch (error) {
        console.log(error);
      }
    } else {
      return defaultValue;
    }
  }, []);
  useEffect(() => {
    if (
      typeof window !== "undefined" &&
      !!navigator.cookieEnabled &&
      !!window.localStorage
    ) {
      try {
        window.localStorage.setItem(key, JSON.stringify(value));
      } catch (error) {
        console.log(error);
      }
    }
  }, [value, key]);
  // Only works with Arr
  const removeValue = (index) => {
    const front = value.slice(0, index);
    const back = value.slice(index + 1, value.length - index + 1);
    setValue([...front, ...back]);
  };
  return [value, setValue, removeValue];
};
