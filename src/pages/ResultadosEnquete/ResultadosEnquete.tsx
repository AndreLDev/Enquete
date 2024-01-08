import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import firebase from '../../firebase';
import './style.css';

interface Enquete {
  id: string;
  pergunta: string;
  opcoes: string[];
  votos: { [key: string]: number };
}

const ResultadosEnquete: React.FC = () => {
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
          <h2 className="enquete-title">Resultados da Enquete</h2>
          <h3 className="enquete-question">{enquete.pergunta}</h3>
          <ul className="enquete-results-list">
            {enquete.opcoes.map((opcao, index) => (
              <li key={index} className="enquete-results-item">
                <span className="enquete-option">{opcao}:</span>
                <span className="enquete-votes">
                  {Object.values(enquete.votos).filter((v) => v === index).length} votos
                </span>
              </li>
            ))}
          </ul>
          <Link to="/lista" className="link">Voltar para Lista de Enquetes</Link>
        </div>
      ) : (
        <p>Carregando...</p>
      )}
    </div>
  );
};

export default ResultadosEnquete;
