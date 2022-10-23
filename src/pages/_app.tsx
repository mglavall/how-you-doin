import * as Tooltip from "@radix-ui/react-tooltip";
import { AppProps } from "next/app";
import "../styles/globals.css";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <Tooltip.Provider delayDuration={800} skipDelayDuration={500}>
      <Component {...pageProps} />
    </Tooltip.Provider>
  );
};

export default App;
