import { useState } from "react";
import SubCategoryForm from "../SubCategoryForm/SubCategoryForm";
import ServicesSubCategoryList from "../ServicesSubCategoryList/ServicesSubCategoryList";
import style from "./ServicesSubCategoryBlock.module.css";
import useSWR from "swr";
import SubCategoryButton from "../SubCategoryButton/SubCategoryButton";

const ServicesSubCategoryBlock = () => {
  const [showRepair, setShowRepair] = useState(false);
  const [showServices, setShowServices] = useState(false);
  const [showTuning, setShowTuning] = useState(false);
  const [showAnother, setShowAnother] = useState(false);
  const [repair, setRepair] = useState(null);
  const [services, setServices] = useState(null);
  const [tuning, setTuning] = useState(null);

  const chooseRepairType = (id) => {
    repair === id ? setRepair(null) : setRepair(id);
  };

  const chooseServiceType = (id) => {
    services === id ? setServices(null) : setServices(id);
  };

  const chooseTuningType = (id) => {
    tuning === id ? setTuning(null) : setTuning(id);
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const repairTypes = useSWR(
    "http://localhost:3000/api/get-repair-subcat-list",
    fetcher
  );

  const serviceTypes = useSWR(
    "http://localhost:3000/api/get-services-in-services-subcat-list",
    fetcher
  );

  const tuningTypes = useSWR(
    "http://localhost:3000/api/get-tuning-subcat-list",
    fetcher
  );

  if (repairTypes.error || serviceTypes.error || tuningTypes.error)
    return <div>Failed to load</div>;
  if (!repairTypes.data || !serviceTypes.data || !tuningTypes.data)
    return <div>Loading...</div>;

  const showSubcatForm = (id) => {
    switch (id) {
      case 101:
        setShowServices(false);
        setShowTuning(false);
        setShowAnother(false);
        setShowRepair((prev) => !prev);
        break;
      case 102:
        setShowTuning(false);
        setShowAnother(false);
        setShowRepair(false);
        setShowServices((prev) => !prev);

        break;
      case 103:
        setShowServices(false);
        setShowAnother(false);
        setShowRepair(false);
        setShowTuning((prev) => !prev);
        break;
      case 104:
        setShowServices(false);
        setShowTuning(false);
        setShowRepair(false);
        setShowAnother((prev) => !prev);
        break;
      default:
        null;
        break;
    }
  };

  return (
    <>
      <ServicesSubCategoryList showSubcatForm={showSubcatForm} />
      {showRepair && (
        <SubCategoryForm>
          <div className="row">
            <div className="col-auto">
              <b>Тип ремонта</b>
            </div>
            <div className="col">
              {repairTypes.data &&
                repairTypes.data.map(({ id, name }) => {
                  return (
                    <a
                      key={id}
                      className={`m-3 ms-0 ${
                        repair == id ? style.choosen : style.link
                      }`}
                      onClick={() => chooseRepairType(id)}
                    >
                      {name}
                    </a>
                  );
                })}
            </div>
          </div>
        </SubCategoryForm>
      )}

      {showServices && (
        <SubCategoryForm>
          <div className="row">
            <div className="col-auto">
              <b>Тип услуги</b>
            </div>
            <div className="col">
              {serviceTypes.data &&
                serviceTypes.data.map(({ id, name }) => {
                  return (
                    <a
                      key={id}
                      className={`m-3 ms-0 ${
                        services == id ? style.choosen : style.link
                      }`}
                      onClick={() => chooseServiceType(id)}
                    >
                      {name}
                    </a>
                  );
                })}
            </div>
          </div>
        </SubCategoryForm>
      )}

      {showTuning && (
        <SubCategoryForm>
          <div className="row">
            <div className="col-auto">
              <b>Тип тюнинга</b>
            </div>
            <div className="col">
              {tuningTypes.data &&
                tuningTypes.data.map(({ id, name }) => {
                  return (
                    <a
                      key={id}
                      className={`m-3 ms-0 ${
                        services == id ? style.choosen : style.link
                      }`}
                      onClick={() => chooseTuningType(id)}
                    >
                      {name}
                    </a>
                  );
                })}
            </div>
          </div>
        </SubCategoryForm>
      )}

      {showAnother && <SubCategoryForm />}
    </>
  );
};

export default ServicesSubCategoryBlock;
