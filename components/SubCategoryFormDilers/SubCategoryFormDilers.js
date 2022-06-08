import style from "./SubCategoryFormDilers.module.css";
import useSWR from "swr";
import { useState } from "react";

const SubCategoryFormDillers = () => {
  const [regionList, setRegionList] = useState(false);

  const openModal = () => {
    setRegionList((res) => !res);
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const cities = useSWR("http://localhost:3000/api/get-city-list", fetcher);

  const regions = useSWR("http://localhost:3000/api/get-region-list", fetcher);

  if (cities.error || regions.error) return <div>Failed to load</div>;
  if (!cities.data || !regions.data) return <div>Loading...</div>;

  return (
    <div className={`row ${style.subcat__block}`}>
      <form>
        <div>
          <div className="row mb-3 mt-4">
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
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Искать в тексте объявлений
          </label>
        </div>
        <div className={`p-2 ${style.subcat__button}`}>
          <button type="submit" className="btn btn-primary">
            Показать
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubCategoryFormDillers;
