import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [tarefas, setTarefas] = useState([]);
  const [novaTarefa, setNovaTarefa] = useState('');

  // useEffect para buscar tarefas da API
  useEffect(() => {
    fetch('https://dummyjson.com/todos')
      .then(response => response.json())
      .then(data => setTarefas(data.todos))
      .catch(error => console.error('Erro ao buscar tarefas:', error));
  }, []);

  const adicionarTarefa = () => {
    if (novaTarefa.trim()) {
      setTarefas([...tarefas, { todo: novaTarefa, completed: false }]);
      setNovaTarefa('');
    }
  };

  const deletarTarefa = (index) => {
    setTarefas(tarefas.filter((_, i) => i !== index));
  };

  const marcarComoCompleta = (index) => {
    setTarefas(tarefas.map((tarefa, i) => i === index ? { ...tarefa, completed: !tarefa.completed } : tarefa));
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
            <input
              type="checkbox"
              checked={tarefa.completed}
              onChange={() => marcarComoCompleta(index)}
            />
            <span style={{ textDecoration: tarefa.completed ? 'line-through' : 'none' }}>
              {tarefa.todo}
            </span>
            <button onClick={() => deletarTarefa(index)}>Deletar</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
