import React, { Component } from 'react';
import './App.css';
//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
//Mascara 
import InputMask from 'react-input-mask';

class FormInput extends React.Component {
    render() {
      return <div className="form-group">
                <label htmlFor={this.props.id}>{this.props.campo}:</label>
                <InputMask type="text" id={this.props.id} className="form-control" placeholder={this.props.placeholder} required={this.props.required} guide={this.props.guide}/>
            </div>
    }
  }

export default FormInput;
