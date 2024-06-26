import './price.css';
import Headerr from "../../components/header/Headerr";
import Footerr from "../../components/footer/Footerr";

export default function Price() {
    return(
        <>
            <Headerr />
            <main>
                <div className="main_container">
                    <h1>График работы аквапарка Лимпопо:</h1><br/>
                    <p>
                        Понедельник - Пятница: с 10:00 до 20:00<br/>
                        Суббота - Воскресенье: с 09:00 до 21:00<br/>
                    </p>
                    <h1>Стоимость билетов</h1>
                    <ul>
                        <li>Дети до 6 лет включительно проходят бесплатно при наличии документа, подтверждающего возраст.</li>
                        <li>Дети до 13 лет включительно проходят только в сопровождении взрослых (от 18 лет).</li>
                        <li>Дети от 14 лет посещают аквапарк самостоятельно при предъявлении паспорта.</li>
                        <li>Превышение времени нахождения в аквапарке оплачивается отдельно (1 минута - 5 рублей с человека).</li>
                    </ul><br/>
                    <h1>Цены на вход в аквапарк в будние дни Радуга на 1 час:</h1>
                    <ul>
                        <li>Дети до 13 лет: 25000 сум.</li>
                        <li>Взрослые: 45000 сум.</li>
                        <li>Пенсионеры: 15000 сум.</li>
                    </ul>
                    <h1>Цены на вход в аквапарк в выходные дни Радуга на 1 час:</h1>
                    <ul>
                        <li>Дети до 13 лет: 35000 сум.</li>
                        <li>Взрослые: 60000 сум.</li>
                        <li>Пенсионеры: 20000 сум.</li>
                    </ul><br/>
                    <a href="/stock" className="a_stock">Акции</a> <br />
                </div>
                <p className="last_text">У нас также есть специальные акции и скидки.Вы можете получить подробную информацию об актуальных ценах и специальных предложениях на нашем сайте или по телефону нашего отдела продаж</p><br/>
                <p className="last_text">Пожалуйста, обратите внимание, что цены могут варьироваться в зависимости от даты и времени посещения.</p>
            </main>
            
            <Footerr />
        </>
    )
}