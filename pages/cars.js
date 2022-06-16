
import AddNew from "../components/AddNew/AddNew";
import HotOffers from "../components/HotOffers/HotOffers";
import SubCategoryBlock from "../components/SubCategoryBlock/SubCategoryBlock";

export async function getServerSideProps() {
  try {
    const cars = await fetch("http://localhost:3000/api/get-cars-list").then(
      (res) => res.json()
    );
    // const carsBrand = await fetch(
    //   "http://localhost:3000/api/get-car-brand-list"
    // ).then((res) => res.json());

    // const carsModel = await fetch(
    //   "http://localhost:3000/api/get-car-model-list"
    // ).then((res) => res.json());

    // const carsByCity = await fetch(
    //   "http://localhost:3000/api/get-city-list"
    // ).then((res) => res.json());

    // const carsByRegion = await fetch(
    //   "http://localhost:3000/api/get-region-list"
    // ).then((res) => res.json());

    return {
      props: {
        cars,
        // carsBrand,
        // carsModel,
        // carsByCity,
        // carsByRegion,
      },
    };
  } catch (error) {
    console.log("error");
  }
}

const CategoryItem = ({
  cars,
  // carsBrand,
  // carsModel,
  // carsByCity,
  // carsByRegion,
}) => {
  return (
    <>
      <div className="container-lg p-4">
        <SubCategoryBlock />
        <HotOffers cars={cars} />
        <AddNew />
        {/* <MainContent
          carsBrand={carsBrand}
          carsModel={carsModel}
          carsByCity={carsByCity}
          carsByRegion={carsByRegion}
        /> */}
      </div>
    </>
  );
};

export default CategoryItem;
