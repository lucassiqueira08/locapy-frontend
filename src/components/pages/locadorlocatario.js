import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css'

class LocadorLocatario extends Component {
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
                            <Link to='/CadastroLocador' className="btn-cadastra">
                                <a>
                                    CADASTRAR-SE
                                </a>
                            </Link>
                        </div>
                    </div>
                    <div className="box">
                        <div className="content">
                            <h2>02</h2>
                            <h3>Locatario</h3>
                            <p>Encontre sua proxima sala de reunião e deixe 
                                de lado as complicações !</p>
                            <Link to='/CadastroLocatario' className="btn-cadastra">
                                <a>
                                    CADASTRAR-SE
                                </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default LocadorLocatario;