import './review.css';
import Headerr from "../../components/header/Headerr";
import Footerr from "../../components/footer/Footerr";
import EmailForm from '../../components/emailSend/EmailForm';
import Review1 from './Inifinity_scroll/Review1';


export default function Review(){
    return(
        <>
            <Headerr />
                <main>
                    <div className="div_container_main">
                        <EmailForm />
                            <Review1 />
                    </div>
                </main>
            <Footerr />
        </>
    )
}