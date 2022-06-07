import { useState } from "react";
import SubCategoryList from "../SubCaategoryList/SubCategoryList";
import SubCategoryFormDilers from "../SubCategoryFormDilers/SubCategoryFormDilers";
import SubCategoryFormMototech from "../SubCategoryFormMototech/SubCategoryFormMototech";
import style from "./SubCategoryBlock.module.css";

const SubCategoryBlock = () => {
  const [clickOnDilers, setClickOnDilers] = useState(false);
  const [clickOnMototech, setClickOnMototech] = useState(false);

  const showSubcatForm = (id) => {
    switch (id) {
      case 102:
        setClickOnMototech(false);
        setClickOnDilers((res) => !res);
        break;
      case 103:
        setClickOnDilers(false);
        setClickOnMototech((res) => !res);
        break;
      default:
        null;
        break;
    }

  };

  return (
    <>
      <div className="row">
        <SubCategoryList showSubcatForm={showSubcatForm} />
        {clickOnDilers && <SubCategoryFormDilers />}
        {clickOnMototech && <SubCategoryFormMototech />}
      </div>
    </>
  );
};

export default SubCategoryBlock;
