
import style from "./HotOffers.module.css";

const HotOffers = ({ cars }) => {
  return (
    <section>
      <div className="row mt-4">
        <div className="col p-0">
          <h1 className="fs-4 fw-normal ">
            Горячие предложения по продаже авто в Казахстане
          </h1>
        </div>
      </div>
      <div className="row">
        {cars &&
          cars.map(({ id, path, city, brand }) => (
            <div className={`col-auto ${style.cars__image__div} me-2 mb-2`} key={id}>
              <div className={style.hot__img__top__div}>{city}</div>
              <a href={`/ad/${id}`} target="_blank">
                <img src={path} width={120} height={90} />
              </a>
              <div className={style.hot__img__bottom__div}>{brand}</div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default HotOffers;
