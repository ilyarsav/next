import { useState } from "react";
import SubCategoryList from "../SubCaategoryList/SubCategoryList";
import SubCategoryFormDilers from "../SubCategoryFormDilers/SubCategoryFormDilers";
import SubCategoryFormLightweight from "../SubCategoryFormLightweight/SubCategoryFormLightweight";
import SubCategoryFormMototech from "../SubCategoryFormMototech/SubCategoryFormMototech";
import SubCategoryFormWaterTrans from "../SubCategoryFormWaterTrans/SubCategoryFormWaterTrans";
import style from "./SubCategoryBlock.module.css";

const SubCategoryBlock = () => {
  const [clickOnDilers, setClickOnDilers] = useState(false);
  const [clickOnMototech, setClickOnMototech] = useState(false);
  const [clickOnLightweight, setClickOnLightweight] = useState(false);
  const [clickOnWaterTrans, setClickOnWaterTrans] = useState(false);

  const showSubcatForm = (id) => {
    switch (id) {
      case 101:
        setClickOnDilers(false);
        setClickOnMototech(false);
        setClickOnWaterTrans(false);
        setClickOnLightweight((res) => !res);
        break;
      case 102:
        setClickOnMototech(false);
        setClickOnWaterTrans(false);
        setClickOnLightweight(false);
        setClickOnDilers((res) => !res);

        break;
      case 103:
        setClickOnDilers(false);
        setClickOnLightweight(false);
        setClickOnWaterTrans(false);
        setClickOnMototech((res) => !res);
        break;
      case 104:
        setClickOnDilers(false);
        setClickOnLightweight(false);
        setClickOnMototech(false);
        setClickOnWaterTrans((res) => !res);
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
        {clickOnLightweight && <SubCategoryFormLightweight />}
        {clickOnWaterTrans && <SubCategoryFormWaterTrans />}
      </div>
    </>
  );
};

export default SubCategoryBlock;
