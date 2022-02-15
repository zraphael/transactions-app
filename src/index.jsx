import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import ReactDOM from 'react-dom';
import App from './App';
import NewTransaction from './pages/NewTransaction/NewTransaction';
import 'normalize.css';
import './styles/index.css';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="adicionar-transacao" element={<NewTransaction />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root'),
);
