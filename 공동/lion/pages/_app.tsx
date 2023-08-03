import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  // common settings that can be done on all pages

  return (
    // You can use the function on other pages because Apollo settings are downloaded from all pages.
    <RecoilRoot>
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </RecoilRoot>
  );
}
