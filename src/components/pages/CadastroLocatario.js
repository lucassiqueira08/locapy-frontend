import React, { Component } from 'react';
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
//Via CEP
import ViaCep from '../tools/ViaCep.js';
toast.configure()

class CadastroLocatario extends Component {
    ValidaCampos(campos){
        //Valida campos vazios
        if(campos.nome == ''
            ,campos.rg == ''
            ,campos.cpf == ''
            ,campos.telefone == ''
            ,campos.cep == ''
            ,campos.numero == ''
            ,campos.data_nasc == ''
            ,campos.ab == ''
            ,campos.usuario == ''
            ,campos.email == ''
            ,campos.senha == ''
            ,campos.ConfirmaSenha == '') {
            return {"isValid" : false, "msg" : "Todos os campos são obrigatórios!"};
        }
        if(campos.perfil.usuario.password.length < 8) {
            return {"isValid" : false, "msg" : "A senha precisa ter pelo menos 8 dígitos!"};
        }
        if(campos.senha !== campos.senha2){
            return {"isValid" : false,  "msg" :"A senhas digitadas são diferentes"};
        }
        return {"isValid" : true}
    }

    ValidaTermo(termo){
        if (termo){
            return {"isValid" : true};
        }else{
            return {"isValid" : false,  "msg" : "Você precisa aceitar o termo"};
        }
    }

    PostLocatario(e){    
        e.preventDefault();
        var url = 'http://localhost:8000/cadastro/locatario/';
        var data = {};
        var header = {
            'Content-Type':"application/json",
        }
        data.nome = $('#nome').val();
        data.cpf = $('#cpf').val().replace(/[\.-]/g, "");
        data.telefone = $('#telefone').val().replace(/[\(\)\.\s-]+/g,"");
        data.logradouro = $('#logradouro').val();
        data.numero = $('#numero').val();
        data.bairro = $('#bairro').val();
        data.cidade = $('#cidade').val();
        data.estado = $('#estado').val();
        data.data_nasc = $('#data_nasc').val();
        data.perfil = {
            "usuario": {
            "username":  $('#usuario').val(),
            "email": $('#email').val(),
            "password": $('#senha').val(),
            }
        }
        var CheckTermo =   $('#Termo').is(':checked');
        var valid = true;
        
        //Validações de campo
        !this.ValidaCampos(data).isValid || !this.ValidaTermo(CheckTermo).isValid ? valid = false : valid = true;
        
        if (valid){
            axios.post(url, data, header)
            .then(response => { 
            toast.success("Locatario cadastrado com sucesso!");        
            $('#formLocatario').trigger("reset");
        })
            .catch(error => {
            var errorResponse = JSON.parse(JSON.stringify(error));
            var errorMessages = [];
            console.log(errorResponse);
            debugger;
            if(errorResponse.response.status == 400){
                if(errorResponse.response.data.cpf){
                errorMessages.push("cpf: " + errorResponse.response.data.cpf[0]);
                toast.error("cpf: " + errorResponse.response.data.cpf[0]);
                }
            if(errorResponse.response.data.perfil.usuario.username){
                errorMessages.push("Usuario: " + errorResponse.response.data.perfil.usuario.username[0]);   
            }
            if(errorResponse.response.data.perfil.usuario.email){
                errorMessages.push("E-Mail: " + errorResponse.response.data.perfil.usuario.email[0]);
                }
            }
            else if(errorResponse.response.status == 500){
                errorMessages.push("Erro interno no servidor...");
            }
            errorMessages.forEach(element => {
                toast.error(element);
                });
            });
        }
        else{
            toast.error(valid.msg);
        }
    }

    componentDidMount(){
        toast.configure({
            autoClose: 5000,
        });   
    }
    constructor(props) 
        {
        super(props);
        this.state = { cep: '' , cidade: '', bairro: '', estado: ''};
        this.handleChangeCep = this.handleChangeCep.bind(this);
        this.handleSuccess = this.handleSuccess.bind(this);
        }
    
    handleChangeCep(evt) {
        this.setState({ cep: evt.target.value })
    }
    
    handleSuccess(cepData) {
        //Setar os dados do viaCep nos campos.
        console.log(cepData);
        debugger;
        this.setState({logradouro:cepData.logradouro, cidade:cepData.localidade,bairro:cepData.bairro, estado: cepData.uf}).bind(this);
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
                                            <InputMask className="form-control" guide={true} id="usuario" placeholder="Digite um nome de Usuário..." required />
                                        </div>
                                        <div className="form-group usu">
                                            <label htmlFor="email">E-mail</label>
                                            <InputMask className="form-control" type="email" guide={true} id="email" placeholder="Digite seu E-mail..." required />
                                        </div>
                                        <div className="form-group usu">
                                            <label htmlFor="senha">Senha</label>
                                            <input type="password" className="form-control" id="senha" placeholder="Digite uma Senha..." required/>
                                        </div>
                                        <div className="form-group usu">
                                            <label htmlFor="senha">Confirma Senha</label>
                                            <input type="password" className="form-control" id="ConfirmaSenha" placeholder="Digite novamente a Senha..." required/>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mb-3"></hr>
                                <div className="row">
                                    <div className="form-group col-md-12">
                                        <label htmlFor="nome">Nome</label>
                                        <InputMask type="text" className="form-control" id="nome" placeholder="Digite o Nome..." required/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-4">
                                        <label htmlFor="cpf">CPF</label>
                                        <InputMask type="text" mask="999.999.999-99" guide={true} className="form-control" id="cpf" placeholder="Digite o CPF..." required/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="DataNasc">Data de Nascimento</label>
                                        <InputMask type="date" className="form-control" id="data_nasc" placeholder="Digite a data de nascimento..."/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="telefone">Telefone</label>
                                        <InputMask type="text" mask="(99)99999-9999" guide={true} className="form-control" id="telefone"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-3">
                                        <ViaCep cep={this.state.cep} onSuccess={this.handleSuccess} lazy>
                                            { ({ data, loading, error, fetch }) => {
                                                if (loading) {
                                                return <p>Procurando...</p>
                                                }
                                                return  <div className="form-group">
                                                            <label htmlFor="CepLabel">Cep</label>
                                                            <InputMask className="form-control" placeholder="Digite o Cep" id="cep" onBlur={fetch} onChange={this.handleChangeCep} value={this.state.cep} placeholder="CEP" type="text"/>
                                                        </div>
                                                }
                                            }
                                        </ViaCep>
                                    </div>
                                    <div className="form-group col-md-7">
                                        <label htmlFor="endereco">Logradouro</label>
                                        <InputMask type="text" className="form-control" id="logradouro" placeholder="Digite o Logradouro..."/>
                                    </div>
                                    <div className="form-group col-md-2">
                                        <label htmlFor="Numero">Número</label>
                                        <InputMask type="text" className="form-control"  id="numero"/>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="form-group col-md-3">
                                        <label htmlFor="estado">Estado</label>
                                        <InputMask type="text" className="form-control" value= {this.state.estado}  id="estado" placeholder="Digite o Estado..."/>
                                    </div>
                                    <div className="form-group col-md-5">
                                        <label htmlFor="Cidade">Cidade</label>
                                        <InputMask type="text" className="form-control" value= {this.state.cidade} id="cidade" placeholder="Digite a Cidade..."/>
                                    </div>
                                    <div className="form-group col-md-4">
                                        <label htmlFor="bairro">Bairro</label>
                                        <InputMask type="text" className="form-control" value={this.state.bairro}  id="bairro" placeholder="Digite o Bairro..."/>
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
