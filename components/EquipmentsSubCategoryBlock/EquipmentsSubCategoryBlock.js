import { useState } from "react";
import EquipmentsSubCategoryList from "../EquipmentsSubCategoryList/EquipmentsSubCategoryList";
import style from "./EquipmentsSubCategoryBlock.module.css";

const EquipmentsSubCategoryBlock = () => {
  // const [clickOnDilers, setClickOnDilers] = useState(false);
  // const [clickOnMototech, setClickOnMototech] = useState(false);
  // const [clickOnLightweight, setClickOnLightweight] = useState(false);
  // const [clickOnWaterTrans, setClickOnWaterTrans] = useState(false);

  // const showSubcatForm = (id) => {
  //   switch (id) {
  //     case 101:
  //       setClickOnDilers(false);
  //       setClickOnMototech(false);
  //       setClickOnWaterTrans(false);
  //       setClickOnLightweight((res) => !res);
  //       break;
  //     case 102:
  //       setClickOnMototech(false);
  //       setClickOnWaterTrans(false);
  //       setClickOnLightweight(false);
  //       setClickOnDilers((res) => !res);

  //       break;
  //     case 103:
  //       setClickOnDilers(false);
  //       setClickOnLightweight(false);
  //       setClickOnWaterTrans(false);
  //       setClickOnMototech((res) => !res);
  //       break;
  //     case 104:
  //       setClickOnDilers(false);
  //       setClickOnLightweight(false);
  //       setClickOnMototech(false);
  //       setClickOnWaterTrans((res) => !res);
  //       break;
  //     default:
  //       null;
  //       break;
  //   }
  // };

  return (
    <>
      <EquipmentsSubCategoryList />
      {/* {clickOnDilers && <CarsSubCategoryFormDilers />}
      {clickOnMototech && <CarsSubCategoryFormMototech />}
      {clickOnLightweight && <CarsSubCategoryFormLightweight />}
      {clickOnWaterTrans && <CarsSubCategoryFormWaterTrans />} */}
    </>
  );
};

export default EquipmentsSubCategoryBlock;
