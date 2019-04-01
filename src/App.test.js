import React from 'react';
import ReactDOM from 'react-dom';
import CadastroLocador from './CadastroLocador';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<CadastroLocador />, div);
  ReactDOM.unmountComponentAtNode(div);
});
