import { useState } from "react";
import OtherSubCategoryList from "../OtherSubCategoryList/OtherSubCategoryList";
import SubCategoryForm from "../SubCategoryForm/SubCategoryForm";
import style from "./OtherSubCategoryBlock.module.css";
import useSWR from "swr";

const OtherSubCategoryBlock = () => {
  const [other, setOther] = useState(true)
  const [section, setSection] = useState(true);

  const chooseSection = (id) => {
    section === id ? setSection(null) : setSection(id);
  };

  const fetcher = (...args) => fetch(...args).then((res) => res.json());

  const sections = useSWR(
    "http://localhost:3000/api/get-sections-in-other-subcat-list",
    fetcher
  );

  if (sections.error) return <div>Failed to load</div>;
  if (!sections.data) return <div>Loading...</div>;

  return (
    <>
      <OtherSubCategoryList />
      {other && (
        <>
          <SubCategoryForm>
            <div className={`row ${style.subcat__block}`}>
              <div className="col-auto">
                <b>Разделы</b>
              </div>
              <div className="col">
                {sections.data &&
                  sections.data.map(({ id, name }) => {
                    return (
                      <a
                        key={id}
                        className={`m-3 ms-0 ${
                          section == id ? style.choosen : style.link
                        }`}
                        onClick={() => chooseSection(id)}
                      >
                        {name}
                      </a>
                    );
                  })}
              </div>
            </div>
          </SubCategoryForm>
        </>
      )}
    </>
  );
};

export default OtherSubCategoryBlock;
