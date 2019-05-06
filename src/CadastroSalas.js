import React, { Component } from 'react'
import GlobalStyle from './styles/global'
import { Container, Content } from './styles'
import Upload from './componentes/Upload'
import './App.css'
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//JQUERY
import $ from 'jquery'
//JQUERY MASKS
import InputMask from 'react-input-mask'
//Componente de requests HTTPS
import axios from 'axios';
//Toast message
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

class CadastroSalas extends Component {

    ValidaCampos(campos) {
        //debugger
        //Valida campos vazios

        if (
            campos.nomesala == '' ||
            campos.metragem == '' ||
            campos.capaidacde == '' ||
            campos.logradouro == '' ||
            campos.numero == '' ||
            campos.bairro == '' ||
            campos.cidade == '' ||
            campos.estado == '' ||
            campos.complemento == '' ||
            campos.recursos == '' ||
            campos.cep == '' ||
            campos.locador == '') {
            return { 'IsValid': false, 'msg': "Todos os campos são obrigatórios" }

        }
    }
    render() {
        return (
            <form className="centro" type="POST" id="formSalas">
                <div className="formulario">
                    <div className="form-group">
                        <label htmlFor="nome">Nome da sala</label>
                        <input type="text" className="form-control" id="nomesala" placeholder="Digite o nome da sala..." required />
                    </div>


                    <div className="form-group">
                        <label htmlFor="Metragem">Tamanho</label>
                        <input type="text" className="form-control" id="metragem" placeholder="Digite o tamanho em metros quadrados..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="capacidade">Capacidade</label>
                        <input type="text" className="form-control" id="capacidade" placeholder="Digite a capacidade..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="logradouro">Logradouro</label>
                        <input type="text" className="form-control" id="logradouro" placeholder="Digite o logradouro..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="numero">Número</label>
                        <input type="number" className="form-control" id="numero" placeholder="Digite o número..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" className="form-control" id="bairro" placeholder="Digite o bairro..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Cidade">Cidade</label>
                        <input type="text" className="form-control" id="cidade" placeholder="Digite a cidade..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="estado">Estado</label>
                        <input type="text" className="form-control" id="estado" placeholder="Digite o estado..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="complemento">Complemento</label>
                        <input type="text" className="form-control" id="complemento" placeholder="Digite o complemento..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="recursos">Recursos Adicionais</label>
                        <input type="text" className="form-control" id="recursos" placeholder="Sua sala possui recursos? Exemplo: Projetor, Televisão, Quadro" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CEP">CEP</label>
                        <input type="text" className="form-control" id="cep" placeholder="Digite o CEP..." />
                    </div>

                    <Container>
                        <Content>
                            <Upload />
                        </Content>
                        <GlobalStyle />
                    </Container>
                    <button type="submit" className="btn btn-primary">Cadastrar Sala</button>
                </div>
                <ToastContainer />

            </form>
        );
    }
}
export default CadastroSalas