import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useSWR from "swr";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

export default function Layout({ children, data }) {
  return (
    <>
      <Header topCatList={data} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
