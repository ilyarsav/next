import Image from "next/image";

export async function getServerSideProps() {
  try {
    const car = await fetch("http://localhost:3000/api/get-car-details").then(
      (res) => res.json()
    );

    return {
      props: {
        car,
      },
    };
  } catch (error) {
    console.log("error");
  }
}

const AdItem = ({ car }) => {
  return (
    <>
      <div className="container">
        <div className="row fs-5 border-bottom pb-4">{car.name}</div>
        <div className="row mt-3 gx-5">
          <div className="col-4 fs-5">
            <div className="row mb-3">
              <span className="p-0">{car.price} ₸</span>
            </div>
            <div className="row mb-2 justify-content-between">
              <div className="col-auto d-flex align-items-center p-0">
                <h6>Ежемесячный платеж</h6>
              </div>
              <div className="col-auto">
                <span>143 357 ₸</span>
              </div>
            </div>
            <div className="row mb-2 justify-content-between">
              <div className="col-auto d-flex align-items-center p-0">
                <h6>Первоначальный взнос</h6>
              </div>
              <div className="col-auto">
                <span>1 890 000 ₸</span>
              </div>
            </div>
            <div className="row mb-3">
              <button className="btn btn-warning">Рассчитать кредит</button>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Город</span>
              </div>
              <div className="col fs-6">
                <span>{car.city}</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Кузов</span>
              </div>
              <div className="col fs-6">
                <span>{car.carbody}</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Объем двигателя, л</span>
              </div>
              <div className="col fs-6">
                <span>{car.engineSize} (бензин)</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Пробег</span>
              </div>
              <div className="col fs-6">
                <span>{car.mileage} км</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Коробка передач</span>
              </div>
              <div className="col fs-6">
                <span>{car.gearbox}</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Руль</span>
              </div>
              <div className="col fs-6">
                <span>{car.wheel}</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Цвет</span>
              </div>
              <div className="col fs-6">
                <span>{car.color}</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Привод</span>
              </div>
              <div className="col fs-6">
                <span>{car.drive}</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Растаможен в Казахстане</span>
              </div>
              <div className="col fs-6">
                <span>{car.tamozhnyaVKZ}</span>
              </div>
            </div>
            <div className="row border p-3 shadow mt-3 position-sticky top-0">
              <h6>Контакты продавца</h6>
              <p>
                Внимание! Покупая, никогда не отправляйте предоплату. Вы можете
                потерять свои деньги!
              </p>
              <span>{car.number}</span>
              <button className="btn btn-primary mt-3 ">
                Написать сообщение
              </button>
            </div>
          </div>
          <div className="col-8">
            <div className="row">
              <div className="col-auto">
                <span className="me-3">Стать VIP на 3 дня</span>
              </div>
              <div className="col-auto">
                <span className="me-3">Продлить на 7 дней</span>
              </div>
              <div className="col-auto">
                <span className="me-3">Отправить в «ТОП»</span>
              </div>
              <div className="col-auto">
                <span>В горячие</span>
              </div>
            </div>
            <div className="row mt-3">
              <img src={car.mainImg} width="100%" />
            </div>
            <div className="row mt-1 g-3">
              {car.imgArr &&
                car.imgArr.map(({ id, path }) => (
                  <div className="col-auto" key={id}>
                    <Image src={path} width={90} height={90} />
                  </div>
                ))}
            </div>
            <div className="row mt-3 border-bottom border-secondary">
              <p>{car.available}</p>
            </div>
            <div className="row mt-3">
              <h3 className="fs-4">Описание</h3>
              <p>{car.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdItem;
