import '../css/contato.css';
import Integrantes from '../componentes/integrante.js';
import Yulian from '../img/integrantes/Yulian.jpg'
import Marcelo from '../img/integrantes/Marcelinho.jpg'
import Nat from '../img/integrantes/IMG_1788.jpg'
import Thaissa from '../img/integrantes/Thaissa.jpg'
import Renato from '../img/integrantes/Renato.jpg'

export default function Contato (){
    document.title = "Contato"; 
    return (
        <>
            <div id="contato">
                <Integrantes nome="Marcelo Augusto de Olivera" img={Marcelo} email="marcelinhooliveria2090" cargo="ProgramadorFront-End" numero="12 99174-7752"/>
                <Integrantes nome="Yulian Santiago Almanza" img={Yulian} email="knoob0733" cargo="Programador Back-End" numero="12 99171-2418"/>
                <Integrantes nome="Natiely" img={Nat} email="natielyandrade30" cargo="Diretora" numero="12 99168-2912"/>
                <Integrantes nome="Thaissa" img={Thaissa} email="ThaisaSenai" cargo="Marketing" numero="12 99139-9087"/>
                <Integrantes nome="Renato" img={Renato} email="renatoribeiro.256991" cargo="Marketing" numero="12 99112-9009"/>
            </div>
        </>
    )
}