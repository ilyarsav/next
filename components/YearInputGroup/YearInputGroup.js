import { useEffect, useState } from "react";

const YearInputGroup = ({ onYearInputChange }) => {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");

  useEffect(() => {
    onYearInputChange(inputFromValue, inputToValue);
  }, [inputFromValue, inputToValue]);

  const onInputFromChange = (e) => {
    setInputFromValue(e.target.value);
  };

  const onInputToChange = (e) => {
    setInputToValue(e.target.value);
  };

  return (
    <>
      <div className="row mt-2 mb-3">
        <label htmlFor="from" className="px-0 pb-1">
          Год выпуска
        </label>
        <div className="row p-0">
          <div className="input-group">
            <input
              id="from"
              name="from"
              type="number"
              className="form-control"
              placeholder="от"
              min="1900"
              max="2022"
              value={inputFromValue}
              onChange={(e) => {
                onInputFromChange(e);
              }}
            />
            <input
              id="to"
              name="to"
              type="number"
              className="form-control"
              placeholder="до"
              min="1900"
              max="2022"
              value={inputToValue}
              onChange={(e) => {
                onInputToChange(e);
              }}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default YearInputGroup;
