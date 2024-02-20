import React from "react";
import { ProductType } from "./Product.types";
import axiosWebClient from "../../services/axiosWebClient";
import { Box, Button, LinearProgress } from "@mui/material";
import ProductCard from "./ProductCard";
import { useAppDispatch } from "../../redux";
import { clearCart } from "./Product.slice";

const Proudcts: React.FC = () => {
  const [products, setProducts] = React.useState<ProductType[]>([]);
  const [loading, setLoading] = React.useState<boolean>(false);
  const dispach = useAppDispatch();

  const getData = () => {
    setLoading(true);

    axiosWebClient
      .get("products")
      .then((response) => setProducts(response.data))
      .finally(() => {
        setLoading(false);
      });
  };

  const handleClearCart = () => {
    dispach(clearCart());
  };

  React.useEffect(() => {
    getData();
  }, []);

  if (loading) {
    return <LinearProgress />;
  }

  return (
    <>
      <Button onClick={handleClearCart}>Clear Cart</Button>
      {products.map((product) => {
        return (
          <Box sx={{ p: 3 }}>
            <ProductCard {...product} />
          </Box>
        );
      })}
    </>
  );
};

export default Proudcts;
