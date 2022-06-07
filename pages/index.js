

// export async function getServerSideProps() {
//   try {
//     const res = await fetch("http://localhost:3000/api/get-subcat-list1");
//     const body = await res.json();
//     return {
//       props: {
//         subcatList: body,
//       },
//     };
//   } catch (error) {
//     console.log("error");
//   }  
// }

const Home = ({ subcatList }) => {
  return (
    <div className="container">
    main
    </div>
  );
};

export default Home;
