import Link from "next/link";
import { useState } from "react";

const CarsByModelBlock = ({ carsModel }) => {
  const [allModels, setAllModels] = useState(false);

  return (
    <div className="col-md-8">
      <div className="row">
        <p>
          Выбор автомобиля по модели
          <a
            className="ms-2"
            style={{ cursor: "pointer" }}
            onClick={() => setAllModels((res) => !res)}
          >
            Все модели
          </a>
        </p>
      </div>
      <div className="row">
        {allModels
          ? carsModel &&
            carsModel.map(({ id, name }) => (
              <div className="col-2" key={id}>
                <Link href="/">
                  <a>{name}</a>
                </Link>
              </div>
            ))
          : carsModel &&
            carsModel.slice(0, 18).map(({ id, name }) => (
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

export default CarsByModelBlock;
