import './stock.css'
import Headerr from "../../components/header/Headerr";
import Footerr from "../../components/footer/Footerr";

export default function Stock(){
    return(
        <>
            <Headerr />
            <main>
                <h1 className="h1_text">Горячие Акции!</h1>
                <div className="container_all">
                    <div className="container_item">
                        <div className="item_image_11">

                        </div>
                        <div className="item_text">
                            <h1 className="h1_text">Женский день</h1>
                            <p>Очередной раз хотим вас порадовать замечательной новостью. <br/>
                                С 20 июня у нас в Limpopo будет действовать бонусная система скидок.<br/>
                                Купите билет "на весь день" и предъявите флаер, в котором на кассе будут осуществлять пометку вашего посещения.<br/>
                                Посетите нас 5 раз, купив билет "на весь день", и 6 посещение будет бесплатным.</p>
                            <a href="/stock">Ссылка для скачивания флаера</a>
                        </div>
                    </div>
                    <br/>
                    <div className="container_item">
                        <div className="item_text">
                            <h1 className="h1_text">День Именинника</h1>
                            <p>Именинник и два его гостя, в день рождения, 3 дня до и 3 дня после, посещают аквапарк с 50% скидкой!<br/>
                                Действует в любые дни, без возрастных ограничений.<br/>
                                В случае, если день рождения выпадает на школьные каникулы, воспользоваться акцией можно сразу после окончания каникул, в течение 3 будних дней.<br/>
                                Необходимо предъявлять подтверждающий документ!</p><br/>
                        </div>
                        <div className="item_image_21">

                        </div>
                    </div>
                    <br/>
                    <div className="container_item">
                        <div className="item_image_31"></div>
                        <div className="item_text">
                            <h1 className="h1_text">Семейный день</h1>
                            <p>Месяц июнь будет объявлен семейным<br/>
                                В этот месяц 30% скидка на 3-х часовое посещение!<br/>
                                В любой день при предъявлении удостоверения или справки многодетной семьи. 1 взрослый и до 2 детей в возрасте до 14 лет посещают аквапарк с 30% скидкой!</p><br/>
                        </div>
                    </div>
                    <br/><br/>
                </div>
            </main>
            <Footerr />
        </>
    )
}