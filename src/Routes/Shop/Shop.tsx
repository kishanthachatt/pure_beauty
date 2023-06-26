import * as React from "react";
import { Helmet } from "react-helmet";

import { Title } from "../../Components/Title";
import { ProductCard } from "./ProductCard";
import { fetchAllProducts } from "../../API/Shop";

import cn from "./Shop.module.scss";
import Loader from "../../Components/Loader";

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
      <Helmet>
        ‍<title></title>‍
        <meta
          name="description"
          content="Find all the best quality products your pet may need"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:site" content="@user" />
        <meta name="twitter:creator" content="@user" />
        <meta name="twitter:title" content="Pets - Products" />
        <meta name="twitter:description" content="Best Products for your pet" />
        <meta name="twitter:image" content="url_to_image" />
        <meta property="og:title" content="Pets - Products" />
        <meta property="og:description" content="Best Products for your pet" />
        <meta property="og:url" content="pets.abc" />
        <meta property="og:site_name" content="Pets - Products" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:type" content="article" />
        <meta property="fb:app_id" content="ID_APP_FACEBOOK" />
      </Helmet>
      <Title title="Shop" />
      <div className={cn.productsListContainer}>
        {loading ? <Loader /> : renderProduts()}
      </div>
    </div>
  );
}
