import React from "react";
import Button from "../Button";
import "./index.css";

const Header = () => {
  const tg = window.Telegram.WebApp;
  const onClose = () => {
    tg.close();
  };
  return (
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{tg.initDataUnsafe?.user?.username}</span>
      <span className={"username"}>{tg.initDataUnsafe?.user?.first_name}</span>
      <span className={"username"}>{tg.initDataUnsafe?.user?.last_name}</span>
      <span className={"username"}>{tg.initDataUnsafe?.user?.id}</span>
      <span className={"username"}>
        {tg.initDataUnsafe?.user?.language_code}
      </span>
      <span className={"username"}>{tg.initDataUnsafe?.user?.is_premium}</span>
      <span className={"username"}>
        {window.Telegram.WebAppInitdataUnsafe?.user?.is_bot}
      </span>
    </div>
  );
};

export default Header;
