import React, { Component } from 'react';
import './App.css';

class App extends Component {

  constructor(props){
    super(props);
    this.state = {
      numero: 0,
      btnGO: 'GO!',
    };

    this.timer = null;
    this.goTime = this.goTime.bind(this);
    this.resetTime = this.resetTime.bind(this);
  }

  goTime(){

    let state = this.state;

    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
      state.btnGO = 'GO!';
    } else {
      this.timer = setInterval(()=>{
        let state = this.state;
        state.numero += 0.1;
        this.setState(state);
      }, 100);
      state.btnGO = 'PAUSE';
    }

    this.setState(state)
  } 

  resetTime(){
    if(this.timer !== null){
      clearInterval(this.timer);
      this.timer = null;
    }

    let state = this.state;
    state.numero = 0;
    state.btnGO = 'GO!';
    this.setState(state);
  } 

  render(){
    return (
      <div id="page-timer">
        <div className="container">
          <div className="timer">
            {this.state.numero.toFixed(1)}
          </div>
          
          <button onClick={this.resetTime} className="btn-reset">
            Reset
          </button>

          <button onClick={this.goTime} className="btn-playpause">
            {this.state.btnGO}
          </button>  
        </div>  
      </div>
    );
  }
}

export default App;
