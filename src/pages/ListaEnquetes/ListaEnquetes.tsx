// src/pages/ListaEnquetes/ListaEnquetes.tsx
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import EnqueteList from '../../components/EnqueteList/EnqueteList';
import firebase from '../../firebase';
import './style.css';

interface Enquete {
  id: string;
  pergunta: string;
  opcoes: string[];
}

const ListaEnquetes: React.FC = () => {
  const [enquetes, setEnquetes] = useState<Enquete[]>([]);

  useEffect(() => {
    const enqueteRef = firebase.database().ref('enquetes');

    enqueteRef.on('value', (snapshot) => {
      const enquetesData = snapshot.val();
      if (enquetesData) {
        const enquetesList: Enquete[] = Object.keys(enquetesData).map((key) => ({
          id: key,
          ...enquetesData[key],
        }));
        setEnquetes(enquetesList);
      } else {
        setEnquetes([]);
      }
    });

    return () => {
      enqueteRef.off('value');
    };
  }, []);

  return (
    <div className="container">
      <h2>Lista de Enquetes</h2>
      {enquetes.length === 0 ? (
        <p>Nenhuma enquete disponível.</p>
      ) : (
        <ul className="enquete-list">
          {enquetes.map((enquete) => (
            <li key={enquete.id} className="enquete-list-item">
              <Link to={`/votacao/${enquete.id}`} className="enquete-link">
                {enquete.pergunta}
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/cadastro" className="button-link cadastrar-button">
        Cadastrar Nova Enquete
      </Link>
      <br />
      <Link to="/" className="button-link voltar-button">
        Voltar para Home
      </Link>
    </div>
  );
};

export default ListaEnquetes;
