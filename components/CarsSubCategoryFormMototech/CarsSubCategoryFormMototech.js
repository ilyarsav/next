import useSWR from "swr";
import { useState } from "react";
import style from "./CarsSubCategoryFormMototech.module.css";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import Cities from "../Cities/Cities";
import YearInputGroup from "../YearInputGroup/YearInputGroup";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";

const CarsSubCategoryFormMototech = () => {
  const [brandsList, setBrandsList] = useState(false);
  const [motoBrand, setMotoBrand] = useState(false);
  const [motoType, setMotoType] = useState(null);
  const [isChecked, setIsChecked] = useState(false);
  const [yearInputGroup, setYearInputGroup] = useState(null);
  const [priceInputGroup, setPriceInputGroup] = useState(null);

  const openBrands = () => {
    setBrandsList((res) => !res);
  };

  const chooseMotoType = (id) => {
    motoType != id ? setMotoType(id) : setMotoType(null);
  };

  const chooseMotoBrand = (id) => {
    motoBrand != id ? setMotoBrand(id) : setMotoBrand(null);
  };

  const checkHandler = () => {
    setIsChecked((prev) => !prev);
  };

  const onYearInputChange = (inputFromValue, inputToValue) => {
    setYearInputGroup((state) => ({
      ...state,
      from: inputFromValue,
      to: inputToValue,
    }));
  };

  const onPriceInputChange = (inputFromValue, inputToValue) => {
    setPriceInputGroup((state) => ({
      ...state,
      from: inputFromValue,
      to: inputToValue,
    }));
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const brands = useSWR(
    "http://localhost:3000/api/get-car-brand-list",
    fetcher
  );
  const motoTypes = useSWR(
    "http://localhost:3000/api/get-car-brand-list",
    fetcher
  );

  if (motoTypes.error || brands.error) return <div>Failed to load</div>;
  if (!motoTypes.data || !brands.data) return <div>Loading...</div>;

  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col-8">
        <Cities />

        <div className="row">
          <div className="col-auto">
            <b>??????</b>
          </div>
          {motoTypes.data &&
            motoTypes.data.slice(0, 5).map(({ id, name }) => {
              return (
                <div className="col-auto" key={id}>
                  <a
                    className={motoType == id ? style.choosen : style.link}
                    onClick={() => chooseMotoType(id)}
                  >
                    {name}
                  </a>
                </div>
              );
            })}
          <div className="col-auto">
            <a
              className={motoType == "another" ? style.choosen : style.link}
              onClick={() => chooseMotoType("another")}
            >
              ????????????
            </a>
          </div>
        </div>

        <div className="row mb-3 mt-4">
          <div className="col-auto">
            <a className={style.link} onClick={openBrands}>
              ??????????
            </a>
          </div>
          {brands.data &&
            brands.data.slice(0, 5).map(({ id, name }) => {
              return (
                <div className="col-auto" key={id}>
                  <a
                    className={motoBrand == id ? style.choosen : style.link}
                    onClick={() => chooseMotoBrand(id)}
                  >
                    {name}
                  </a>
                </div>
              );
            })}
          <div className="col-auto">
            <a className={style.link} onClick={openBrands}>
              ??????
            </a>
          </div>
        </div>
        {brandsList && (
          <div className="row mb-3">
            <div className="row d-flex justify-content-between">
              {brands.data &&
                brands.data.map(({ id, name }) => {
                  return (
                    <div className="col-3 my-2" key={id}>
                      <a
                        className={motoBrand == id ? style.choosen : style.link}
                        onClick={() => chooseMotoBrand(id)}
                      >
                        {name}
                      </a>
                    </div>
                  );
                })}
            </div>
          </div>
        )}

        <div className="row">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={isChecked}
              onChange={checkHandler}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              ?? ????????
            </label>
          </div>
        </div>
      </div>

      <div className="col-md-4">
        {/* <div className="row mt-3">
          ?????? ??????????????
          <div className="row p-0">
            <div class="input-group">
              <input
                type="text"
                aria-label="First name"
                class="form-control"
                placeholder="????"
              />
              <input
                type="text"
                aria-label="Last name"
                class="form-control"
                placeholder="????"
              />
            </div>
          </div>
        </div>
        <div className="row mt-3">
          ????????
          <div className="row p-0">
            <div class="input-group">
              <input
                type="text"
                aria-label="First name"
                class="form-control"
                placeholder="????"
              />
              <input
                type="text"
                aria-label="Last name"
                class="form-control"
                placeholder="????"
              />
            </div>
          </div>
        </div> */}
        <YearInputGroup onYearInputChange={onYearInputChange} />
        <PriceInputGroup onPriceInputChange={onPriceInputChange} />
      </div>

      <SubCategoryButton />
    </div>
  );
};

export default CarsSubCategoryFormMototech;
