import React from "react";
import SVGElements from "./SVGElements";
import debounce from "../utils/debounce";
const Background = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const [dimensions, setDimensions] = React.useState({
    height: 0,
    width: 0,
  });

  React.useEffect(() => {
    setIsMounted(true);
    setDimensions({
      height: window.innerHeight,
      width: window.innerWidth,
    });
    const debouncedHandleResize = debounce(() => {
      setDimensions({
        height: window.innerHeight,
        width: window.innerWidth,
      });
    }, 1000);
    window.addEventListener("resize", debouncedHandleResize);
    return () => window.removeEventListener("resize", debouncedHandleResize);
  }, []);

  if (!isMounted) {
    return null;
  }
  return (
    <SVGElements
      width={dimensions.width}
      height={dimensions.height}
      className={
        "text-gray-300 red:text-red-200 orange:text-orange-200 yellow:text-yellow-200 green:text-green-200 blue:text-blue-200 indigo:text-indigo-200 purple:text-purple-200 w-full h-screen fixed"
      }
    />
  );
};

export default Background;
