import './contact.css'
import Headerr from "../../components/header/Headerr";
import Footerr from "../../components/footer/Footerr";

export default function Contacts(){
    return(
        <>
            <Headerr />
            <main>
                <div className="main_container">
                    <div className="div_description">
                        <h2>Вы можете связаться с нами</h2>
                        <p>Номер телефона аквапарка "Лимпопо": +99871 2913451<br/>
                        Электронная почта аквапарка "Лимпопо": info@limpopo-aquapark.com</p><br/>
                        <p>Мы в <a href='https://instagram.com/limpopo.uz/'>Instagram</a></p>
                        <p>Мы в <a href='https://facebook.com/LimpopoAqua'>Facebook</a></p>
                    </div>
                    <div className="div_container_map">
                        <h2>Расположение</h2>
                        <p>Наш адрес: ул. Талимарджан, 135</p>
                        <p>💡 Ориентир: парк им. Фурката, Электроаппарат</p><br/> 
                        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2998.652667365069!2d69.29801611212122!3d41.27289790296858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38aef5580fb56489%3A0x8b59a6cb9442fa4e!2z0JDQutCy0LDQv9Cw0YDQuiBMaW1wb3Bv!5e0!3m2!1sru!2s!4v1687982036834!5m2!1sru!2s" width="100%" height="500px" style={{border: "0"}} allowfullscreen="" loading="lazy" title='Google map' referrerpolicy="no-referrer-when-downgrade"></iframe>
                    </div>
                </div>
            </main>
            <Footerr />
        </>
    )
}
