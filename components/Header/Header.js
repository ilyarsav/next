import Link from "next/link";
import Image from "next/image";
import kolesaLogo from "../../public/kolesa-logo.svg";
import style from "./Header.module.css";
import HeaderLinks from "../HaderLinks/HeaderLinks";

const Header = ({ topCatList }) => {
  return (
    <div className="container">
      <div className="row justify-content-space-evenly align-items-center mb-4">
        <div className="col-2">
          <Image src={kolesaLogo} width={165} height={50}></Image>
        </div>
        <div className="col-7">
          {topCatList &&
            topCatList.map(({name, id}) => <HeaderLinks id={id} name={name} key={id}/>)}
        </div>
        <div className="col-3">
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
