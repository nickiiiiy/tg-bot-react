import React, { useEffect } from "react";
import Button from "../Button";
import "./index.css";
import { useTelegram } from "../hooks/useTelegaram";

const Header = () => {
  const { tg, user, onClose } = useTelegram();

  // Получаем hash из initData
  const getHash = () => {
    const initData = tg.initData;
    if (initData) {
      const params = new URLSearchParams(initData);
      return params.get("hash");
    }
    return null;
  };

  const getAuth = () => {
    const initData = tg.initData;
    if (initData) {
      const params = new URLSearchParams(initData);
      return params.get("auth_date");
    }
    return null;
  };

  const auth_date = getAuth();
  const hash = getHash();

  return (
    <div className="header">
      <Button onClick={onClose}>Закрыть</Button>
      <span className={"username"}>{user?.username}</span>
      <span className={"username"}>{user?.first_name}</span>
      <span className={"username"}>{user?.last_name}</span>
      {/* <span className={"username"}>{user?.id}</span>
      <span className={"username"}>{user?.language_code}</span>
      <span className={"username"}>{user?.is_premium ? "Premium" : "Free"}</span>
      <span className={"username"}>{user?.is_bot ? "Bot" : "User"}</span>
      <span className={"username"}>Hash: {hash}</span>
      <span className={"username"}>Auth Date: {auth_date}</span> */}
      {user?.photo_url && <img src={user.photo_url} alt="User" />}
    </div>
  );
};

export default Header;
