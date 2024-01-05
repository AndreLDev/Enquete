// src/components/EnqueteList/EnqueteList.tsx
import React, { useEffect, useState } from 'react';
import firebase from '../../firebase';
import './style.css'; // Importe o arquivo de estilo CSS

interface Enquete {
  id: string;
  pergunta: string;
}

const EnqueteList: React.FC = () => {
  const [enquetes, setEnquetes] = useState<Enquete[]>([]);

  useEffect(() => {
    const enqueteRef = firebase.database().ref('enquetes');
    enqueteRef.on('value', (snapshot) => {
      const enquetesData = snapshot.val();
      if (enquetesData) {
        const enquetesList: Enquete[] = Object.keys(enquetesData).map((key) => ({
          id: key,
          pergunta: enquetesData[key].pergunta,
        }));
        setEnquetes(enquetesList);
      } else {
        setEnquetes([]);
      }
    });

    return () => enqueteRef.off('value');
  }, []);

  return (
    <div className="EnqueteList"> {/* Adicione a classe ao elemento div */}
      <h2>Lista de Enquetes</h2>
      <ul>
        {enquetes.map((enquete) => (
          <li key={enquete.id}>{enquete.pergunta}</li>
        ))}
      </ul>
    </div>
  );
};

export default EnqueteList;
