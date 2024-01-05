// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Alterado de 'Switch' para 'Routes'
import Home from './pages/Home/Home';
import CadastroEnquete from './pages/CadastroEnquete/CadastroEnquete';
import ListaEnquetes from './pages/ListaEnquetes/ListaEnquetes';
import VotacaoEnquete from './pages/VotacaoEnquete/VotacaoEnquete';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<CadastroEnquete />} />
        <Route path="/lista" element={<ListaEnquetes />} />
        <Route path="/votacao/:enqueteId" element={<VotacaoEnquete />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

