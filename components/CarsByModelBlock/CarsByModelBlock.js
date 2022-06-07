import Link from "next/link";

const CarsByModelBlock = ({ carsModel }) => {
  return (
    <div className="col-md-8">
      <div className="row">
        <p>Выбор автомобиля по марке</p>
      </div>
      <div className="row">
        {carsModel &&
        carsModel.map(({ id, name }) => (
          <div className="col-2">
            <Link href="/" key={id}>
              <a>{name}</a>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CarsByModelBlock;
