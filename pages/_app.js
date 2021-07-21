import "../styles/globals.css";
import { ColorModeProvider } from "../hooks/useColorMode";

function MyApp({ Component, pageProps }) {
  return (
    <ColorModeProvider>
      <Component {...pageProps} />
    </ColorModeProvider>
  );
}

export default MyApp;
