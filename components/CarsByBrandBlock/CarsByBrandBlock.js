import Link from "next/link";
import { useState } from "react";

const CarsByBrandBlock = ({ carsBrand }) => {
  const [allBrands, setAllBrands] = useState(false);

  return (
    <div className="col-md-8">
      <div className="row">
        <div className="col">
          <Link href="/">
            <a className="me-3 fs-5">Новые автомобили</a>
          </Link>
          <Link href="/">
            <a className="fs-5">С пробегом</a>
          </Link>
        </div>
      </div>
      <div className="row mt-2">
        <p>
          Выбор автомобиля по марке
          <a
            className="ms-2"
            style={{ cursor: "pointer" }}
            onClick={() => setAllBrands((res) => !res)}
          >
            Все марки
          </a>
        </p>
      </div>
      <div className="row">
        {allBrands
          ? carsBrand &&
            carsBrand.map(({ id, name }) => (
              <div className="col-2" key={id}>
                <Link href="/">
                  <a>{name}</a>
                </Link>
              </div>
            ))
          : carsBrand &&
            carsBrand.slice(0, 18).map(({ id, name }) => (
              <div className="col-2" key={id}>
                <Link href="/" >
                  <a>{name}</a>
                </Link>
              </div>
            ))}
      </div>
    </div>
  );
};

export default CarsByBrandBlock;
