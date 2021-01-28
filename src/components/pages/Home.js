import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';
import '../css/home.css'

class Home extends Component {
    render() {
        return (
            <div>
                <nav className="navbar navbar-expand-lg fixed-top">
                    <div className="container-fluid">
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive">
                            <span className="custom-toggler-icon"><i className="fas fa-bars"></i></span>
                        </button>

                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav ml-auto">
                                <li className="nav-item">
                                    <Link to='/Cadastro' className="nav-link">CADASTRA</Link>
                                </li>
                                <li className="nav-item">
                                    <Link to='/Login' className="nav-link">ENTRAR</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="landing">
                    <div className="home-wrap">
                        <div className="home-inner">
                        </div>
                    </div>
                </div>
                <div className="caption text-center">
                    <div className="os-animation" data-animation="bounceInUp" data-delay=".6s">
                        <h1>Loca.py</h1>
                    </div>
                    <div className="os-animation" data-animation="bounceInUp" data-delay=".8s">
                        <h3>Encontre a Sala Ideal</h3>
                    </div>
                    <div className="os-animation" data-animation="bounceInUp" data-delay="1s">
                        <a className="btn btn-outline-light btn-lg" href="#features">Anunciar</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Home;