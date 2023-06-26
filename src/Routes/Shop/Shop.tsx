import * as React from "react";

import { Title } from "../../Components/Title";
import { ProductCard } from "./ProductCard";
import { fetchAllProducts } from "../../API/Shop";

import cn from "./Shop.module.scss";

export function Shop() {
  const dataFetchedRef = React.useRef(false);
  const [products, setProducts] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  React.useEffect(() => {
    if (dataFetchedRef.current) return;
    dataFetchedRef.current = true;
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    setLoading(true);
    const response = await fetchAllProducts();
    if (response.status == 200) {
      setProducts(response.data);
      setLoading(false);
    } else {
      setLoading(false);
    }
  };

  const renderProduts = () => {
    return products.map((item: any) => {
      return (
        <ProductCard
          name={item.name}
          category={item.categories[0].name}
          price={item.price}
          image={item.images[0].src}
        />
      );
    });
  };

  return (
    <div>
      <Title title="Shop" />
      <div className={cn.productsListContainer}>{renderProduts()}</div>
    </div>
  );
}
