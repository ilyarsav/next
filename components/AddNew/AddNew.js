import Link from "next/link";

const AddNew = () => {
  return (
    <section className="add__new">
      <div className="row mt-5">
        <Link href="/">
          <a className="text-center fs-4 border-bottom border-secondary pb-5">
            Подать объявление
          </a>
        </Link>
      </div>
    </section>
  );
};

export default AddNew;
