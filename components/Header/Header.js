import Image from "next/image";
import kolesaLogo from "../../public/kolesa-logo.svg";
import style from "./Header.module.css";
import Link from "next/link";

const Header = () => {
  return (
    <div className="container">
      <div className="row justify-content-between align-items-center">
        <div className="col-2">
          <Image src={kolesaLogo} width={165} height={50}></Image>
        </div>
        <div className="col-8">
          <Link href="/cars">
            <a className="me-3">Машины</a>
          </Link>
          <Link href="/equipments">
            <a className="me-3">Запчасти</a>
          </Link>
          <Link href="/services">
            <a className="me-3">Ремонт и услуги</a>
          </Link>
          <Link href="/commercial">
            <a className="me-3">Коммерческие</a>
          </Link>
          <Link href="/other">
            <a className="me-3">Прочее</a>
          </Link>
        </div>
        <div className="col-auto">
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
