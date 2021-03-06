import React, { useEffect, useState } from 'react';
import '../css/variaveis.css';
import '../css/produtos.css';
import SlideProduto from '../componentes/SlideProduto';
import api from '../service/api_compro';
import Filtro from '../componentes/filtro';

export default function Produtos(props) {
    props.AlterarTela(window.location.pathname);
    const [produtos,setProd] = useState(null);
    const [produtosF,setProdF] = useState(null);
    
    document.title = "Produtos";

    
    useEffect(() => {
        api
        .get('/supermercado/produto/629125e146583b24293df781')
        .then((response) => {
            setProd(response.data);
            setProdF(response.data);
        })
            .catch((err) => {
            console.error("ops! ocorreu um erro" + err); 
            });        
    }, []);
     
    useEffect(() => {
        
        let filtroP = new RegExp(`(${props.filtro}){1,}`, 'gi');

        if(!produtos) return;
        setProdF(
            produtos.filter( v =>{
                return !!v.nome.match(filtroP);
            })
        );
    },[props.filtro])
    useEffect(()=>{
    },[produtosF])
    
    return(
        <>
            <center><button className="filtro"
                onClick={()=> {
                    var tiposGrid = document.getElementsByClassName('tipos-produtos')[0];
                    tiposGrid.classList.toggle("aberto");
                    setTimeout(()=> {
                        tiposGrid.classList.add("aberto")
                    }, 20000);
                }}><p>Filtro</p></button></center>
                <Filtro />

            {  produtosF?
                <>
                    <SlideProduto titulo="Produtos mais procurados" indice={0} Many={true} array_prod={
                    produtosF
                    } filtro={props.filtro} />
                    <SlideProduto titulo="Mais Baratos" indice={1} Many={true} array_prod={
                        produtosF
                    } filtro={props.filtro} />
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