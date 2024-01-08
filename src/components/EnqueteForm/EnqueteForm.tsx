import React, { useState, FormEvent } from 'react';
import firebase from '../../firebase';
import './style.css';

interface EnqueteFormProps {
  onEnqueteAdded: () => void;
}

const EnqueteForm: React.FC<EnqueteFormProps> = ({ onEnqueteAdded }) => {
  const [pergunta, setPergunta] = useState('');
  const [opcoes, setOpcoes] = useState(['', '']); 

  const handleAddEnquete = (e: FormEvent) => {
    e.preventDefault();

    if (pergunta.trim() !== '' && opcoes.every(opcao => opcao.trim() !== '')) {
      const enqueteRef = firebase.database().ref('enquetes');
      const novaEnquete = {
        pergunta,
        opcoes,
      };

      enqueteRef.push(novaEnquete);
      setPergunta('');
      setOpcoes(['', '']); 

      onEnqueteAdded(); 
    }
  };

  const handleOpcaoChange = (index: number, value: string) => {
    const novasOpcoes = [...opcoes];
    novasOpcoes[index] = value;
    setOpcoes(novasOpcoes);
  };

  return (
    <form className="EnqueteForm" onSubmit={handleAddEnquete}>
      <label>
        Pergunta:
        <input
          type="text"
          value={pergunta}
          onChange={(e) => setPergunta(e.target.value)}
        />
      </label>
      {opcoes.map((opcao, index) => (
        <label key={index}>
          Opção {index + 1}:
          <input
            type="text"
            value={opcao}
            onChange={(e) => handleOpcaoChange(index, e.target.value)}
          />
        </label>
      ))}
      <button type="submit">Cadastrar Enquete</button>
    </form>
  );
};

export default EnqueteForm;
