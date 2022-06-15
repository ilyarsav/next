import style from "./SubCategoryFormDilers.module.css";
import useSWR from "swr";
import { useState } from "react";
import Cities from "../Cities/Cities";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";

const SubCategoryFormDillers = () => {
  const [isChecked, setIsChecked] = useState(false);
  const [inputValue, setInputValue] = useState("");

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  
  const checkHandler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={`row ${style.subcat__block}`}>
      <form>
        <Cities />
        
        <div className="row mb-3">
          <input
            type="text"
            className="form-control"
            id="exampleInputEmail1"
            placeholder="Что ищем?"
            value={inputValue}
            onChange={handleChange}
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
            checked={isChecked}
            onChange={checkHandler}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Искать в тексте объявлений
          </label>
        </div>

        <SubCategoryButton />
      </form>
    </div>
  );
};

export default SubCategoryFormDillers;
