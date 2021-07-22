import Document, { Html, Head, Main, NextScript } from "next/document";

// https://www.joshwcomeau.com/react/dark-mode/
// https://dev.to/sreetamdas/the-perfect-dark-mode-2d7g
function setInitialColorMode() {
  function getInitialColorMode() {
    const userPref = window.localStorage.getItem("theme");
    const hasUserPref = typeof userPref === "string";

    /*
     * If the user has explicitly chosen light or dark,
     * use it. Otherwise, this value will be null.
     */
    if (hasUserPref) {
      return userPref;
    }
    return null;
  }
  const colorModes = [
    "red",
    "orange",
    "yellow",
    "green",
    "blue",
    "indigo",
    "purple",
  ];
  const colorMode = getInitialColorMode();

  // add correct class for the preference
  if (colorMode !== null) {
    colorModes.forEach((cls) => {
      if (document.documentElement.classList.contains(cls)) {
        document.documentElement.remove(cls);
      }
    });
    document.documentElement.classList.add(colorMode);
  }
}

// our function needs to be a string
const blockingSetInitialColorMode = `(${setInitialColorMode.toString()}
)()
`;

export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <link rel="shortcut icon" href="/favicon.svg" />
          <link rel="stylesheet" href="https://rsms.me/inter/inter.css" />
        </Head>
        <body className={"font-sans"}>
          <script
            dangerouslySetInnerHTML={{
              __html: blockingSetInitialColorMode,
            }}
          />
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
