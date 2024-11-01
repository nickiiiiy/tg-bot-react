import React from "react";
import Button from "../Button";
import "./index.css";

const Header = () => {
  const tg = window.Telegram.WebApp;

  const onClose = () => {
    tg.close();
  };

  // Получаем hash из initData
  const getHash = () => {
    const initData = tg.initData;
    if (initData) {
      const params = new URLSearchParams(initData);
      return params.get("hash");
    }
    return null;
  };

  const hash = getHash();

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
      <span className={"username"}>{tg.initDataUnsafe?.user?.is_bot}</span>
      <span className={"username"}>Hash: {hash}</span>
    </div>
  );
};

export default Header;
