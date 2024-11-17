import { useEffect, useState } from "react";
import { useTelegram } from "../hooks/useTelegram";
import "./index.css";

const Form = () => {
  const [country, setCountry] = useState("");
  const [street, setStreet] = useState("");
  const [subject, setSubject] = useState("");

  const { tg } = useTelegram();

  useEffect(() => {
    tg.MainButton.setParams({
      text: "Отправить данные",
    });

    // Показываем BackButton
    tg.BackButton.show();

    // Добавляем обработчик нажатия BackButton
    const handleBackButton = () => {
      console.log("BackButton clicked");
      // Например, можно сделать навигацию назад
      window.history.back();
    };

    tg.BackButton.onClick(handleBackButton);

    return () => {
      // Убираем обработчик и скрываем BackButton при размонтировании
      tg.BackButton.offClick(handleBackButton);
      tg.BackButton.hide();
    };
  }, [tg]);

  useEffect(() => {
    if (!country || !street || !subject) {
      tg.MainButton.hide();
    }
    tg.MainButton.show();
  }, [country, street, subject]);

  const onChangeCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChangeStreet = (e) => {
    setStreet(e.target.value);
  };

  const onChangeSubject = (e) => {
    setSubject(e.target.value);
  };

  return (
    <div className={"form"}>
      <h3>Введите ваши данные</h3>
      <input
        className={"input"}
        type="text"
        placeholder="Страна"
        value={country}
        onChange={onChangeCountry}
      />
      <input
        className={"input"}
        type="text"
        placeholder="Улица"
        value={street}
        onChange={onChangeStreet}
      />
      <select className={"select"} value={subject} onChange={onChangeSubject}>
        <option value={"physical"}>Физ.лицо</option>
        <option value={"legal"}>Юр.лицо</option>
      </select>
    </div>
  );
};

export default Form;
