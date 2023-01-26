import "../styles/globals.css";
import DarkModeContextProvider from "../components/context";

function MyApp({ Component, pageProps }) {
  return (
    <DarkModeContextProvider>
      <Component {...pageProps} />
    </DarkModeContextProvider>
  );
}

export default MyApp;
