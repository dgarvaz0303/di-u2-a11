import { useState } from 'react';

const initialProducts = [{
  id: 0,
  name: 'Baklava',
  count: 1,
}, {
  id: 1,
  name: 'Queso',
  count: 5,
}, {
  id: 2,
  name: 'Espaguetis',
  count: 2,
}];

export default function ShoppingCart() {
  const [
    products,
    setProducts
  ] = useState(initialProducts)

  function handleIncreaseClick(productId) {
    setProducts(products.map(product => {
      if (product.id === productId) {
        return {
          ...product,
          count: product.count + 1
        };
      } else {
        return product;
      }
    }))
  }
  function handleDecreseClick(productId) {
    const product = products.find(p => p.id === productId);
      const nuevaListaProducts=products.map(product => {
      if (product.id === productId && product.count > 1) {
        let productNuevo={...product, count:product.id-1}
        return productNuevo;
      }
      else {
        return product;
      }
    })
    const listaFinal=nuevaListaProducts.filter(product=>product.count>0)
    setProducts(listaFinal)
    }
    
  

  return (
    <ul>
      {products.map(product => (
        <li key={product.id}>
          {product.name}
          {' '}
          (<b>{product.count}</b>)
          <button onClick={() => {
            handleIncreaseClick(product.id);
          }}>
            +
          </button>
          <button onClick={() => {
            handleDecreseClick(product.id);
          }}>
            –
          </button>
        </li>
      ))}
    </ul>
  );
}
