import React from 'react';
import Radio from './Form/Radio';

import './App.css';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criarmos um hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const App = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function resultadoFinal() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou: ${corretas.length} de ${perguntas.length}`);
  }

  function handleClick() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      resultadoFinal();
    }
  }

  return (
    <div id="page-quiz">
      <main>
        {resultado ? (
          <div className="result">
            <div className="congratulations">
              <h1>Parabéns!</h1>
              <p>Você completou o questionário</p>
            </div>

            <p>{resultado}</p>

            <button className="next">Começar Novamente</button>
          </div>
        ) : (
          <form onSubmit={(event) => event.preventDefault()}>
            {perguntas.map((pergunta, index) => (
              <Radio
                active={slide === index}
                key={pergunta.id}
                value={respostas[pergunta.id]}
                onChange={handleChange}
                {...pergunta}
              />
            ))}

            <button className="next" onClick={handleClick}>
              Próxima
            </button>
          </form>
        )}
      </main>
    </div>
  );
};

export default App;
