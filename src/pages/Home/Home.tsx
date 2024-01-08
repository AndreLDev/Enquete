import React from 'react';
import { Link } from 'react-router-dom';
import './style.css';

const Home: React.FC = () => {
  return (
    <div className="container">
      <h2>Bem-vindo à Enquetes</h2>
      <div className="button-container">
        <Link to="/cadastro" className="button-link">Cadastrar Enquete</Link>
        <Link to="/lista" className="button-link">Lista de Enquetes</Link>
      </div>
    </div>
  );
};

export default Home;
