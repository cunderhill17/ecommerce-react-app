import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'
import productsData from './data/products.json'

import Header from './header'
import Footer from './Footer'
import Homepage from './Homepage'
import Contact from './Contact'
import Products from './Products'
import ShoppingCart from './ShoppingCart'


function AppLayout() {
    const originalProducts = productsData;

    const [cartItems, setCartItems] = useState([]);
    const [usedPromo, setUsedPromo] = useState({
        "used": false,
        "name": "",
        "value": 0
    });

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <>
            <Header cartItems={cartItems}/>         
            <Outlet context={{ cartItems, setCartItems, usedPromo, setUsedPromo, originalProducts }}/>
            <Footer />         
        </>
    )
}


const router = createBrowserRouter([
    { 
        element: <AppLayout />,

        children: [
            { path: '/',          element: <Homepage /> },
            { path: '/products',     element: <Products /> },
            { path: '/contact',     element: <Contact />},
            { path: '/shoppingcart', element: <ShoppingCart /> }
        ]
    }
])



function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
