import Link from "next/link";

const CarsByBrandBlock = ({ carsBrand }) => {
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
      <div className="row">
        <p>Выбор автомобиля по марке</p>
      </div>
      <div className="row">
        {carsBrand &&
          carsBrand.map(({ id, name }) => (
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

export default CarsByBrandBlock;
