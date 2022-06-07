import Link from "next/link";

const MainArticles = () => {
  return (
    <div className="col-4">
      <div className="row">
        <Link href="/">
          <a className="mb-3 fs-4">Статьи</a>
        </Link>
      </div>
      <div className="row">
        <Link href="/">
          <a className="mb-2">Канадские «буханки» с рулём в бардачке</a>
        </Link>
      </div>
      <div className="row">
        <Link href="/">
          <a className="mb-2">
            Пять советов, как и чем заправить автокондиционер и избежать развода
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/">
          <a className="mb-2">
            Неизвестные автобусы Алматы: красный, синий и белый в голубую
            полосочку
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MainArticles;
