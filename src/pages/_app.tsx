import type { AppProps } from "next/app";

import "@/styles/globals.css";
import "@/styles/Home.module.css";
import "bootstrap/dist/css/bootstrap.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
        <Component {...pageProps} />
    </>
  );
}
