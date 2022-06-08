import useSWR from "swr";
import { useState } from "react";
import style from "./SubCategoryFormWaterTrans.module.css";

const SubCategoryFormWaterTrans = () => {
  const [regionList, setRegionList] = useState(false);

  const openModal = () => {
    setRegionList((res) => !res);
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const cities = useSWR("http://localhost:3000/api/get-city-list", fetcher);

  const regions = useSWR("http://localhost:3000/api/get-region-list", fetcher);

  const motoType = useSWR(
    "http://localhost:3000/api/get-car-brand-list",
    fetcher
  );

  if (cities.error || regions.error || motoType.error)
    return <div>Failed to load</div>;
  if (!cities.data || !regions.data || !motoType.data)
    return <div>Loading...</div>;

  return (
    <div className={`row ${style.subcat__block} p-3`}>
      <div className="col-8">
        <div className="row mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Что ищем?"
          />
          <div id="emailHelp" className="form-text">
            Здесь пишут, что хотят. Даже номер телефона, если ищут своё
            объявление.
          </div>
        </div>
        <div className="row">
          <div className="row mb-3">
            <div className="col-auto">
              <a className="" onClick={openModal}>
                Где искать
              </a>
            </div>
            {cities.data &&
              cities.data.map(({ id, name }) => {
                return (
                  <div className="col-auto" key={id}>
                    <a className="">{name}</a>
                  </div>
                );
              })}
            <div className="col-auto">
              <a className="" onClick={openModal}>
                ещё
              </a>
            </div>
          </div>
          {regionList && (
            <div className="row mb-3">
              <div className="row">
                <input
                  type="text"
                  className="form-control"
                  id="exampleInputEmail1"
                  placeholder="Найти регион, например Салават"
                />
              </div>
              <div className="row d-flex justify-content-between">
                {regions.data &&
                  regions.data.map(({ id, name }) => {
                    return (
                      <div className="col-6 my-2" key={id}>
                        <a className="">{name}</a>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}
        </div>
        <div className="row">
          <div className="col-auto">
            <b>Тип</b>
          </div>
          {motoType.data &&
            motoType.data.slice(0, 5).map(({ id, name }) => {
              return (
                <div className="col-auto" key={id}>
                  <a className="">{name}</a>
                </div>
              );
            })}
          <div className="col-auto">
            <a className="">другой</a>
          </div>
        </div>
        <div className="row mt-3">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              С фото
            </label>
          </div>
        </div>
      </div>
      <div className="col-4">
        <div className="row mt-3">
          Цена
          <div className="row p-0">
            <div class="input-group">
              <input
                type="text"
                aria-label="First name"
                class="form-control"
                placeholder="от"
              />
              <input
                type="text"
                aria-label="Last name"
                class="form-control"
                placeholder="до"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="row p-2 d-flex justify-content-center">
        <div className="col-2">
          <button type="submit" className="btn btn-primary">
            Показать
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubCategoryFormWaterTrans;
