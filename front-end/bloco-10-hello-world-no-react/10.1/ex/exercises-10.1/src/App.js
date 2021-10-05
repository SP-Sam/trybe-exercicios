import './App.css';

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

const tarefas = ['Lavar o rosto', 'Tomar café', 'Escovar os dentes', 'Revisar o conteúdo do dia anterior'];

function App() {
  return (
   <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
  );
}

export default App;
