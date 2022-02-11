import React, { useState, useEffect } from 'react';

import { Navbar, Products, Cart, Checkout} from './components';
import ZoomImage from './components/ZoomImage/ZoomImage'
import { commerce } from './lib/commerce';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useParams } from "react-router-dom";
import Footer from "./components/Footer/Footer"
const App= () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState({});
    const [footer, setFooter] = useState(false)
    const fetchProducts = async () => {
        const { data } = await commerce.products.list();
        setFooter(true);
        setProducts(data);
      };
      const fetchCart = async () => {
        setCart(await commerce.cart.retrieve());
      };
    
      const handleAddToCart = async (productId, quantity) => {
        const item = await commerce.cart.add(productId, quantity);
    
        setCart(item.cart);
      };
    
      const handleUpdateCartQty = async (productId, {quantity}) => {
        const item = await commerce.cart.update(productId, {quantity});
        setCart(item.cart);
      };

      const handleRemoveFromCartQty = async (productId) => {
        const item = await commerce.cart.remove(productId);
        setCart(item.cart);
      };

      const handleEmptyFromCartQty = async () => {
        const item = await commerce.cart.empty();
        setCart(item.cart);
      };

        useEffect(() => {
            fetchProducts();
            fetchCart();
        }, []);
 return (
   
     <Router>
       <div style={{ backgroundColor: 'rgb(231, 235, 240)', height:'100vh' }}>
     
       
        <Navbar total_items={cart.total_items}/>
            <Routes>    
                       <Route  path="/zoom/:id" element={<ZoomImage products = {products} onAddToCart={handleAddToCart} /> }/>
                        <Route  path="/" caseSensitive={false} element={<Products products = {products} onAddToCart={handleAddToCart}></Products> }/>
                        <Route  path="/cart" element={ <Cart 
                                cart={cart}  
                                handleRemoveFromCartQty = { handleRemoveFromCartQty}
                                handleUpdateCartQty     = {handleUpdateCartQty}                                    
                                handleEmptyFromCartQty  = {handleEmptyFromCartQty}
                        />} /> 
                        <Route path="/checkout" element={<Checkout cart={cart} />}  />
            </Routes>
            {footer && <Footer/> }
        </div>
    </Router> 
   
   
   
 )   
}
export default App;