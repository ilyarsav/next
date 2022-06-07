import { AddNew } from "../../components/AddNew/AddNew";
import HotOffers from "../../components/HotOffers/HotOffers";
import MainContent from "../../components/MainContent/MainContent";
import SubCategoryBlock from "../../components/SubCategoryBlock/SubCategoryBlock";

export async function getServerSideProps() {
  try {
    const cars = await fetch("http://localhost:3000/api/get-cars-list").then(
      (res) => res.json()
    );
    const carsBrand = await fetch(
      "http://localhost:3000/api/get-car-brand-list"
    ).then((res) => res.json());

    const carsModel = await fetch(
      "http://localhost:3000/api/get-car-model-list"
    ).then((res) => res.json());

    const carsByCity = await fetch(
      "http://localhost:3000/api/get-city-list"
    ).then((res) => res.json());

    return {
      props: {
        cars,
        carsBrand,
        carsModel,
        carsByCity
      },
    };
  } catch (error) {
    console.log("error");
  }
}

const CategoryItem = ({ cars, carsBrand, carsModel, carsByCity }) => {
  return (
    <>
      <div className="container-lg">
        <SubCategoryBlock />
        <HotOffers cars={cars} />
        <AddNew />
        <MainContent carsBrand={carsBrand} carsModel={carsModel} carsByCity={carsByCity} />
      </div>
    </>
  );
};

export default CategoryItem;
