import useColorMode from "../hooks/useColorMode";
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

export default ColorButton;
