import React from 'react';
import ReactDOM from 'react-dom';
import CadastroLocatario from './CadastroLocatario';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CadastroLocatario />, div);
  ReactDOM.unmountComponentAtNode(div);
});
