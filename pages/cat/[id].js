
import SubCategoryList from "../../components/SubCategoryList/SubCategoryList";

export async function getServerSideProps() {
  try {
    const res = await fetch("http://localhost:3000/api/get-subcat-list");
    const body = await res.json();
    return {
      props: {
        subcatList: body,
      },
    };
  } catch (error) {
    console.log("error");
  }
}

const CategoryItem = ({ subcatList }) => {
  return (
    <>
      <div className="container">

          <SubCategoryList subcatList={subcatList}/>

      </div>
    </>
  );
};

export default CategoryItem;
