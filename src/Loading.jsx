import React, { useState, useEffect } from "react";
import "./Loading.css";
import "./main.css";
import { Link, useNavigate } from "react-router-dom";

const Loading = () => {
  // Hook useState для хранения текущего значения процента загрузки
  const [percentage, setPercentage] = useState(0);

  // Hook useEffect используется для управления побочными эффектами
  useEffect(() => {
    const duration = 7 * 1000; // Длительность загрузки в миллисекундах (7 секунд)
    const interval = duration / 100; // Интервал между увеличением процента

    // Устанавливаем интервал, который увеличивает процент загрузки
    const intervalId = setInterval(() => {
      setPercentage((prev) => {
        if (prev < 100) {
          return prev + 1; // Увеличиваем процент на 1
        } else {
          clearInterval(intervalId); // Очищаем интервал, когда процент достигнет 100%
          return 100; // Возвращаем 100%, чтобы остановить увеличение
        }
      });
    }, interval);

    // Очистка интервала при размонтировании компонента
    return () => clearInterval(intervalId);
  }, []);

  const navigate = useNavigate();

  // Эмулируем завершение загрузки через 3 секунды


  // Функция для перенаправления на главную страницу
  const handleClick = () => {
    navigate("/home", { replace: true }); // Перенаправляем на главную страницу
  };

  return (
    <div className="main-wrapper">
      <div className="container">
        <div className="background-image">
          <div className="loading-page__content-wrapper">
            {/* Логотип страницы загрузки */}
            <img
              src={"/logotip.svg"}
              alt="logo"
              className="loading-page__logo"
            />
            <div className="loading-page__content-piece">
              <div className="outer-container">
                {/* Прогресс-бар, который увеличивается до 100% */}
                <div className="progress-container">
                  <div
                    className="progress-bar"
                    style={{ width: `${percentage}%` }}
                  >
                    <p className="progress-bar__percentage">{percentage}%</p>
                  </div>
                </div>
              </div>
              {/* Ссылка на домашнюю страницу */}
              <Link to={"/home"}>
                {percentage === 100 && (
                  <div onClick={() => handleClick()} className="play-button">
                    <div className="play-button__icon">
                      <img src="play.png" alt="" />
                    </div>
                    {/* Отображаем текст "PLAY", когда загрузка завершена (100%) */}
                    <div className="play-button__text">
                      <p>PLAY</p>
                    </div>
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
