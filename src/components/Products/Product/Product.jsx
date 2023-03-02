// @ts-check
import AddShoppingCart from "@mui/icons-material/AddShoppingCart";

import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import classes from "./styles.module.css";

const Product = ({ product, onAddToCart }) => {
  return (
    <Card className={classes.root}>
      <CardMedia
        className={classes.media}
        image={product.image.url}
        title={product.name}
      />
      <CardContent>
        <div className={classes.cardContent}>
          <Typography component="h5" gutterBottom>
            {product.name}
          </Typography>
          <Typography component="h5">
            {product.price.formatted_with_code}
          </Typography>
        </div>
        <div>
          <Typography
            dangerouslySetInnerHTML={{ __html: product.discription }}
            component="h2"
            color="textSecondary"
          />
        </div>
      </CardContent>
      <CardActions disableSpacing className={classes.cardActions}>
        <IconButton
          aria-label="Add to Cart"
          onClick={() => onAddToCart(product.id, 1)}
        >
          <AddShoppingCart />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Product;
