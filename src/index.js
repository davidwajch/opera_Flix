import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import CadastroVideo from './pages/Home/cadastro/CadastroVideo';
import Erro404 from './pages/Home/cadastro/Erro404';
import CadastroCategoria from './pages/Home/cadastro/Categoria';

import { 
  BrowserRouter,
  Switch,
  Route
} from 'react-router-dom';



ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path= "/" component={App} exact/>
      <Route path= "/cadastro/video" component= {CadastroVideo} />
      <Route path= "/cadastro/categoria" component= {CadastroCategoria} />
      <Route component= {Erro404}/>
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
);


