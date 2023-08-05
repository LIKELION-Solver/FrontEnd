import type { AppProps } from "next/app";
import Layout from "../src/components/commons/layout";
import { Global } from "@emotion/react";
import { RecoilRoot } from "recoil";

export default function App({ Component, pageProps }: AppProps): JSX.Element {
  return (
    <RecoilRoot>
      <>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </>
    </RecoilRoot>
  );
}
