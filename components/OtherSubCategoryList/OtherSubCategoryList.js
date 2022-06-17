import style from "./OtherSubCategoryList.module.css";
import useSWR from "swr";
import { useState } from "react";

const OtherSubCategoryList = () => {
  const [active, setActive] = useState(null);

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `http://localhost:3000/api/get-other-subcat-list`,
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
                className={style.active}
                // onClick={() => clickingListItem(id)}
              >
                {name}
              </a>
            </div>
          );
        })}
    </div>
  );
};

export default OtherSubCategoryList;
