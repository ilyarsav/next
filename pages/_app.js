import "bootstrap/dist/css/bootstrap.css";
import "../styles/globals.css";
import { useEffect } from "react";
import Layout from "../components/Layout/Layout";
import App from 'next/app'

const MyApp = ({ Component, pageProps, data }) => {
  useEffect(() => {
    import("bootstrap/dist/js/bootstrap");
  }, []);

  return (
    <Layout data={data}>
      <Component {...pageProps} />
    </Layout>
  );
};

MyApp.getInitialProps = async (appContext) => {
  // calls page's `getInitialProps` and fills `appProps.pageProps`
  const appProps = await App.getInitialProps(appContext);

  const res = await fetch("http://localhost:3000/api/get-top-cat-list");
  const data = await res.json();

  return { ...appProps, data };
};

export default MyApp;
