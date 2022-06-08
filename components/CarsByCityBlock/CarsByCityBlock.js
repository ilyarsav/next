import Link from "next/link";

const CarsByCityBlock = ({ carsByCity }) => {
  return (
    <div className="col-md-8">
      <div className="row">
        <p>Продажа авто в кредит по городам</p>
      </div>
      <div className="row">
        {carsByCity &&
          carsByCity.map(({ id, name }) => (
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

export default CarsByCityBlock;
