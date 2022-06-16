import style from "./SubCategoryFormLightweight.module.css";
import useSWR from "swr";
import { useState } from "react";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import Cities from "../Cities/Cities";
import Check from "../Check/Check";
import YearInputGroup from "../YearInputGroup/YearInputGroup";
import PriceInputGroup from "../PriceInputGroup/PriceInputGroup";

const SubCategoryFormLightweight = () => {
  const [brandsList, setBrandsList] = useState(false);
  const [modelsList, setModelsList] = useState(false);
  const [showModels, setShowModels] = useState(false);
  const [brand, setBrand] = useState(null);
  const [model, setModel] = useState(null);
  const [selectedOption, setSelectedOption] = useState("All");
  const [checkedItems, setCheckedItems] = useState({});
  const [yearInputGroup, setYearInputGroup] = useState(null);
  const [priceInputGroup, setPriceInputGroup] = useState(null);

  const checkbox = [
    { label: "С фото", name: "withPhoto" },
    { label: "Растаможен", name: "rastamozhen" },
    { label: "Аварийная/Не на ходу", name: "emergency" },
  ];

  const openBrands = () => {
    setBrandsList((res) => !res);
  };

  const openModels = () => {
    if (showModels) {
      setModelsList((res) => !res);
    }
  };

  const openShowModels = (id) => {
    chooseBrand(id);
    setShowModels((res) => !res);
  };

  const chooseBrand = (id) => {
    if (brand != id) {
      setBrand(id);
    } else {
      setBrand(null);
      setModel(null);
    }
    // brand != id ? setBrand(id) : setBrand(null);
  };

  const chooseModel = (id) => {
    model != id ? setModel(id) : setModel(null);
  };

  const changeOption = (e) => {
    setSelectedOption(e.target.value);
  };

  const onCheckChange = (name, isChecked) => {
    setCheckedItems((state) => ({
      ...state,
      [name]: isChecked,
    }));
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

  // const onPriceInputChange = (inputFromValue, inputToValue) => {
  //   setPriceInputGroup((state) => ({
  //     ...state,
  //     from: inputFromValue,
  //     to: inputToValue,
  //   }));
  // };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const brands = useSWR(
    "http://localhost:3000/api/get-car-brand-list",
    fetcher
  );
  const models = useSWR(
    "http://localhost:3000/api/get-toyota-model-list",
    fetcher
  );

  if (brands.error || models.error) return <div>Failed to load</div>;
  if (!brands.data | !models.data) return <div>Loading...</div>;

  return (
    <form>
      <div className={`row ${style.subcat__block}`}>
        <div className="col-md-8">
          <Cities />

          <div className="row mb-3 mt-4">
            <div className="col-auto">
              <a className={style.link} onClick={openBrands}>
                Марка
              </a>
            </div>
            {brands.data &&
              brands.data.slice(0, 5).map(({ id, name }) => {
                return (
                  <div className="col-auto" key={id}>
                    <a
                      className={brand == id ? style.choosen : style.link}
                      onClick={() => openShowModels(id)}
                    >
                      {name}
                    </a>
                  </div>
                );
              })}
            <div className="col-auto">
              <a className={style.link} onClick={openBrands}>
                ещё
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
                          className={brand == id ? style.choosen : style.link}
                          onClick={() => openShowModels(id)}
                        >
                          {name}
                        </a>
                      </div>
                    );
                  })}
              </div>
            </div>
          )}

          <div className="row mb-3 mt-4">
            <div className="col-auto">
              <a className={style.link} onClick={openModels}>
                Модель
              </a>
            </div>
            {models.data &&
              showModels &&
              models.data.slice(0, 5).map(({ id, name }) => {
                return (
                  <div className="col-auto" key={id}>
                    <a
                      className={model == id ? style.choosen : style.link}
                      onClick={() => chooseModel(id)}
                    >
                      {name}
                    </a>
                  </div>
                );
              })}
            {showModels && (
              <div className="col-auto">
                <a className={style.link} onClick={openModels}>
                  ещё
                </a>
              </div>
            )}
          </div>
          {modelsList && showModels && (
            <div className="row mb-3">
              <div className="row d-flex justify-content-between">
                {models.data &&
                  models.data.map(({ id, name }) => {
                    return (
                      <div className="col-3 my-2" key={id}>
                        <a
                          className={model == id ? style.choosen : style.link}
                          onClick={() => chooseModel(id)}
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
            <div className={style.radio}>
              <input
                type="radio"
                id="radioAll"
                name="option"
                value="All"
                checked={selectedOption === "All"}
                label="Все"
                onChange={(e) => changeOption(e)}
              />
              <input
                label="Новая"
                type="radio"
                id="radioNew"
                name="option"
                value="New"
                checked={selectedOption === "New"}
                onChange={(e) => changeOption(e)}
              />
              <input
                label="С пробегом"
                type="radio"
                id="radioNotNew"
                name="option"
                value="NotNew"
                checked={selectedOption === "NotNew"}
                onChange={(e) => changeOption(e)}
              />
            </div>
          </div>

          <div className="row mt-3">
            {checkbox.map(({ label, name }, index) => (
              <Check
                label={label}
                name={name}
                onCheckChange={onCheckChange}
                key={index}
              />
            ))}
          </div>
        </div>

        <div className="col-md-4">
          <YearInputGroup onYearInputChange={onYearInputChange} />
          <PriceInputGroup onPriceInputChange={onPriceInputChange} />
        </div>
{/* 
        <div className="row mt-3">
          <a className={style.link}>Расширенный поиск</a>
        </div> */}

        <SubCategoryButton />
      </div>
    </form>
  );
};
export default SubCategoryFormLightweight;
