// src/components/EnqueteChart/EnqueteChart.tsx
import React, { useState } from 'react';
import firebase from '../../firebase';
import './style.css'; // Importe o arquivo de estilo CSS

interface Enquete {
  id: string;
  pergunta: string;
  opcoes: string[];
}

interface EnqueteChartProps {
  enquete: Enquete;
}

const EnqueteChart: React.FC<EnqueteChartProps> = ({ enquete }) => {
  const [voto, setVoto] = useState<number | null>(null);

  const handleVotar = (opcaoIndex: number) => {
    setVoto(opcaoIndex);

    // Adicione a lógica para enviar o voto para o Firebase aqui
    const enqueteRef = firebase.database().ref(`enquetes/${enquete.id}/votos`);
    enqueteRef.push(opcaoIndex);
  };

  return (
    <div className="EnqueteChart"> {/* Adicione a classe ao elemento div */}
      <h3>{enquete.pergunta}</h3>
      <ul>
        {enquete.opcoes.map((opcao, index) => (
          <li key={index}>
            <button onClick={() => handleVotar(index)} disabled={voto !== null}>
              {opcao}
            </button>
          </li>
        ))}
      </ul>
      {voto !== null && <p>Voto registrado! Obrigado por votar.</p>}
    </div>
  );
};

export default EnqueteChart;
