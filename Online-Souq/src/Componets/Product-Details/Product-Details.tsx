import React, { useEffect, useState } from 'react';

import './Product-Details.css';
import axios from 'axios';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import Rating from '@mui/material/Rating';
import CardMedia from '@mui/material/CardMedia';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

function ProductDetails() {

  const [productDetails, setProductDetails] = useState<any>({});

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const productId = params.get('id');
    axios.get('https://fakestoreapi.com/products/' + productId)
      .then(function (response) {
        setProductDetails(response?.data);
        console.log(response?.data)
      })
      .catch(function (error) {
        console.error(error);
      })
  }, []);

  const addToCart = (id: any) => {
    console.log(id)
  }

  return (
    <>
      <Card className='gridItem'>
        <CardMedia
          sx={{ height: 140 }}
          image={productDetails?.image}
          title={productDetails?.category}
          component='img'
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {productDetails?.title}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {productDetails?.description}
          </Typography>
          {/* <Rating name="half-rating-read" defaultValue={productDetails?.rating?.rate} precision={.5} /> */}
        </CardContent>
        <CardActions>
          <Button size="small" className='priceCls' disabled>{productDetails?.price}</Button>
          <Button size="small" onClick={() => {
            addToCart(productDetails?.id)
          }}>Add to cart</Button>
        </CardActions>
      </Card>

    </>
  );
}

export default ProductDetails;
