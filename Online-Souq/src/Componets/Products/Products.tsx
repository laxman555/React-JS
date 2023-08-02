import React, { useEffect, useState } from 'react';
import './Products.css';
import axios from "axios";

import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardActions from '@mui/material/CardActions';
import Button from '@mui/material/Button';

import { getProducts } from '../../Services/product.service';
import { IProduct } from '../../Types/IProduct';
import Grid from '@mui/material/Grid';
import Rating from '@mui/material/Rating';
import { useNavigate } from 'react-router-dom';


function Products() {
  const [data, setProducts] = useState<any>([]);
  const navigate = useNavigate();
  useEffect(() => {
    // let response =  getProducts();
    
    axios.get('https://fakestoreapi.com/products')
      .then(function (response) {
        setProducts(response.data);
        console.log(data);
      })
      .catch(function (error) {
        console.log(error);
      })


  }, []);

  const productDetails = (productId: number) => {
    console.log(productId);
    navigate('productdetails?id='+productId)
  }

  return (
    <>
      <Grid container>
        {data.map((e: any) =>
          <Grid item md={3} key={e?.id}>
            <Card sx={{ maxWidth: 345 }} className='gridItem'>
              <CardMedia
                sx={{ height: 140 }}
                image={e.image}
                title={e.category}
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  {e?.title.slice(0, 25)}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  {e.description.slice(0, 70)}
                </Typography>
                <Rating name="half-rating-read" defaultValue={e?.rating?.rate} precision={.5} readOnly />
              </CardContent>
              <CardActions>
                <Button size="small" className='priceCls' disabled>{e?.price}</Button>
                <Button size="small" onClick={() => {
                  productDetails(e.id)}}>See More</Button>
              </CardActions>
            </Card>
          </Grid>
        )}
      </Grid>
    </>
  );


}

export default Products;
