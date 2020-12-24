import React from 'react';
import { useParams } from 'react-router-dom';

import './product.css';
import '../../styles/animate.css';

import Head from '../../components/Head';

const Product = () => {
  const [product, setProduct] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const [activeImageIndex, setActiveImageIndex] = React.useState(0);

  const { id } = useParams();

  React.useEffect(()=> {
    async function fecthProduct(url){
     try {
      setLoading(true);
      const response = await fetch(url);
      const json = await response.json();
      setProduct(json);
     } catch (erro) {
      setError('Ocorreu um erro')
     } finally {
       setLoading (false)
     }
    }
    fecthProduct(`https://ranekapi.origamid.dev/json/api/produto/${id}`)
  }, [id])

  if (loading) return <div className="loader"></div>
  if (error) return <p>{error}</p>
  if (product === null) return null

  return (
    <section id="page-product" className="animeLeft">
      <Head title={`Ranek | ${product.nome}`} description={product.descricao} />
      
<div className="image-product">
          <img src={product.fotos[activeImageIndex].src} alt={product.nome} />

          <div className="images">
            {product.fotos.map((foto, index) => {
              return (
                <button
                  className={ activeImageIndex === index ? 'active' : ''}
                  key={foto.titulo}
                  type="button"
                  onClick={() => {
                    setActiveImageIndex(index);
                  }}>
                  <img src={foto.src} alt={product.name} />
                </button>
              );
            })}
          </div>
          </div>


      <div className="info">
        <h1>{product.nome}</h1>
        <span>R$ {product.preco}</span>
        <p>{product.descricao}</p>
      </div>
    </section>
  );
};

export default Product;
