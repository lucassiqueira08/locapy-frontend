import React, { Component } from 'react'
import GlobalStyle from '../../styles/global'
import { Container, Content } from '../css/styles'
import Upload from '../../componentes/Upload/Upload'

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
var CLOUDNARY_URL = 'https://api.cloudinary.com/v1_1/deogideba/upload';
var CLOUDNARY_UPLOAD_PRESET = 'bdafisca';
var imgPreview = document.getElementById('img-preview');


class CadastroSalas extends Component {

      
    
    
        PostSala(e){    
            e.preventDefault();
            var fileUpload =  $('#file-upload');
    //    ENVIAR IMAGEM AO DESTINO NO BACKEND bin Assim como no ControlaPet
            // var formData = new FormData();
            // formData.append('file', fileUpload[0].files[0]);         
            //  formData.append('upload_preset',CLOUDNARY_UPLOAD_PRESET);
            //  console.log(formData);
            //  axios({
            //          url: CLOUDNARY_URL,
            //          method: 'POST',
            //          headers:{
            //              'Content-Type': 'application/x-www-form-urlencoded'
            //          },
            //          data: formData
            //  }).then(function(res){
            //      console.log(res);
            //  }).catch(function(err){
         
            //      console.error(err);
             
         
            //  });




            var url = 'http://localhost:8000/sala/';
            var data = {};
            var header = {
                'Content-Type':"application/json",
            }
            data.nome = $('#nomesala').val();
            data.metragem = $('#metragem').val();
            data.capacidade = $('#capacidade').val();
            data.logradouro = $('#logradouro').val();
            data.numero = $('#numero').val();
            data.bairro = $('#bairro').val();
            data.cidade = $('#cidade').val();
            data.estado = $('#estado').val();
            data.cep = $('#cep').val();
            data.locador = 1;
            axios.post(url, data, header)
            .then(response => { 
            toast.success("Sala catalogada com sucesso!");        
         
            alert('funfo');


             
       
                $('#formSalas').trigger("reset");


        }).catch(error => {
            var errorResponse = JSON.parse(JSON.stringify(error));
            var errorMessages = [];
          
            debugger;
        });
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
                        <label htmlFor="CEP">CEP</label>
                        <input type="text" className="form-control" id="cep" placeholder="Digite o CEP..." />
                    </div>
                   
                    <Container>
                        <Content>
                            <Upload />
                        </Content>
                        <GlobalStyle />
                    </Container>
                    <button type="submit" className="btn btn-primary" onClick={(e) => this.PostSala(e)}>Cadastrar Sala</button>
                </div>
                <ToastContainer />

            </form>
        );
    }
}
export default CadastroSalas 