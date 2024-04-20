import { useEffect, useState, useCallback } from "react";
import { useFetch } from "../hooks/useFetch";

export const ProductList = () => {
  // const [products, setProducts] = useState([]);
  // console.log(products);
  const [url, setUrl] = useState("http://localhost:8000/products");

  const { data: products, loading, error } = useFetch(url);

  // useEffect(() => {
  //   fetch(url)
  //     .then((response) => response.json())
  //     .then((data) => setProducts(data));
  // }, [url]);

  // const fetchProducts = useCallback(async () => {
  //   const response = await fetch(url);
  //   const { data: products } = await response.json();
  //   setProducts(data);
  // }, [url]);

  // useEffect(() => {
  //   fetchProducts();
  //   console.log("-");
  // }, [fetchProducts]);

  return (
    <div>
      <section>
        <div className="filter">
          <button onClick={() => setUrl("http://localhost:8000/products")}>
            All
          </button>
          <button
            onClick={() => setUrl("http://localhost:8000/products?in_stock=1")}
          >
            In Stock
          </button>
        </div>
        {loading && <p>Loading the data buddy .......</p>}
        {error && <p>Error fetching data {error}</p>}
        {products &&
          products.map((product) => {
            return (
              <div className="card" key={product.id}>
                <p className="id">{product.id}</p>
                <p className="name">{product.name}</p>
                <p className="info">
                  <span>${product.price}</span>
                  <span
                    className={product.in_stock ? "instock" : "unavailable"}
                  >
                    {product.in_stock ? "In Stock" : "Unavailable"}
                  </span>
                </p>
              </div>
            );
          })}
      </section>
    </div>
  );
};
