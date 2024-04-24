import React from "react";
import "./headerr.css";



export default function Headerr() {
    return (
        <>
            <header>
                <div className="div_head_container">
                    <div className="div_log_container">
                        <h1>Аквапарк "Лимпопо"</h1>
                    </div>
                    <div className="div_container_menu">
                        <div className="div_item_menu"><a href="/">Главная</a></div>
                        <div className="div_item_menu"><a href="/stock">Акции</a></div>
                        <div className="div_item_menu"><a href="/cafe">Кафе и бар</a></div>
                        <div className="div_item_menu"><a href="/contacts">Контакты</a></div>
                        <div className="div_item_menu"><a href="/price">Цены</a></div>
                        <div className="div_item_menu"><a href="/rules">Правила посещения</a></div>
                        <div className="div_item_menu"><a href="/news">Новости</a></div>
                        <div className="div_item_menu"><a href="/review">Отзывы</a></div>
                    </div>
                </div>
            </header>
        </>
    );
}
