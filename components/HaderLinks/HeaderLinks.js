import Link from "next/link";

const HeaderLinks = ({ id, name }) => {

  return (
    <Link href={`/cat/${id}`}>
      <a className="me-2">{name}</a>
    </Link>
  );
};

export default HeaderLinks;
