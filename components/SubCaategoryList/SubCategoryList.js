import style from "./SubCategoryList.module.css";
import useSWR from "swr";

const SubCategoryList = ({ showSubcatForm }) => {
  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    `http://localhost:3000/api/get-subcat-list1`,
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <div className={`row ${style.subcat}`}>
      {data &&
        data.map(({ id, name }) => {
          return (
            <div
              className="col-auto"
              onClick={() => showSubcatForm(id)}
              key={id}
            >
              <a className={style.link}>{name}</a>
            </div>
          );
        })}
    </div>
  );
};

export default SubCategoryList;
