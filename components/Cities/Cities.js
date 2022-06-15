import style from "./Cities.module.css";
import useSWR from "swr";
import { useState } from "react";

const Cities = () => {
  const [regionList, setRegionList] = useState(false);
  const [citiesInRegionList, setCitiesInRegionList] = useState(false);
  const [city, setCity] = useState(null);
  const [region, setRegion] = useState(null);
  const [cityInRegion, setCityInRegion] = useState(null);

  const openModal = () => {
    // if (!citiesInRegionList) {
      setRegionList((prev) => !prev);
    // }
    // if (!regionList) {
    //   setCitiesInRegionList(prev => !prev)
    // }
  };

  const chooseCity = (id) => {
    city != id ? setCity(id) : setCity(null);
    setRegion(null);
  };

  const chooseRegion = (id) => {
    // setRegionList(false);
    // setCitiesInRegionList((prev) => !prev);
    setRegion(id);
    setCity(null);
  };

  // const chooseCityInRegion = (id) => {
  //   setCityInRegion(id);
  //   setCity(null);
  // };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const cities = useSWR("http://localhost:3000/api/get-city-list", fetcher);
  const regions = useSWR("http://localhost:3000/api/get-region-list", fetcher);
  const citiesInRegion = useSWR(
    "http://localhost:3000/api/get-akmolinsk-region-cities-list",
    fetcher
  );

  if (cities.error || regions.error || citiesInRegion.error)
    return <div>Failed to load</div>;
  if (!cities.data || !regions.data || !citiesInRegion.data)
    return <div>Loading...</div>;

  return (
    <>
      <div className="row mb-3 mt-3">
        <div className="col-auto">
          <a className={style.link} onClick={openModal}>
            Где искать
          </a>
        </div>
        <div className="col-auto">
          <div className="row">
            {cities.data &&
              cities.data.map(({ id, name }) => {
                return (
                  <div className="col-auto" key={id}>
                    <a
                      className={city === id ? style.choosen : style.link}
                      onClick={() => {
                        chooseCity(id);
                      }}
                    >
                      {name}
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
        <div className="col-auto">
          <a className={style.link} onClick={openModal}>
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
              regionList &&
              regions.data.map(({ id, name }) => {
                return (
                  <div className="col-6 my-2" key={id}>
                    <a
                      className={style.link}
                      onClick={() => {
                        chooseRegion(id);
                      }}
                    >
                      {name}
                    </a>
                  </div>
                );
              })}
          </div>
        </div>
      )}

      {/* {citiesInRegionList && (
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
            {citiesInRegion.data.map(({ id, name }) => {
              return (
                <div className="col-6 my-2" key={id}>
                  <a
                    className={style.link}
                    onClick={() => {
                      chooseCityInRegion(id);
                    }}
                  >
                    {name}
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      )} */}
    </>
  );
};

export default Cities;
