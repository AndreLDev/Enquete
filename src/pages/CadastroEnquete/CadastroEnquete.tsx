import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import EnqueteForm from '../../components/EnqueteForm/EnqueteForm';
import './style.css'; 

const CadastroEnquete: React.FC = () => {
  const [isEnqueteAdded, setEnqueteAdded] = useState(false);

  const handleEnqueteAdded = () => {
    setEnqueteAdded(true);
  };

  return (
    <div className="container">
      <h2>Cadastrar Nova Enquete</h2>
      {isEnqueteAdded && (
        <p className="success-message">Enquete cadastrada com sucesso!</p>
      )}
      <EnqueteForm onEnqueteAdded={handleEnqueteAdded} />
      <Link to="/lista" className="link">
        Ver Lista de Enquetes
      </Link>
      <br />
      <Link to="/" className="link">
        Voltar para Home
      </Link>
    </div>
  );
};

export default CadastroEnquete;
