import { useEffect, useState } from "react";

const Check = ({ label, onCheckChange, name }) => {
  const [isChecked, setIsChecked] = useState(false);

  useEffect(() => {
    onCheckChange(name, isChecked);
  }, [isChecked]);

  const checkHandler = () => {
    setIsChecked((prev) => !prev);
  };

  return (
    <>
      <div className="col-auto">
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            name={name}
            className="form-check-input"
            id="exampleCheck1"
            checked={isChecked}
            onChange={() => checkHandler()}
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            {label}
          </label>
        </div>
      </div>
    </>
  );
};

export default Check;
