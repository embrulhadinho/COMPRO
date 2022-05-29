import React, { useEffect, useState} from "react";
import { useParams } from "react-router-dom";
import api from "../service/api_compro";
import '../css/variaveis.css';
import '../css/produtos.css';
import SlideProduto from '../componentes/SlideProduto';
import Filtro from '../componentes/filtro';

export default function ProdutosClasse(props) {
    props.AlterarTela(window.location.pathname);
    const { classe } = useParams()
    const [produtos,setProd] = useState(null);
    
    useEffect(() => {
        
        api
        .get(`produto/${classe}`)
        .then((response) => {
            setProd(response.data);
        })
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err);
            });        
    }, []);

    return(
        <>
            <center><button className="filtro"
                onClick={()=> {
                    var tiposGrid = document.getElementsByClassName('tipos-produtos')[0];
                    tiposGrid.classList.toggle("aberto");
                    
                }}><p>Filtro</p></button></center>
            <div className="tipos-produtos aberto">
                <Filtro />
            </div>

            {  produtos?
                <>
                    <SlideProduto titulo="Produtos mais procurados" indice={0} Many={true} array_prod = {produtos}/>
                    <SlideProduto titulo="Mais Baratos" indice={1} Many={true} array_prod = {produtos}/>
                </>
                : <div className="carregando">
                    <div className="quadrado" style={{animationDelay : "-.1s"}}></div>
                    <div className="quadrado" style={{animationDelay : "-.2s"}}></div>
                    <div className="quadrado" style={{animationDelay : "-.4s"}}></div>
                </div>
            }

            <div className="supermercados-all">
                <button><p>Todos os Produtos</p></button> 
            </div>

        </>
    )
}