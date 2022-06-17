import { useState } from "react";
import Cities from "../Cities/Cities";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";
import style from "./SubCategoryForm.module.css";

const SubCategoryForm = ({ children }) => {
  const [inputValue, setInputValue] = useState("");
  const [isChecked, setIsChecked] = useState(false);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  const checkHandler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <div className={`row ${style.subcat__block} p-3`}>
      <div className="col-9">
        <form>
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

          <div className="row">{children}</div>

          <Cities />
        </form>
      </div>
      <SubCategoryButton />
    </div>
  );
};

export default SubCategoryForm;
