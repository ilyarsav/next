import Image from "next/image";
import kolesaLogo from "../../public/kolesa-logo.svg";
import style from "./Header.module.css";
import Link from "next/link";

const Header = ({ topCatList }) => {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center mb-4">
        <div className="col-2 p-0">
          <Image src={kolesaLogo} width={165} height={50}></Image>
        </div>
        <div className="col-7">
          {topCatList &&
            topCatList.map(({ name, id }) => (
              <Link href={`/cat/${id}`} key={id}>
                <a className="me-3">{name}</a>
              </Link>
            ))}
        </div>
        <div className="col-auto p-0">
          <button className={style.btn__advertisement}>
            Подать объявление
          </button>
        </div>
      </div>
      <div className="row"></div>
    </div>
  );
};

export default Header;
