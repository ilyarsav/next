import useSWR from "swr";
import { useState } from "react";
import style from "./CarsSubCategoryFormWaterTrans.module.css";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import Cities from "../Cities/Cities";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";

const SubCategoryFormWaterTrans = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [motoType, setMotoType] = useState(null);
  const [inputValue, setInputValue] = useState("");
  const [priceInputGroup, setPriceInputGroup] = useState(null);

  const checkHandler = () => {
    setIsChecked((prev) => !prev);
  };

  const chooseMotoType = (id) => {
    motoType != id ? setMotoType(id) : setMotoType(null);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const onPriceInputChange = (inputFromValue, inputToValue) => {
    setPriceInputGroup((state) => ({
      ...state,
      from: inputFromValue,
      to: inputToValue,
    }));
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const motoTypes = useSWR(
    "http://localhost:3000/api/get-car-brand-list",
    fetcher
  );

  if (motoTypes.error) return <div>Failed to load</div>;
  if (!motoTypes.data) return <div>Loading...</div>;

  return (
    <div className={`row ${style.subcat__block} p-3`}>
      <div className="col-8">
        <div className="row">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Что ищем?"
            value={inputValue}
            onChange={(e) => handleChange(e)}
          />
          <div id="emailHelp" className="form-text">
            Здесь пишут, что хотят. Даже номер телефона, если ищут своё
            объявление.
          </div>
        </div>

        <Cities />

        <div className="row">
          <div className="col-auto">
            <b>Тип</b>
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
              другой
            </a>
          </div>
        </div>

        <div className="row mt-3">
          <div className="mb-3 form-check">
            <input
              type="checkbox"
              className="form-check-input"
              id="exampleCheck1"
              checked={isChecked}
              onChange={checkHandler}
            />
            <label className="form-check-label" htmlFor="exampleCheck1">
              С фото
            </label>
          </div>
        </div>
      </div>

      <div className="col-4">
        <PriceInputGroup onPriceInputChange={onPriceInputChange} />
      </div>

      <SubCategoryButton />
    </div>
  );
};

export default SubCategoryFormWaterTrans;
