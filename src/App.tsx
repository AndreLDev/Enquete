import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Home from './pages/Home/Home';
import CadastroEnquete from './pages/CadastroEnquete/CadastroEnquete';
import ListaEnquetes from './pages/ListaEnquetes/ListaEnquetes';
import VotacaoEnquete from './pages/VotacaoEnquete/VotacaoEnquete';
import ResultadosEnquete from './pages/ResultadosEnquete/ResultadosEnquete';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/cadastro" element={<CadastroEnquete />} />
        <Route path="/lista" element={<ListaEnquetes />} />
        <Route path="/votacao/:enqueteId" element={<VotacaoEnquete />} />
        <Route path="/resultados/:enqueteId" element={<ResultadosEnquete />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default App;

