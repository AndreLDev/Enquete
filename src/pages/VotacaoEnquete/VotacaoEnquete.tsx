// src/pages/VotacaoEnquete/VotacaoEnquete.tsx
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import firebase from '../../firebase';
import EnqueteChart from '../../components/EnqueteChart/EnqueteChart';
import './style.css'; // Importa o arquivo de estilo

interface Enquete {
  id: string;
  pergunta: string;
  opcoes: string[];
}

const VotacaoEnquete: React.FC = () => {
  const { enqueteId } = useParams<{ enqueteId: string }>();
  const [enquete, setEnquete] = useState<Enquete | null>(null);

  useEffect(() => {
    const enqueteRef = firebase.database().ref(`enquetes/${enqueteId}`);

    enqueteRef.on('value', (snapshot) => {
      const enqueteData = snapshot.val();
      if (enqueteData) {
        setEnquete({
          id: enqueteId,
          ...enqueteData,
        });
      } else {
        setEnquete(null);
      }
    });

    return () => {
      enqueteRef.off('value');
    };
  }, [enqueteId]);

  return (
    <div className="container">
      {enquete ? (
        <div>
          <h2>Votação na Enquete</h2>
          <EnqueteChart enquete={enquete} />
          <Link to="/lista" className="enquete-button">Voltar para Lista de Enquetes</Link>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default VotacaoEnquete;
