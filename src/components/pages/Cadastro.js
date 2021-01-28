import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css'

class Cadastro extends Component {
    render() {
        return (
            <body className="choice">
                <div className="container">
                    <div className="box">
                        <div className="content">
                            <h2>01</h2>
                            <h3>Locador</h3>
                            <p>Anuncie suas salas de reunião e 
                                pare de perder dinheiro com locais ociosos!</p>
                            <Link to='/Cadastro/Locador' className="btn-cadastra">
                                <a>
                                    CADASTRAR-SE
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <h2>02</h2>
                            <h3>Locatário</h3>
                            <p>Encontre sua próxima sala de reunião e deixe 
                                de lado as complicações !</p>
                            <Link to='/Cadastro/Locatario' className="btn-cadastra">
                                <a>
                                    CADASTRAR-SE
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <h2>03</h2>
                            <h3>Sala</h3>
                            <p>Disponibilize sua sala para locatários que buscam salas como a sua!</p>
                            <Link to='/Cadastro/Sala' className="btn-cadastra">
                                <a>
                                    CADASTRAR
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default Cadastro;