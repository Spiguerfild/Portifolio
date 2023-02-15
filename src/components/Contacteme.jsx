import TopSections from './TopSections';
import './Contacteme.css';

let txt1 = "{"
let txt2 = "}"
function Contactme() {
    return (
        <div id="contact-me">
            <TopSections title={"Contactme"} />
            <div className='container-contact'>
                <div className='chave'><h1>{txt1}</h1></div>
                <div className='center'>

                    <div className='infos'>
                        <h3>Whatsapp: </h3>
                        <a href='https://api.whatsapp.com/send/?phone=44984342957&text&type=phone_number&app_absent=0' target="_blank" className='content'>Send me a message</a>
                    </div>

                </div>
                <div className='chave'><h1>{txt2}</h1></div>
            </div>
        </div>
    )
}

export default Contactme;