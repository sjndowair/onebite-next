import type { AppProps } from "next/app";
import "../styles/globals.css";
import Layout from "./Layout";
import { NextPage } from "next";


type NextPagewithLayout = NextPage & {
  getLayout?: (page: React.ReactNode) => React.ReactNode;
}


export default function App({ Component, pageProps }: AppProps & {
  Component: NextPagewithLayout
}) {


  const getLayout = Component?.getLayout ?? ((page: React.ReactNode) => page)

  return <Layout>
  {getLayout(<Component {...pageProps} />)}
  </Layout>
}