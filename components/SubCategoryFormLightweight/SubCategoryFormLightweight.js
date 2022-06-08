import style from "./SubCategoryFormLightweight.module.css";
import useSWR from "swr";
import { useState } from "react";

const SubCategoryFormLightWeight = () => {
  const [regionList, setRegionList] = useState(false);
  const [brandsList, setBrandsList] = useState(false);

  const openModal = () => {
    setRegionList((res) => !res);
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const cities = useSWR("http://localhost:3000/api/get-city-list", fetcher);
  const regions = useSWR("http://localhost:3000/api/get-region-list", fetcher);
  const brands = useSWR(
    "http://localhost:3000/api/get-car-brand-list",
    fetcher
  );

  if (cities.error || regions.error || brands.error)
    return <div>Failed to load</div>;
  if (!cities.data || !regions.data || !brands.data)
    return <div>Loading...</div>;

  return (
    <div className={`row ${style.subcat__block}`}>
      <form>
        <div className="row">
          <div className="col-md-8">
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
            <div className="row mb-3 mt-4">
              <div className="col-auto">
                <a className="" onClick={openModal}>
                  Марка
                </a>
              </div>
              {brands.data &&
                brands.data.slice(0, 5).map(({ id, name }) => {
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
            {brandsList && (
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
                  {brands.data &&
                    brands.data.map(({ id, name }) => {
                      return (
                        <div className="col-6 my-2" key={id}>
                          <a className="">{name}</a>
                        </div>
                      );
                    })}
                </div>
              </div>
            )}
            {/* <div className="row mb-3 mt-4">
              <div className="col-auto">
                <a className="" onClick={openModal}>
                  Марка
                </a>
              </div>
              {brand.data &&
                brand.data.map(({ id, name }) => {
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
            </div> */}
          </div>
          <div className="col-md-4"></div>
        </div>
      </form>
    </div>
  );
};
export default SubCategoryFormLightWeight;
