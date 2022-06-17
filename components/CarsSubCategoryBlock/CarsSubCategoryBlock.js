import { useState } from "react";
import CarsSubCategoryList from "../CarsSubCategoryList/CarsSubCategoryList";
import CarsSubCategoryFormDilers from "../CarsSubCategoryFormDilers/CarsSubCategoryFormDilers";
import CarsSubCategoryFormLightweight from "../CarsSubCategoryFormLightweight/CarsSubCategoryFormLightweight";
import CarsSubCategoryFormMototech from "../CarsSubCategoryFormMototech/CarsSubCategoryFormMototech";
import CarsSubCategoryFormWaterTrans from "../CarsSubCategoryFormWaterTrans/CarsSubCategoryFormWaterTrans";
import style from "./CarsSubCategoryBlock.module.css";

const CarsSubCategoryBlock = () => {
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
      <CarsSubCategoryList showSubcatForm={showSubcatForm} />
      {clickOnDilers && <CarsSubCategoryFormDilers />}
      {clickOnMototech && <CarsSubCategoryFormMototech />}
      {clickOnLightweight && <CarsSubCategoryFormLightweight />}
      {clickOnWaterTrans && <CarsSubCategoryFormWaterTrans />}
    </>
  );
};

export default CarsSubCategoryBlock;
