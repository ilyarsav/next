import style from "./ServicesSubCategoryList.module.css";
import useSWR from "swr";
import { useState } from "react";

const ServicesSubCategoryList = ({ showSubcatForm }) => {
  const [active, setActive] = useState(null);

  const clickingListItem = (id) => {
    showSubcatForm(id);

    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `http://localhost:3000/api/get-services-subcat-list`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={`row ${style.subcat}`}>
      {data &&
        data.map(({ id, name }) => {
          return (
            <div className="col-auto" key={id}>
              <a
                className={active === id ? style.active : style.link}
                onClick={() => clickingListItem(id)}
              >
                {name}
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default ServicesSubCategoryList;
