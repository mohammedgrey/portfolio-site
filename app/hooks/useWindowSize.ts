import { useLayoutEffect, useState } from "react";

const useWindowSize = () => {
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  const handleSize = () => {
    setWindowSize({
      width: window.innerWidth,
      height: window.innerHeight,
    });
  };

  useLayoutEffect(() => {
    handleSize();

    window.addEventListener("resize", handleSize);

    return () => window.removeEventListener("resize", handleSize);
  }, []);

  const isMobilePhoneSize = windowSize.width < 600;
  const isExtraSmallPhone = windowSize.width < 375;

  return { windowSize, isMobilePhoneSize, isExtraSmallPhone };
};

export default useWindowSize;
