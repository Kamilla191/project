import './news.css';
import Headerr from "../../components/header/Headerr";
import Footerr from "../../components/footer/Footerr";

export default function News() {
    return(
        <>
            <Headerr />
            <main>
                <h1 className="h1_text">Новости</h1>
                <div className="container_all">
                    <div className="container_item">
                        <div className="item_image_1">

                        </div>
                        <div className="item_text">
                            <p>Аквапарк "Лимпопо" открыл свои двери для посетителей после капитальной реконструкции.<br/>
                                Теперь здесь расположены новейшие горки и аттракционы для детей и взрослых.</p><br/>
                        </div>
                    </div>

                    <div className="container_item">
                        <div className="item_text"><br/>
                            <p>Посетители нашего аквапарка смогут насладиться новым бассейном с искусственными волнами.<br/>
                                Этот аттракцион будет доступен только для опытных пловцов.</p><br/>
                        </div>
                        <div className="item_image_12">

                        </div>
                    </div>

                    <div className="container_item">
                        <div className="item_image_13"></div>
                        <div className="item_text"><br/>
                            <p>В аквапарке "Лимпопо" проводится акция скидок на билеты для детей до 10 лет.
                                Кроме того, каждый четверг здесь проходят вечеринки с фейерверками и диджеями, что делает пребывание в аквапарке еще более веселым и запоминающим.</p><br/>
                        </div>
                    </div>

                </div>
            </main>
            <Footerr />
        </>
    )
}