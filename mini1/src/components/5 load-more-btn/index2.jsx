import { useEffect, useState } from "react";
import "./style.css";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [count, setCount] = useState(0);

  async function fetchProducts() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length) {
        setProducts((prevData) => [...prevData, ...result.products]);
        setLoading(false);
      }
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  }

  useEffect(() => {
    fetchProducts();
  }, [count]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }

  return (
    <div className="load-more-container">
      <div className="product-container">
        {products && products.length
          ? products.map((item) => {
              return (
                <div className="product" key={item.id}>
                  <img src={item.thumbnail} alt={item.title} />
                  <p>{item.title}</p>
                </div>
              );
            })
          : null}
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Load More Products</button>
      </div>
    </div>
  );
}

export default LoadMoreData;
