const AdItem = () => {
  return (
    <>
      <div className="container">
        <div className="row fs-5 border-bottom pb-4">
          Toyota Camry 2007 года
        </div>
        <div className="row mt-3 gx-5">
          <div className="col-4 fs-5">
            <div className="row mb-3">
              <span>6 300 000 ₸</span>
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
                <span>Актау</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Кузов</span>
              </div>
              <div className="col fs-6">
                <span>седан</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Объем двигателя, л</span>
              </div>
              <div className="col fs-6">
                <span>2.4 (бензин)</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Пробег</span>
              </div>
              <div className="col fs-6">
                <span>287 478 км</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Коробка передач</span>
              </div>
              <div className="col fs-6">
                <span>автомат</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Руль</span>
              </div>
              <div className="col fs-6">
                <span>слева</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Цвет</span>
              </div>
              <div className="col fs-6">
                <span>серый металлик</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Привод</span>
              </div>
              <div className="col fs-6">
                <span>передний привод</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>Растаможен в Казахстане</span>
              </div>
              <div className="col fs-6">
                <span>Да</span>
              </div>
            </div>
            <div className="row mb-2">
              <div className="col p-0 fs-6">
                <span>VIN</span>
              </div>
              <div className="col fs-6">
                <span>4XXXXXXX*XX****XX</span>
              </div>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default AdItem;
