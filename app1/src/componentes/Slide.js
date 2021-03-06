import React, { useEffect , useState} from "react";
import Bloco from "./blocoSupermercado.js";
import '../css/EstiloSlide.css';
import api from '../service/api_compro';

export default function Slid(props){
    const [supermercados,setSuper] = useState([]);
    
    useEffect(() => {
        api
            .get("/supermercado")
            .then((response) => {
            setSuper(response.data)
        })

            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });
    }, []);

    function ordernar(){
        supermercados.sort(function (a, b) {
            if (a.avaliacao > b.avaliacao) {
              return -1;
            }
            if (a.avaliacao < b.avaliacao) {
              return 1;
            }
            // a must be equal to b
            return 0;
          });
        return (supermercados.map((value) =>{
            if(value.nome==="base") return <></>
            return (<Bloco 
                key={value._id} 
                _id={value._id} 
                urlImg={value.urlImg}
                nome={value.nome} 
                cidade={value.cidade} 
                rua={value.rua} 
                bairro={value.bairro} 
                estado={value.estado}
                abertura={value.abertura}
                
                fechamento={value.fechamento}
        />)})) 
    }

    return (
        <div id="conjuntoSlide">
            <div className="titulo-slide">
                {props.titulo}
            </div>
            <div className="corpoSlide">
                { supermercados.length > 0 && props.titulo === "Supermercados com maior avaliação"?
                ordernar()
                    : 
                    supermercados.length > 0?
                    
                    supermercados.map((value) =>{
                        if(value.nome==="base") return <></>
                        return (<Bloco 
                            key={value._id} 
                            _id={value._id} 
                            urlImg={value.urlImg}
                            nome={value.nome} 
                            cidade={value.cidade} 
                            rua={value.rua} 
                            bairro={value.bairro} 
                            estado={value.estado}
                            abertura={value.abertura}
                            
                            fechamento={value.fechamento}
                    />)}) 
                        :<div className="carregando">
                        <div className="quadrado" style={{animationDelay : "-.1s"}}></div>
                        <div className="quadrado" style={{animationDelay : "-.2s"}}></div>
                        <div className="quadrado" style={{animationDelay : "-.4s"}}></div>
                    </div>}
            </div>
        </div>
    )
}