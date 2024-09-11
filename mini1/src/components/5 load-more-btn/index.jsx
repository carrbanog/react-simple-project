import { useEffect, useState } from "react";
import "./style.css";

function LoadMoreData() {
  const [loading, setLoading] = useState(false);
  const [count, setCount] = useState(0);
  const [product, setProduct] = useState([]);

  async function fetchProduct() {
    try {
      setLoading(true);
      const response = await fetch(
        `https://dummyjson.com/products?limit=10&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const result = await response.json();
      if (result && result.products && result.products.length){
        setProduct((prevItem) => [...prevItem, ...result.products]);
        setLoading(false);
        console.log(result.products);
      }
    } catch (e) {
      console.log(e);
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchProduct();
  }, [count]);

  if (loading) {
    return <div>Loading data ! Please wait</div>;
  }
  return (
    <div className="load-more-container">
      <div className="product-container">
        {
          product.map((item) => {
            return(
              <div key={item.id} className="product">
                <img 
                  src={item.thumbnail}
                />
                <span>{item.title}</span>
              </div>
            )
          })
        }
      </div>
      <div className="button-container">
        <button onClick={() => setCount(count + 1)}>Load More Data</button>
      </div>
    </div>
  );
}

export default LoadMoreData;
