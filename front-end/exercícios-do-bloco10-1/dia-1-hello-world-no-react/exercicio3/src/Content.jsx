import React, { Component } from 'react';

class Content extends Component {
  render() {
    const conteudos = [
      {
        conteudo: 'High Order Functions',
        bloco: 8,
        status: 'Aprendido',
      },
      {
        conteudo: 'Composicao de Componentes',
        bloco: 11,
        status: 'Aprendendo',
      },
      {
        conteudo: 'Composicao de Estados',
        bloco: 12,
        status: 'Aprenderei',
      },
      {
        conteudo: 'Redux',
        bloco: 16,
        status: 'Aprenderei',
      },
    ];

    return (
    <div className='content'>
      {conteudos.map((element) => {
        return <div key={element} className='card'>
           <h4>{`O conteúdo é: ${element.conteudo}`}</h4>
           <p>{`status: ${element.status}`}</p>
           <p>{`bloco: ${element.bloco}`}</p>
         </div>
      })}     
    </div>
    );
  }
}

export default Content;
