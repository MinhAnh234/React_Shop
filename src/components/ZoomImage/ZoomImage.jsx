import './style.css'
import * as React from 'react';

import { } from '@material-ui/core';
import Card from '@mui/material/Card';
import { Button, CardActions,CardMedia, CardContent, Typography, IconButton } from '@material-ui/core';
import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import Rating from '@mui/material/Rating';
import { AddShoppingCart } from '@material-ui/icons';
const ZoomImage = ({ products, onAddToCart}) => {

  let Params = useParams();
  const rl = products.filter(product =>
    product.id == Params.id
  )
  const [value, setValue] = React.useState(5);
  const checkImage = document.getElementById("myimage");

  useEffect(() => {
    imageZoom("myimage", "myresult");
  }, [checkImage])



  function imageZoom(imgID, resultID) {
    var img, lens, result, cx, cy;
    img = document.getElementById(imgID);

    if (img === null) {
      console.log("loading...")
      return "loading...."
    }
    result = document.getElementById(resultID);

    /*create lens:*/
    lens = document.createElement("DIV");
    let paras = document.getElementsByClassName('img-zoom-lens');
    while (paras[0]) {
      paras[0].parentNode.removeChild(paras[0]);
    }
    lens.setAttribute("class", "img-zoom-lens");
    /*insert lens:*/
    img.parentElement.insertBefore(lens, img);

    /*calculate the ratio between result DIV and lens:*/
    cx = result.offsetWidth / lens.offsetWidth;
    cy = result.offsetHeight / lens.offsetHeight;
    /*set background properties for the result DIV:*/
    result.style.backgroundImage = "url('" + img.src + "')";
    result.style.backgroundSize = (img.width * cx) + "px " + (img.height * cy) + "px";
    /*execute a function when someone moves the cursor over the image, or the lens:*/
    lens.addEventListener("mousemove", moveLens);
    img.addEventListener("mousemove", moveLens);
    /*and also for touch screens:*/
    lens.addEventListener("touchmove", moveLens);
    img.addEventListener("touchmove", moveLens);
    function moveLens(e) {
      var pos, x, y;
      /*prevent any other actions that may occur when moving over the image:*/
      e.preventDefault();
      /*get the cursor's x and y positions:*/
      pos = getCursorPos(e);
      /*calculate the position of the lens:*/
      x = pos.x - (lens.offsetWidth / 2);
      y = pos.y - (lens.offsetHeight / 2);
      /*prevent the lens from being positioned outside the image:*/
      if (x > img.width - lens.offsetWidth) { x = img.width - lens.offsetWidth; }
      if (x < 0) { x = 0; }
      if (y > img.height - lens.offsetHeight) { y = img.height - lens.offsetHeight; }
      if (y < 0) { y = 0; }
      /*set the position of the lens:*/
      lens.style.left = x + "px";
      lens.style.top = y + "px";
      /*display what the lens "sees":*/
      result.style.backgroundPosition = "-" + (x * cx) + "px -" + (y * cy) + "px";
    }
    function getCursorPos(e) {
      var a, x = 0, y = 0;
      e = e || window.event;
      /*get the x and y positions of the image:*/
      a = img.getBoundingClientRect();
      /*calculate the cursor's x and y coordinates, relative to the image:*/
      x = e.pageX - a.left;
      y = e.pageY - a.top;
      /*consider any page scrolling:*/
      x = x - window.pageXOffset;
      y = y - window.pageYOffset;
      return { x: x, y: y };
    }
  }

  imageZoom("myimage", "myresult");
  

  return <div style={{ backgroundColor: 'rgb(231, 235, 240)', height: '100vh', 'min-height':'1000px' }}>
    <Button  variant="contained" color="primary" component={Link} to="/" className="back_button"><ArrowBackIcon />Back</Button>
    <div className="warrapZoom">
      <div className="img-zoom-container">
        <img id="myimage" src={rl[0].image.url} alt="product" width="100%" />
        <div id="myresult" className="img-zoom-result"></div>
      </div>
      <Card sx={{width:500, height: 560 }} style={{ margin: '13px' }} >
     
          <CardMedia
            component="img"
            height="300"
            image={rl[0].image.url}
            alt="green iguana"
          />
       
          <CardContent>
          <div className="cardContent">
          <Typography gutterBottom variant="h5" component="div">
              {rl[0].name}
            </Typography>
            <Typography  variant="h6" > Price:
              <span  style={{ color: 'black' }}> {rl[0].price.formatted_with_code} </span>
            </Typography>
          </div>
          <Typography  dangerouslySetInnerHTML={{ __html: rl[0].description }} color="textSecondary"></Typography>
          <div className="cardContent">
          <Typography  >Rating: </Typography>
          <Button color="primary" className="fl_right" variant="outlined" onClick={() => onAddToCart(rl[0].id, 1)}> <AddShoppingCart />ADD TO CART</Button>
          </div>
          
           
         
            <Rating
              name="simple-controlled"
              value={value}
              onChange={(event, newValue) => {
                setValue(newValue);
              }}
            />
            <Typography>
            Shipping countries: <br/> 
               <img className="country" src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Flag_of_Canada_%28Pantone%29.svg/1200px-Flag_of_Canada_%28Pantone%29.svg.png"  alt="canada" width="50px" height="25px" />
               <img className="country" src="https://upload.wikimedia.org/wikipedia/en/a/a4/Flag_of_the_United_States.svg" margin="normal" alt="america" width="50px" height="25px" />
               <img className="country" src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/fc/Flag_of_Mexico.svg/1200px-Flag_of_Mexico.svg.png" margin="normal" alt="Mexico" width="50px" height="25px" />
               <img className="country" src="https://upload.wikimedia.org/wikipedia/commons/b/be/Flag_of_England.svg" margin="normal" alt="England" width="50px" height="25px" />


            </Typography>
           
           
          </CardContent>
     
      </Card>


    </div>

  </div>;
};

export default ZoomImage;
