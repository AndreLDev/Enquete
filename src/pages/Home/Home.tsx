// src/pages/Home/Home.tsx
import React from 'react';
import { Link } from 'react-router-dom';
import './style.css'; // Importe o arquivo de estilo CSS

const Home: React.FC = () => {
  return (
    <div className="container">
      <h2>Bem-vindo à Enquetes de Votação</h2>
      <div className="button-container">
        <Link to="/cadastro" className="button-link">Cadastrar Enquete</Link>
        <Link to="/lista" className="button-link">Lista de Enquetes</Link>
      </div>
    </div>
  );
};

export default Home;
