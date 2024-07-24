import React, { useState } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, novaTarefa]);
      setNovaTarefa('');
    }
  };

  const deletarTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <h1>Lista de Tarefas</h1>
      <div>
        <input
          type="text"
          value={novaTarefa}
          onChange={(e) => setNovaTarefa(e.target.value)}
          placeholder="Adicionar uma nova tarefa"
        />
        <button onClick={adicionarTarefa}>Adicionar</button>
      </div>
      <ul>
        {tarefas.map((tarefa, index) => (
          <li key={index}>
            {tarefa} <button onClick={() => deletarTarefa(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
