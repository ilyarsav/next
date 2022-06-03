import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import useSWR from 'swr'

const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function Layout({ children }) {
  const { data, error } = useSWR("http://localhost:3000/api/get-top-cat-list", fetcher)

  if (error) return <div>Failed to load</div>
  if (!data) return <div>Loading...</div>
  console.log(data);  
  return (
    <>
      <Header topCatList={data}/>
      <main>{children}</main>
      <Footer />
    </>
  );
  
  
}
