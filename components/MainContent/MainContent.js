import CarsByBrandBlock from "../CarsByBrandBlock/CarsByBrandBlock";
import CarsByCityBlock from "../CarsByCityBlock/CarsByCityBlock";
import CarsByModelBlock from "../CarsByModelBlock/CarsByModelBlock";
import CarsByRegionBlock from "../CarsByRegionBlock/CarsByRegionBlock";
import MainAdvertising from "../MainAdvertising/MainAdvertising";
import MainArticles from "../MainArticles/MainArticles";
import MainNews from "../MainNews/MainNews";

const MainContent = ({ carsBrand, carsModel, carsByCity, carsByRegion }) => {
  return (
    <section className="main__content">
      <div className="row mt-4 gx-2">
        <CarsByBrandBlock carsBrand={carsBrand} />
        <MainNews />
      </div>
      <div className="row mt-4 gx-2">
        <CarsByModelBlock carsModel={carsModel} />
        <MainArticles />
      </div>
      <div className="row mt-4 gx-2">
        <CarsByCityBlock carsByCity={carsByCity} />
        <MainAdvertising />
      </div>
      <div className="row mt-4 gx-2">
        <CarsByRegionBlock carsByRegion={carsByRegion}/>
      </div>
    </section>
  );
};

export default MainContent;
