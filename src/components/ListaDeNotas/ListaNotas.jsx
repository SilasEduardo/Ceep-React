import React, { Component } from 'react';
import CardNotas from "./CardNota/CardNotas";
import "./estilo.css"

class ListaNotas extends Component {
    render() {
        return(
        <ul className="lista-notas">
            {Array.of("Trabalho", "Trabalho", "Estudo").map((categoria, index) => { //função que cria os elementos da lista. 
                       return(
                        <li className="lista-notas_item" key={index}>
                            <div>{categoria}</div>
                            <CardNotas/>
                        </li>
                       ); 
                    })}
                </ul>
             );
        }
    }

export default ListaNotas;