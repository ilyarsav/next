import style from "./Cities.module.css";
import useSWR from "swr";
import { useState } from "react";

const Cities = () => {
  const [regionList, setRegionList] = useState(false);
  const [citiesInRegionList, setCitiesInRegionList] = useState(false);
  const [city, setCity] = useState(null);
  const [region, setRegion] = useState(null);
  const [cityInRegion, setCityInRegion] = useState(null);

  const whereToSearch = () => {
    if (region) {
      setCitiesInRegionList((prev) => !prev);
      setRegionList(false);
    } else {
      setRegionList((prev) => !prev);
    }
  };

  const openAllRegions = () => {
    setCitiesInRegionList(false);
    setRegion(null);
    setCityInRegion(null);
    setRegionList(true);
  };

  const chooseCity = (id) => {
    city != id ? setCity(id) : setCity(null);
    setRegion(null);
    setRegionList(false);
    setCitiesInRegionList(false);
    setCityInRegion(null);
  };

  const chooseRegion = (id) => {
    region != id ? setRegion(id) : setRegion(null);
    setCity(null);
    setRegionList(false);
    setCitiesInRegionList(true);
  };

  const chooseCityInRegion = (id) => {
    if (cityInRegion != id) {
      setCityInRegion(id);
      setCitiesInRegionList(false);
    } else {
      setCityInRegion(null);
    }
  };

  const onChoosenRegion = () => {
    setRegion(null);
    setCitiesInRegionList(false);
  };

  const onChoosenCity = () => {
    setCityInRegion(null);
    setRegion(null)
    setCitiesInRegionList(false)
  }

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
        <div className="col-auto pe-1">
          <a className={style.link} onClick={whereToSearch}>
            Где искать
          </a>
        </div>
        <div className="col-auto">
          <div className="row">
            <div className="col-auto px-1">
              {region &&
                !cityInRegion &&
                regions.data
                  .filter(({ id }) => id == region)
                  .map(({ id, name }) => {
                    return (
                      <a
                        key={id}
                        className={region === id ? style.choosen : style.link}
                        onClick={() => {
                          onChoosenRegion(id);
                        }}
                      >
                        {name}
                      </a>
                    );
                  })}
              {cityInRegion &&
                citiesInRegion.data
                  .filter(({ id }) => id == cityInRegion)
                  .map(({ id, name }) => {
                    return (
                      <a
                        key={id}
                        className={
                          cityInRegion === id ? style.choosen : style.link
                        }
                        onClick={() => {
                          onChoosenCity();
                        }}
                      >
                        {name}
                      </a>
                    );
                  })}
            </div>
            {cities.data &&
              cities.data.map(({ id, name }) => {
                return (
                  <div className="col-auto px-1" key={id}>
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
          <a className={style.link} onClick={whereToSearch}>
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
            {regionList &&
              regions.data.map(({ id, name }) => {
                return (
                  <div className="col-6 my-2" key={id}>
                    <a
                      className={style.link}
                      onClick={() => {
                        chooseRegion(id);
                        // openCitiesInRegions();
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

      {citiesInRegionList && (
        <div className="row mb-3">
          <div className="row">
            <input
              type="text"
              className="form-control"
              id="exampleInputEmail1"
              placeholder="Найти регион, например Салават"
            />
          </div>
          <div className="row">
            <div className="col-auto">
              <a className={style.link} onClick={openAllRegions}>
                Все регионы
              </a>
              <span className="mx-2">{">"}</span>
              {regions.data
                .filter(({ id }) => id == region)
                .map(({ id, name }) => {
                  return (
                    <a
                    key={id}
                      className={
                        !cityInRegion && region === id
                          ? style.choosen__region
                          : style.link
                      }
                      // onClick={() => {
                      //   chooseRegion(id);
                      // }}
                    >
                      {name}
                    </a>
                  );
                })}
            </div>
          </div>
          <div className="row d-flex justify-content-between">
            {citiesInRegion.data.map(({ id, name }) => {
              return (
                <div className="col-6 my-2" key={id}>
                  <a
                    className={cityInRegion === id ? style.choosen : style.link}
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
      )}
    </>
  );
};

export default Cities;
