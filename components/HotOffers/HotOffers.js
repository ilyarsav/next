import Image from "next/image";

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
      <div className="row gx-2 ">
        {cars &&
          cars.map(({ id, path }) => (
            <div className="col-auto" key={id}>
              <Image src={path} width={120} height={90} />
            </div>
          ))}
      </div>
    </section>
  );
};

export default HotOffers;
