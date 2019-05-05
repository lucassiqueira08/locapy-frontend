import React, { Component } from 'react';
import { Link } from 'react-router-dom';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//JQUERY
import $ from 'jquery';
//JQUERY MASKS
import InputMask from 'react-input-mask';
//Componte de requests HTTPS
import axios from 'axios';
//Toast message
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
toast.configure()

class CadastroLocatario extends Component {
    ValidaCampos(campos) {
        //debugger;
        //Valida campos vazios
        if (campos.nome == '' ||
            campos.cpf == '' ||
            campos.cpf == '' ||
            campos.endereco == '' ||
            campos.telefone == '' ||
            campos.perfil.usuario.username == '' ||
            campos.perfil.usuario.email == '' ||
            campos.perfil.usuario.password == '') {
            return { "isValid": false, "msg": "Todos os campos são obrigatórios!" };
        }
        if (campos.perfil.usuario.password.length < 8) {
            return { "isValid": false, "msg": "A senha precisa ter pelo menos 8 dígitos!" };
        }
        return { "isValid": true }
    }
    ValidaTermo(termo) {

        if (termo) {
            return { "isValid": true };
        } else {
            return { "isValid": false, "msg": "Você precisa aceitar o termo" };
        }


    }

    PostLocatario(e) {
        e.preventDefault();
        // debugger;
        var url = 'http://localhost:8000/cadastro/locatario/';
        var data = {};
        var header = {
            'Content-Type': "application/json",
        }
        data.nome = $('#nome').val();
        data.cpf = $('#cpf').val();
        data.telefone = $('#telefone').val();
        data.logradouro = $('#logradouro').val();
        data.numero = $('#numero').val();
        data.bairro = $('#bairro').val();
        data.cidade = $('#cidade').val();
        data.estado = $('#estado').val();
        data.data_nasc = $('#data_nasc').val();
        data.perfil = {
            "usuario": {
                "username": $('#usuario').val(),
                "email": $('#email').val(),
                "password": $('#senha').val(),
            }
        }
        var CheckTermo = $('#Termo').is(':checked');
        var valid = this.ValidaCampos(data);
        //Validação do termo.
        valid = this.ValidaTermo(CheckTermo);


        if (valid.isValid) {
            axios.post(url, data, header)
                .then(response => {
                    toast.success("Locatario cadastrado com sucesso!");
                    $('#formLocatario').trigger("reset");
                })
                .catch(error => {
                    var errorResponse = JSON.parse(JSON.stringify(error));
                    var errorMessages = [];
                    console.log(errorResponse);
                    if (errorResponse.response.status == 400) {
                        if (errorResponse.response.data.cpf) {
                            errorMessages.push("cpf: " + errorResponse.response.data.cpf[0])
                        }
                        if (errorResponse.response.data.perfil.usuario.username) {
                            errorMessages.push("Username: " + errorResponse.response.data.perfil.usuario.username[0])
                        }
                        if (errorResponse.response.data.perfil.usuario.email) {
                            errorMessages.push("E-Mail: " + errorResponse.response.data.perfil.usuario.email[0])
                        }
                    }
                    else if (errorResponse.response.status == 500) {
                        errorMessages.push("Erro interno no servidor...")
                    }
                    errorMessages.forEach(element => {
                        toast.error(element);
                    });
                });
        }
        else {
            toast.error(valid.msg);
        }
    }
    componentDidMount() {
        toast.configure({
            autoClose: 5000,
        });
        //Metodo que é executado após o componente ser rendenizado
    }
    componentWillMount() {
        //Metodo que é executado antes do componente ser rendenizado
    }
    constructor() {
        super();
        this.state = { lista: [] };
    }
    render() {
        return (
            <div className="form">
                <div className="row">
                    <div className="col-lg-2"></div>
                    <div className="col-lg-8">
                        <div className="register-form">
                            <form className="form-group" type="POST" id="formLocatario">
                                <div className="row">
                                    <div className="col-md-4 mb-3">
                                        <button className="imagemusu">
                                            <div></div>
                                        </button>
                                    </div>
                                    <div className="col-md-8 mb-3">
                                        <div className="form-group usu">
                                            <label htmlFor="usuario">Usuário</label>
                                            <InputMask className="form-control" guide={true} id="usuario" placeholder="Digite um nome de usuário..." required />
                                        </div>

                                        <div className="form-group usu">
                                        <label htmlFor="senha">Senha</label>
                                        <InputMask className="form-control" mask="" guide={true} id="senha" placeholder="Digite uma senha..." required />
                                        </div>

                                        <div className="form-group usu">
                                        <label htmlFor="senha">Confirma Senha</label>
                                        <InputMask className="form-control" mask="" guide={true} id="senha" placeholder="Digite uma senha..." required />
                                        </div>

                                        <div className="form-group usu">
                                        <label htmlFor="email">E-mail</label>
                                        <InputMask className="form-control" type="email" guide={true} id="email" placeholder="Digite seu e-mail..." required />
                                        </div>
                                    </div>
                                </div>

                                <hr className="mb-3"></hr>

                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Rg">RG</label>
                                        <input type="text" className="form-control" id="rg" placeholder="Digite a RG..." required />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="cpf">CPF</label>
                                        <input type="text" className="form-control" id="cpf" placeholder="Digite o CPF..." required />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="telefone">Telefone</label>
                                        <input type="text" className="form-control" id="telefone" placeholder="Digite o telefone..." />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="DataNasc">Data de Nascimento</label>
                                        <input type="text" className="form-control" id="data_nasc" placeholder="Digite a data de nascimento..." />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="endereco">Logradouro</label>
                                        <input type="text" className="form-control" id="logradouro" placeholder="Digite o Logradouro..." />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="estado">Estado</label>
                                        <input type="text" className="form-control" id="estado" placeholder="Digite o Estado..." />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Cidade">Cidade</label>
                                        <input type="text" className="form-control" id="cidade" placeholder="Digite a Cidade..." />
                                    </div>
                                </div>

                                <div className="row">
                                    <div className="form-group col-md-6">
                                        <label htmlFor="bairro">Bairro</label>
                                        <input type="text" className="form-control" id="bairro" placeholder="Digite o Bairro..." />
                                    </div>
                                    <div className="form-group col-md-6">
                                        <label htmlFor="Cep">CEP</label>
                                        <input type="text" className="form-control" id="cep" placeholder="Digite a CEP..." />
                                    </div>
                                </div>

                                <div className='row'>
                                    <div className="form-group col-md-12">
                                        <label htmlFor="email">E-mail</label>
                                        <input type="email" className="form-control" id="email" placeholder="Digite seu e-mail..." required />
                                    </div>
                                </div>

                                <hr className="mb-4"></hr>

                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" id='Termo' name='Termo' className="form-check-input" />
                                    <label className="form-check-label" htmlFor="termos_de_uso">Eu li e concordo com os termos de uso</label>
                                </div>
                                <hr className="mb-4"></hr>
                                <div className="row">
                                    <div className="col-md-10 mb-3"></div>
                                    <div className="col-md-2 mb-3">
                                        <button type="submit" className="btn btn-cadastra" onClick={(e) => this.PostLocatario(e)}>Cadastrar</button>
                                    </div>
                                </div>
                                <ToastContainer />
                            </form>
                        </div>
                    </div>
                    <div className="col-lg-2"></div>
                </div>
            </div>
        );
    }
}

export default CadastroLocatario;
