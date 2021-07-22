import Head from "next/head";
import useColorMode from "../hooks/useColorMode";
import SVGElements from "../components/SVGElements";
import React from "react";

const ColorButton = ({ className, themeName, children, selectedClasses }) => {
  const { colorMode, setColorMode } = useColorMode();
  const selected = themeName === colorMode;
  return (
    <button
      className={`${className} bg-gradient-to-br rounded-md text-white font-semibold text-lg w-24 h-24 hover:shadow-lg focus:shadow-lg ${
        selected ? `ring-2 ring-offset-2 ${selectedClasses}` : ""
      } focus:outline-none focus:ring-2 focus:ring-offset-2`}
      onClick={() => setColorMode(themeName)}
    >
      {children}
    </button>
  );
};

const debounce = (fn, ms) => {
  let timer;
  return () => {
    clearTimeout(timer);
    timer = setTimeout(() => {
      timer = null;
      fn.apply(this, arguments);
    }, ms);
  };
};

const Home = () => {
  const [isMounted, setIsMounted] = React.useState(false);
  const demoRef = React.useRef();
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

  return (
    <div>
      <Head>
        <title>Tailwind Themes</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {isMounted && (
        <SVGElements
          width={dimensions.width}
          height={dimensions.height}
          className={
            "text-gray-300 red:text-red-200 orange:text-orange-200 yellow:text-yellow-200 green:text-green-200 blue:text-blue-200 indigo:text-indigo-200 purple:text-purple-200 w-full h-screen fixed"
          }
        />
      )}
      <nav className={"bg-white sticky top-0 z-10 shadow-sm h-16"}>
        <div
          className={
            "w-full h-2 bg-gradient-to-r from-gray-200 via-gray-400 to-gray-500 " +
            "red:from-red-100 red:via-red-300 red:to-red-500 " +
            "orange:from-orange-100 orange:via-orange-300 orange:to-orange-500 " +
            "yellow:from-yellow-100 yellow:via-yellow-300 yellow:to-yellow-500 " +
            "green:from-green-100 green:via-green-300 green:to-green-600 " +
            "blue:from-blue-100 blue:via-blue-300 blue:to-blue-600 " +
            "indigo:from-indigo-100 indigo:via-indigo-300 indigo:to-indigo-500 " +
            "purple:from-purple-100 purple:via-purple-300 purple:to-purple-500"
          }
        />
        <div className={"flex justify-between items-center h-14 px-8"}>
          <div className={"flex gap-4 items-center"}>
            <svg viewBox={"0 0 200 200"} className={"h-6 w-6"}>
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(45)">
                  <stop
                    offset="0%"
                    stopColor="currentColor"
                    className={"color1"}
                  />
                  <stop
                    offset="50%"
                    stopColor="currentColor"
                    className={"color2"}
                  />
                  <stop
                    offset="100%"
                    stopColor="currentColor"
                    className={"color3"}
                  />
                </linearGradient>
              </defs>
              <rect
                x={0}
                y={0}
                width={200}
                height={200}
                rx={40}
                fill="url('#gradient')"
              />
            </svg>
            <div
              className={
                "text-lg font-bold bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 bg-clip-text text-transparent"
              }
            >
              Tailwind Themes
            </div>
          </div>
          <a
            href={"https://github.com/maggie-j-liu/tailwind-themes"}
            target="_blank"
            rel="noreferrer"
          >
            <svg
              className={"h-6 w-6 text-indigo-500"}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </nav>
      <div className={"relative"}>
        <div
          className={
            "w-full px-16 py-24 flex flex-col items-center gap-8 bg-white bg-opacity-80"
          }
        >
          <h1
            className={
              "self-start md:self-center font-extrabold text-7xl red:text-red-900 orange:text-orange-900 yellow:text-yellow-900 green:text-green-900 blue:text-blue-900 indigo:text-indigo-900 purple:text-purple-900"
            }
          >
            Tailwind Themes
          </h1>
          <p className={"text-gray-700 text-xl self-start md:self-center"}>
            A Tailwind CSS plugin that adds variants for multiple themes, making
            it easy to create multiple color themes for your website.
          </p>
          <button
            className={
              "font-bold mt-8 bg-gray-200 hover:bg-gray-400 px-8 py-4 text-xl rounded-md shadow-sm hover:shadow-lg " +
              "red:bg-red-200 orange:bg-orange-200 yellow:bg-yellow-200 green:bg-green-200 blue:bg-blue-200 indigo:bg-indigo-200 purple:bg-purple-200 " +
              "red:hover:bg-red-400 orange:hover:bg-orange-400 yellow:hover:bg-yellow-500 green:hover:bg-green-400 blue:hover:bg-blue-400 indigo:hover:bg-indigo-400 purple:hover:bg-purple-400 " +
              //"red:border-red-800 orange:border-orange-700 yellow:border-yellow-600 green:border-green-800 blue:border-blue-800 indigo:border-indigo-800 purple:border-purple-800 " +
              "hover-white-text red:text-red-800 orange:text-orange-900 yellow:text-yellow-800 green:text-green-800 blue:text-blue-800 indigo:text-indigo-800 purple:text-purple-800"
            }
            onClick={() => {
              demoRef.current.scrollIntoView({ behavior: "smooth" });
            }}
          >
            View demo
            <style jsx>{`
              .hover-white-text:hover {
                color: white;
              }
            `}</style>
          </button>
        </div>
        <div
          className={
            "transparent py-24 bg-gray-200 red:bg-red-100 orange:bg-orange-100 yellow:bg-yellow-100 green:bg-green-100 blue:bg-blue-100 indigo:bg-indigo-100 purple:bg-purple-100"
          }
          ref={demoRef}
        >
          <div
            className={
              "self-center flex w-max mx-auto bg-white rounded-lg shadow-xl"
            }
          >
            <div className={"grid w-full h-full p-8 sm:p-10 grid-cols-3 gap-8"}>
              <ColorButton
                className={"from-red-300 to-red-500 focus:ring-red-400"}
                selectedClasses={"ring-red-400"}
                themeName={"red"}
              >
                Red
              </ColorButton>
              <ColorButton
                className={
                  "from-orange-300 to-orange-500 focus:ring-orange-400"
                }
                selectedClasses={"ring-orange-400"}
                themeName={"orange"}
              >
                Orange
              </ColorButton>
              <ColorButton
                className={
                  "from-yellow-300 to-yellow-500 focus:ring-yellow-400"
                }
                selectedClasses={"ring-yellow-400"}
                themeName={"yellow"}
              >
                Yellow
              </ColorButton>
              <ColorButton
                className={"from-green-300 to-green-500 focus:ring-green-400"}
                selectedClasses={"ring-green-400"}
                themeName={"green"}
              >
                Green
              </ColorButton>
              <ColorButton
                className={"from-blue-300 to-blue-500 focus:ring-blue-400"}
                selectedClasses={"ring-blue-400"}
                themeName={"blue"}
              >
                Blue
              </ColorButton>
              <ColorButton
                className={
                  "from-indigo-300 to-indigo-500 focus:ring-indigo-400"
                }
                selectedClasses={"ring-indigo-400"}
                themeName={"indigo"}
              >
                Indigo
              </ColorButton>
              <ColorButton
                className={
                  "from-purple-300 to-purple-500 focus:ring-purple-400"
                }
                selectedClasses={"ring-purple-400"}
                themeName={"purple"}
              >
                Purple
              </ColorButton>
            </div>
          </div>
          <style jsx>{`
            .transparent {
              --tw-bg-opacity: 0.8;
            }
          `}</style>
        </div>
      </div>
    </div>
  );
};

export default Home;
