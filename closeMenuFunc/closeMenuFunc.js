import { useEffect } from "react";

const useOutsideClick = (ref, callback) => {
  useEffect(() => {
    if (typeof callback !== 'function') {
      console.error('The callback provided to useOutsideClick is not a function');
      return;
    }

    const handleClickOutside = (event) => {
      if (ref.current && !ref.current.contains(event.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [ref, callback]);
};

export default useOutsideClick;