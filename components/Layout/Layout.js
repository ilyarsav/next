import Header from "../Header/Header";
import Footer from "../Footer/Footer";

export default function Layout({ children, data }) {
  return (
    <>
      <Header topCatList={data} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
