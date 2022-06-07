import style from "./SubCategoryFormDilers.module.css";
import useSWR from "swr";

const SubCategoryFormDillers = () => {

  const fetcher = (...args) => fetch(...args).then((res) => res.json());
  const { data, error } = useSWR(
    "http://localhost:3000/api/get-city-list",
    fetcher
  );

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;
  return (
    <div className={`row ${style.subcat__block}`}>
      <form>
        <div className={`row mb-3 mt-4 ${style.subcat}`}>
          {data &&
            data.map(({ id, name }) => {
              return (
                <div className="col-auto" key={id}>
                  <a className=''>{name}</a>
                </div>
              );
            })}
        </div>
        <div className="row mb-3">
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
            placeholder="Что ищем?"
          />
          <div id="emailHelp" className="form-text">
            Здесь пишут, что хотят. Даже номер телефона, если ищут своё
            объявление.
          </div>
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" htmlFor="exampleCheck1">
            Искать в тексте объявлений
          </label>
        </div>
        <div className={`p-2 ${style.subcat__button}`}>
          <button type="submit" className="btn btn-primary">
            Показать
          </button>
        </div>
      </form>
    </div>
  );
};

export default SubCategoryFormDillers;
