import { useEffect, useState } from "react";

const PriceInputGroup = ({ onPriceInputChange }) => {
  const [inputFromValue, setInputFromValue] = useState("");
  const [inputToValue, setInputToValue] = useState("");

  useEffect(() => {
    onPriceInputChange(inputFromValue, inputToValue);
  }, [inputFromValue, inputToValue]);

  const onInputFromChange = (e) => {
    setInputFromValue((v) => (e.target.validity.valid ? e.target.value : v));
  };

  const onInputToChange = (e) => {
    setInputToValue((v) => (e.target.validity.valid ? e.target.value : v));
  };

  return (
    <>
      <div className="row mt-2 mb-3">
        <label htmlFor="from" className="px-0 pb-1">
         Цена
        </label>
        <div className="row p-0">
          <div className="input-group">
            <input
              id="from"
              name="from"
              type="text"
              pattern="[0-9]*"
              className="form-control"
              placeholder="от"
              value={inputFromValue}
              onChange={(e) => {
                onInputFromChange(e);
              }}
            />
            <input
              id="to"
              name="to"
              type="text"
              pattern="[0-9]*"
              className="form-control"
              placeholder="до"
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

export default PriceInputGroup;
