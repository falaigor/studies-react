/* eslint-disable */
import React, { Component } from 'react';
import './app.css';
import womamMeditation from './images/meditation.svg';

class App extends Component{

  constructor(props){
    super(props);
    this.state = {
      fraseGerada: 'Clique para gerar sua frase aleatória',
    };

    this.gerarFrase = this.gerarFrase.bind(this);

    this.frases = ['Siga os bons e aprenda com eles.', 
    'O bom-senso vale mais do que muito conhecimento.', 
    'O riso é a menor distância entre duas pessoas.',
    'Deixe de lado as preocupações e seja feliz.',
    'Realize o óbvio, pense no improvável e conquiste o impossível.',
    'Acredite em milagres, mas não dependa deles.',
    'A maior barreira para o sucesso é o medo do fracasso.'];

  }

  gerarFrase(){
    let state = this.state;
    let numeroAleatorio = Math.floor(Math.random() * this.frases.length);

    state.fraseGerada = this.frases[numeroAleatorio];
    this.setState(state);
  }

  render(){
    return(
      <div id="page-random">
        <div className="content-wrapper">
          <img src={womamMeditation} width="100%"/>
          
          <h3>"{this.state.fraseGerada}"</h3>
          
          <button onClick={this.gerarFrase} className="bottom-random">
            Gerar Frase
          </button>
        </div>
      </div>
    );
  }
}

export default App;
