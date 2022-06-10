import Link from "next/link";

const CarsByRegionBlock = ({ carsByRegion }) => {
  return (
    <div className="col-md-8">
      <div className="row">
        <p>Продажа автомобилей в регионах</p>
      </div>
      <div className="row">
        {carsByRegion &&
          carsByRegion.map(({ id, name }) => (
            <div className="col-2" key={id}>
              <Link href="/">
                <a>{name}</a>
              </Link>
            </div>
          ))}
      </div>
    </div>
  );
};

export default CarsByRegionBlock;