import React, { Component } from 'react'
import { Link } from 'react-router-dom';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css'
//JQUERY
import $ from 'jquery'
//JQUERY MASKS
import InputMask from 'react-input-mask'
//Componente de requests HTTPS
//Toast message
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
toast.configure()

class CadastroSalas extends Component {

    ValidaCampos(campos) {
        //debugger
        //Valida campos vazios

        if (
            campos.nome == '' ||
            campos.metragem == '' ||
            campos.capaidacde == '' ||
            campos.logradouro == '' ||
            campos.numero == '' ||
            campos.bairro == '' ||
            campos.cidade == '' ||
            campos.estado == '' ||
            campos.complemento == '' ||
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
                        <label htmlFor="nome">Nome:</label>
                        <input type="text" className="form-control" id="nome" placeholder="Digite o nome..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Metragem">Metragem</label>
                        <input type="text" className="form-control" id="metragem" placeholder="Digite a metragem..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="cpf">Capacidade</label>
                        <input type="text" className="form-control" id="capacidade" placeholder="Digite a capacidade..." required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="logradouro">Logradouro</label>
                        <input type="text" className="form-control" id="logradouro" placeholder="Digite o Logradouro..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="telefone">Número</label>
                        <input type="number" className="form-control" id="numero" placeholder="Digite o número..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="bairro">Bairro</label>
                        <input type="text" className="form-control" id="bairro" placeholder="Digite o Bairro..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="Cidade">Cidade</label>
                        <input type="text" className="form-control" id="cidade" placeholder="Digite a Cidade..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="estado">Estado</label>
                        <input type="text" className="form-control" id="estado" placeholder="Digite o Estado..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="DataNasc">Complemento</label>
                        <input type="text" className="form-control" id="complemento" placeholder="Digite o complemento..." />
                    </div>
                    <div className="form-group">
                        <label htmlFor="CEP">CEP</label>
                        <input type="text" className="form-control" id="cep" placeholder="Digite o CEP..." />
                    </div>
                </div>
                <ToastContainer />
            </form>
        );
    }
}
export default CadastroSalas
