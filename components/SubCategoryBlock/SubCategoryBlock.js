import { useState } from "react";
import SubCategoryList from "../SubCaategoryList/SubCategoryList";
import SubCategoryFormDilers from "../SubCategoryFormDilers/SubCategoryFormDilers";
import SubCategoryFormLightWeight from "../SubCategoryFormLightweight/SubCategoryFormLightWeight";
import SubCategoryFormMototech from "../SubCategoryFormMototech/SubCategoryFormMototech";
import style from "./SubCategoryBlock.module.css";

const SubCategoryBlock = () => {
  const [clickOnDilers, setClickOnDilers] = useState(false);
  const [clickOnMototech, setClickOnMototech] = useState(false);
  const [clickOnLightweight, setClickOnLightweight] = useState(false);

  const showSubcatForm = (id) => {
    switch (id) {
      case 101:
        setClickOnDilers(false);
        setClickOnMototech(false);
        setClickOnLightweight((res) => !res);
        break;
      case 102:
        setClickOnMototech(false);
        setClickOnLightweight(false);
        setClickOnDilers((res) => !res);

        break;
      case 103:
        setClickOnDilers(false);
        setClickOnLightweight(false);
        setClickOnMototech((res) => !res);
        break;
      case 104:
        setClickOnDilers(false);
        setClickOnLightweight(false);
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
        {clickOnLightweight && <SubCategoryFormLightWeight/>}
      </div>
    </>
  );
};

export default SubCategoryBlock;
