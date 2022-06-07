import Link from "next/link";

const Footer = () => {
  return (
    <div className="container">
      <div className="row border-top my-4 pt-3 ">
        <div className="col-3">
          <div className="row mb-2">
            <span>© 2006—2022 ТОО «Колёса»</span>
          </div>
          <div className="row mb-2">
            <Link href="/">
              <a>Пользовательское соглашение</a>
            </Link>
          </div>
          <div className="row mb-2">
            <Link href="/">
              <a>Правила размещения объявлений</a>
            </Link>
          </div>
        </div>
        <div className="col-3">
          <div className="row mb-2">
            <Link href="/">
              <a>О сайте, газете</a>
            </Link>
          </div>
          <div className="row mb-2">
            <Link href="/">
              <a>Написать в службу заботы</a>
            </Link>
          </div>
          <div className="row mb-2">
            <Link href="/">
              <a>Работа в «Колёса Крыша Маркет»</a>
            </Link>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <span>Следите за нашими новостями</span>
          </div>
          <div className="row">
            <div className="col-1">
            <Link href="/">
              <a>FB</a>
            </Link>
            </div>
            <div className="col-1">
            <Link href="/">
              <a>YT</a>
            </Link>
            </div>
            <div className="col-1">
            <Link href="/">
              <a>Inst</a>
            </Link>
            </div>
            <div className="col-1">
            <Link href="/">
              <a>Vk</a>
            </Link>
            </div>
            <div className="col-1">
            <Link href="/">
              <a>TG</a>
            </Link>
            </div>
          </div>
        </div>
        <div className="col-3">
          <div className="row">
            <div className="col-6">
            <Link href="/">
              <a>Мобильные приложения</a>
            </Link>
            </div>
            <div className="col-6">
            <Link href="/">
              <a>Мобильная версия сайта</a>
            </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
