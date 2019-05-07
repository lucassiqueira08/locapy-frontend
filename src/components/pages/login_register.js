import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css'

class LoginRegister extends Component {
    render() {
        return (
            <body className="loginpage">
                <div className="wrapper">
                    <div className="left">
                        <div className="login">
                            <div className="logo">
                                <img src="" alt="Logo LocaPy"/>
                            </div>
                            <form>
                                <div>
                                    <label>Email ou Usuário</label>
                                    <input type="text" className="text-input"/>
                                </div>
                                <div>
                                    <label>Senha</label>
                                    <input type="password" className="text-input"/>
                                </div>
                                <button type="submit" className="btn-login">Entrar</button>
                            </form>
                            <Link className="links" to='/'>
                                <a>Esqueci minha Senha</a>
                            </Link>
                            
                            <div className='ou'>
                                <hr className="bar"/>
                                    <span>OU</span>
                                <hr className="bar"/>
                            </div>
                            <Link className="btn-register" to='/LocadorLocatario'>
                                <a >Criar conta</a> 
                            </Link>
                        </div>
                    </div>
                    <div className="right">
                        <div className="showimg">
                            <div className="showimg-content">
                                <h1 className="showimg-text">
                                    Alugar nunca foi tão <strong>FÁCIL</strong>
                                </h1>
                                <Link to='/'>
                                    <a className="btn-know">Conhecer</a>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </body>
        )
    }
}

export default LoginRegister;