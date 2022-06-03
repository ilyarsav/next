
import SubCategoryList from "../../components/SubCategoryList/SubCategoryList";

export async function getServerSideProps({params}) {

  try {
    const res = await fetch(`http://localhost:3000/api/get-subcat-list`);
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
        <div className="row">
          <SubCategoryList subcatList={subcatList}/>
          {/* background: #fae8bb; */}
        </div>
      </div>
    </>
  );
};

export default CategoryItem;
