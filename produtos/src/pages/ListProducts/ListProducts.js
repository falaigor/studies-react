import React from 'react';
import Head from '../../components/Head';

import './listProducts.css';
import '../../styles/animate.css';
import { Link } from 'react-router-dom';

const ListProducts = () => {

  const [produtos, setProdutos] = React.useState(null);

  React.useEffect(() => {
    fetch('https://ranekapi.origamid.dev/json/api/produto')
      .then((response) => response.json())
      .then((json) => setProdutos(json));
  }, []);

  if (produtos === null) return null
  return (
    <div id="page-list-products" className="animeLeft">
      <Head title="Ranek | Produtos" description="Todos os nossos produtos" />
      {produtos.map((produto) => (
        <Link to={`product/${produto.id}`} key={produto.id}>
          <img src={produto.fotos[0].src} alt={produto.fotos[0].titulo}/>
          <h1>{produto.nome}</h1>
        </Link>
      ))}
      
    </div>
  );
};

export default ListProducts;
