import Header from "../components/Header/Header";

// export async function getServerSideProps() {
//   try {
//     const res = await fetch("http://localhost:3000/api/get-top-cat-list");
//     const body = await res.json();
//     return {
//       props: {
//         topCatList: body,
//       },
//     };
//   } catch (error) {
//     console.log("error");
//   }
// }

const Home = ({ topCatList }) => {
  return (
    <div className="container">
      <div className="row">
        {/* <Header topCatList={topCatList} /> */}
      </div>
    </div>
  );
};

export default Home;
