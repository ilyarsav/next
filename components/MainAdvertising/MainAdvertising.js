import Link from "next/link";

const MainAdvertising = () => {
  return (
    <div className="col-4">
      <div className="row">
        <Link href="/">
          <a className="mb-3 fs-4">PR-статьи</a>
        </Link>
      </div>
      <div className="row">
        <Link href="/">
          <a className="mb-2">
            7.3 литра на «сотню»: тяжёлый внедорожник EXEED VX с новым
            двигателем рвёт стереотипы
          </a>
        </Link>
      </div>
      <div className="row">
        <Link href="/">
          <a className="mb-2">
            EXEED выходит на казахстанский рынок. Чем удивит премиальный
            внедорожник VX из Китая
          </a>
        </Link>
      </div>
    </div>
  );
};

export default MainAdvertising ;
