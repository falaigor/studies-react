/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import './app.css';
//https://sujeitoprogramador.com/rn-api/?api=posts


class App extends Component{

    constructor(props){
        super(props);
        this.state = {
            nutricao: []
        };

    }

    componentDidMount(){
        let urlApi = 'https://sujeitoprogramador.com/rn-api/?api=posts';
        fetch(urlApi)
        .then((r)=>r.json())
        .then((json)=>{
          let state = this.state;
            state.nutricao = json;
            this.setState(state);
            console.log(json);
        })
    }

     render(){
        return(
            <div id="page-post">
                <header>
                    <h1>ReactJS Consumo de API</h1>
                </header>

                {this.state.nutricao.map((item)=>{
                    return(
                        <article key={item.id} className="post">
                            <img src={item.capa} className="capa" />

                            <div className="info">
                              <h1> {item.titulo} </h1>
                              <p>{item.subtitulo}</p>
                              <a className="btn" href="/">Acessar</a>
                            </div>

                        </article>
                    );
                })}

            </div>         
        );
    }
}

export default App;