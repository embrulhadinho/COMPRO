import React, { useEffect , useState} from "react";
import { useParams, Link } from 'react-router-dom';
import Supermercado from "../img/SupermercadoSlide.jpg";
import "../css/infoSuper.css";
import api from '../service/api_compro';


export default function InfoSupermercados (props) {
    props.AlterarTela(window.location.pathname);
    

    document.title = "Informações";
    const [supermercado,setSupermercado] = useState({});
    const { id } = useParams();
    useEffect (() => {
        api
            .get(`/supermercado/exibir/${id}`)
            .then((response) => {
                setSupermercado(response.data)
            ;})
            .catch((err) => {
                console.error("ops! ocorreu um erro" + err);
            });
        },[])
    return (
        <>
        <div className="conjunto-info">
            <div className="Supermercado-img-info">
                <img src={supermercado.urlImg || Supermercado} alt={supermercado}/>
            </div>
            
            
            <div className="supermercado-info">
                <h1> {supermercado.nome}</h1> <br />
                
                    <span className="dado">Localização</span>
                    <p> 
                        {supermercado.rua} - {supermercado.bairro}, {supermercado.cidade} - {supermercado.estado}
                    </p>
                
                    <span className="dado">Estado</span>
                    <p>  {supermercado.estado}</p>
                
                    <span className="dado">Cidade</span>
                    <p>  {supermercado.cidade}</p>
                 
                    <span className="dado">e-mail</span>
                    <p>  {supermercado.email}</p>

                    <span className="dado">Telefone</span>
                    <p> {supermercado.telefone}</p>

                    <span className="dado">atendimento</span>
                    <p> {supermercado.abertura} - {supermercado.fechamento}</p>
                
                    <div className="Estrela">
                        <div className="EstrelaCheia" style={{ width: 40*supermercado.avaliacao+'px' }}>

                        </div>
                        <div className="EstrelaVazia">

                        </div>
                    </div>
                     
            </div>
            <Link to={`/Supermercado/${supermercado._id}/Produtos`}>VER PRODUTOS</Link>
        </div>
        </> 
    )
} 