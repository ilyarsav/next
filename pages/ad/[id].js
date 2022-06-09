const AdItem = () => {
  return (
    <>
      <div className="container">
        <div className="row fs-5 border-bottom pb-4">
          Toyota Camry 2007 года
        </div>
        <div className="row mt-3">
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
            <div className="row">
              <div className="col p-0 fs-6">
                <span>Город</span>
              </div>
              <div className="col fs-6">Актау</div>
            </div>
            <div className="row">
              <div className="col p-0 fs-6">
                <span>Кузов</span>
              </div>
              <div className="col fs-6">седан</div>
            </div>
            <div className="row">
              <div className="col p-0 fs-6">
                <span>Объем двигателя, л</span>
              </div>
              <div className="col fs-6">2.4 (бензин)</div>
            </div>
            <div className="row">
              <div className="col p-0 fs-6">
                <span>Пробег</span>
              </div>
              <div className="col fs-6">287 478 км</div>
            </div>
            <div className="row">
              <div className="col p-0 fs-6">
                <span>Коробка передач</span>
              </div>
              <div className="col fs-6">автомат</div>
            </div>
            <div className="row">
              <div className="col p-0 fs-6">
                <span>Руль</span>
              </div>
              <div className="col fs-6">слева</div>
            </div>
            <div className="row">
              <div className="col p-0 fs-6">
                <span>Цвет</span>
              </div>
              <div className="col fs-6">серый металлик</div>
            </div>
            <div className="row">
              <div className="col p-0 fs-6">
                <span>Привод</span>
              </div>
              <div className="col fs-6">передний привод</div>
            </div>
            <div className="row">
              <div className="col p-0 fs-6">
                <span>Растаможен в Казахстане</span>
              </div>
              <div className="col fs-6">Да</div>
            </div>
            <div className="row">
              <div className="col p-0 fs-6">
                <span>VIN</span>
              </div>
              <div className="col fs-6">4XXXXXXX*XX****XX</div>
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
