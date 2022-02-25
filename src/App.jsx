import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
} from 'react-router-dom';
import TransactionsList from './pages/TransactionsList/TransactionsList';
import NewTransaction from './pages/NewTransaction/NewTransaction';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TransactionsList />} />
        <Route path="adicionar-transacao" element={<NewTransaction />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
