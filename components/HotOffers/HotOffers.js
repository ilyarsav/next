import Image from "next/image";
import style from "./HotOffers.module.css";

const HotOffers = ({ cars }) => {
  return (
    <section className="hot__big">
      <div className="row mt-4">
        <div className="col">
          <h1 className="fs-4 fw-normal">
            Горячие предложения по продаже авто в Казахстане
          </h1>
        </div>
      </div>
      <div className="row">
        {cars &&
          cars.map(({ id, path, city, brand }) => (
            <div className={`col-auto ${style.cars__image__div} me-2`} key={id}>
              <div className={style.hot__img__top__div}>{city}</div>
              <a href={`/ad/${id}`} target="_blank">
                <Image src={path} width={120} height={90} />
              </a>
              <div className={style.hot__img__bottom__div}>{brand}</div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default HotOffers;
