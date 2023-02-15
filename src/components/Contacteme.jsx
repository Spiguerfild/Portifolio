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
                    <h2 className='infos'><h3 className='content'></h3></h2>
                    <h2 className='infos'>Whatsapp<h3 className='content'>https://api.whatsapp.com/send/?phone=44984342957&text&type=phone_number&app_absent=0</h3></h2>

                </div>
                <div className='chave'><h1>{txt2}</h1></div>
            </div>
        </div>
    )
}

export default Contactme;