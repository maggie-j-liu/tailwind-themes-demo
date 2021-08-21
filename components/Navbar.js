const Navbar = () => {
  return (
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
          className={"hover:bg-indigo-50 px-2 py-2 rounded-full"}
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
  );
};

export default Navbar;
