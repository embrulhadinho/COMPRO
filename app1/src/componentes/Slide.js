import React, { useEffect , useState} from "react";
import Bloco from "./blocoSupermercado.js";
import '../css/EstiloSlide.css';
import api from '../service/api_compro'
export default function Slid(props){
    const [supermercados,setSuper] = useState([]);
    useEffect(() => {
        api
          .get("/supermercado")
          .then((response) => {
            setSuper(response.data)
            console.log(supermercados);})

          .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
          });
      }, []);

    

    return (
        <div id="conjuntoSlide">
            <div className="titulo-slide">
                {props.titulo}  
            </div>
            <div className="corpoSlide">
                {supermercados.map((value) =>{
                    console.log("oi")
                    return (<Bloco 
                        _id={value._id} 
                        urlImg={value.urlImg}
                        nome={value.nome} 
                        cidade={value.cidade} 
                        rua={value.rua} 
                        bairro={value.bairro} 
                        estado={value.estado}
                    />)
                   
                }
            )}
            </div>
        </div>
    )
}