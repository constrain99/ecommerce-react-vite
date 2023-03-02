// @ts-check
import Grid from "@mui/material/Grid";

import Product from "./Product/Product";

import classes from './styles.module.css';

const Products = ({ products ,onAddToCart }) => {
  return (
    <main className={classes.content}>
      <div className={classes.toolbar} />

      <Grid container justifyContent="center" spacing={4}>
        {products.map((product) => (
          <Grid item key={product.id} xs={12} sm={6} md={4} lg={3}>
            <Product product={product } onAddToCart={onAddToCart} />
          </Grid>
        ))}
      </Grid>
    </main>
  );
};

export default Products;
