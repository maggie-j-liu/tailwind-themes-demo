import SVGBackground from "./SVGBackground";
const OGImage = () => {
  return (
    <>
      <SVGBackground />
      <div
        className={
          "bg-gradient-to-tl from-white/70 via-white/50 fixed h-screen w-full"
        }
      />
      <div className={"text-right absolute right-8 bottom-12"}>
        <h1
          className={
            "font-bold text-8xl bg-gradient-to-r text-transparent bg-clip-text from-blue-500 via-indigo-500 to-purple-500"
          }
        >
          Tailwind Themes
        </h1>
        <h2 className={"text-gray-700 text-2xl font-medium"}>
          A{" "}
          <span className={"text-[#06b6d4] font-semibold"}>
            Tailwind CSS plugin
          </span>{" "}
          that adds variants for multiple color themes.
        </h2>
      </div>
      <div
        className={
          "absolute bottom-0 left-0 w-1/2 h-6 bg-gradient-to-r from-red-300 via-yellow-300 to-green-300"
        }
      />
      <div
        className={
          "absolute bottom-0 right-0 w-1/2 h-6 bg-gradient-to-r from-green-300 via-blue-400 to-purple-400"
        }
      />
    </>
  );
};
export default OGImage;
