import Link from "next/link"; 

const MainNews = () => {
  return (
    <div className="col-4">
      <div className="row">
        <Link href="/">
          <a className="mb-3 fs-4">Новости</a>
        </Link>
      </div>
      <div className="row">
        <Link href="/">
          <a className="mb-2">Развязку на Саина — Шаляпина в Алматы частично перекроют</a>
        </Link>
      </div>
      <div className="row">
        <Link href="/">
          <a className="mb-2">Газ в стране может резко подорожать</a>
        </Link>
      </div>
      <div className="row">
        <Link href="/">
          <a className="mb-2">Озвучены цены на Volkswagen I.D. Buzz</a>
        </Link>
      </div>
    </div>
  );
};
export default MainNews;
