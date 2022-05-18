import React from 'react';
import banana from '../img/banana.png';
import '../css/produtos.css';

export default function blocoProd() {
    return(
        
        <div className='produto'>
            <div className='img-produto'>
                <img draggable="false" src={banana} alt="produto"/>
            </div>
            <div className='nome-produto'>
                <span>Banana-nanica da china japonesa 1 kg</span>
            </div>
            <div className='informacao-produto'>
                <p>Encontrado em 7 supermercados</p>
            </div>
            <div className='btns-produto'>
                <div className='diferenca-preco-produto'>
                    <p><s>90 R$</s> 30 R$</p>
                    <button onClick={()=>{alert("Produto adicionado ao carrinho")}}><p>Adicionar ao carrinho</p></button>
                    <button onClick={()=>{window.location.href='/Produtos/informacoes/1000'}}><p>Informações</p></button>
                </div>
            </div> 
        </div>
    )
}