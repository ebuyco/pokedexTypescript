import { ReactNode, ReactElement } from "react";
// import App from 'next/app';
import Layout from '../components/Layout';

type Params = {
    Component: () => ReactElement;
    pageProps: { [key: string]: any };
  };
  
  export default function MyApp({
    Component,
    pageProps,
  }: Params): ReactNode {
    return (
        <Layout>
          <Component {...pageProps} />
      </Layout>
    );
  }