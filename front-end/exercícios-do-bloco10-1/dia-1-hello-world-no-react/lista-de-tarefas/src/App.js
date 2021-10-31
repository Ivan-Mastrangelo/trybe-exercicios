import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {

    const Task = (value) => {
      return (
        <li>{value}</li>
      );
    }
    const ItemsList = ['Prática de Yôga', 'Café da manhã', 'Estudo de programação', 'Almoço', 'Aula', 'Estudo', 'Aula', 'Exercícios', 'Monitoria', 'Fechamento do dia', 'Jantar', 'Revisar conteúdo', 'Descontrair', 'Dormir']

    return (
      <>
        {Task('Lista de Tarefas')}
          <ol>
            {ItemsList.map((element) => {
              return <li key={element}>{element}</li>
            })}
          </ol>
      </>
    );
  }
}

export default App;
