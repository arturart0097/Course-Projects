import { MutableRefObject, Ref, useEffect, useRef } from "react";

export const useClickOutside = (handleClose) => {
  const ref = useRef(null);

  useEffect(() => {
    let handler = (e) => {
      // @ts-ignore
      if (!ref?.current.contains(e.target)) {
        handleClose();
      }
    };

    document.addEventListener("mousedown", handler);

    return () => {
      document.removeEventListener("mousedown", handler);
    };
  });

  return { ref };
};
