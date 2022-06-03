import style from './SubCategoryList.module.css'

const SubCategoryList = ({ subcatList }) => {
  
  return (
    <div className={`row ${style.subcat__block}`}>
      <div className="col">
        {subcatList &&
          subcatList.map(({ id, name }) => {
            return (
              <a className="me-2" key={id}>
                {name}
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default SubCategoryList;
