import React from 'react';
import {Grid} from '@material-ui/core';
import Product from './Product/Product'
const products = [
    {
        id: 1, name:'Shoes', description: 'Running Shoes',price:'$5', img:'https://m.media-amazon.com/images/I/81ntddef-+L._AC_UL1500_.jpg'
    },
    {
        id: 2, name:'Macbook', description: 'Apple macbook',price:'$10', img:'https://cdn.tgdd.vn/Products/Images/44/263915/macbook-pro-14-m1-max-2021-10-core-cpu-32gb-1tb-ssd-32-core-gpu-021221-040129-600x600.jpg'
    },
    {
        id: 3, name:'Iphone', description: 'Iphone 13',price:'$5', img:'https://realsound.jp/wp-content/uploads/2020/05/20200515-iphoneflip.jpg'
    },
    {
        id: 4, name:'Ipad', description: 'Ipad.',price:'$10', img:'https://store.storeimages.cdn-apple.com/8567/as-images.apple.com/is/ipad-mini-select-202109_FMT_WHH?wid=2000&hei=2000&fmt=jpeg&qlt=80&.v=1631751019000'
    },
    {
        id: 5, name:'Keyboard', description: 'Keyboard',price:'$10', img:'https://i.pcmag.com/imagery/roundups/00aE5K1WsINRBBPjHLRHbXV-1..v1569470766.jpg'
    },
    {
        id: 6, name:'Headphones', description: 'Headphones',price:'$10', img:'https://cdn11.bigcommerce.com/s-fa8ae9fe8j/content/pdp_images/1280x1280_4257_9450.jpg'
    }
]

const Products = () => {
    return (    
        <main>
            <Grid container justify="center" spacing={4}>
                    {products.map(product => (
                       <Grid item key={product.id} xs={6} sm={4} md={6} lg={4}>
                           <Product product={product}/>
                       </Grid>
                    )

                    )}
            </Grid>
        </main>
    )
  
}
export default Products;