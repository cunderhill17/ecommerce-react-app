import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
import { useState, useEffect } from 'react'
import './App.css'

import Header from './header'
import Footer from './Footer'
import Homepage from './Homepage'
import Contact from './Contact'
import Products from './Products'
import ShoppingCart from './ShoppingCart'


function AppLayout() {
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        console.log(cartItems);
    }, [cartItems]);

    return (
        <>
            <Header cartItems={cartItems}/>         
            <Outlet context={{ cartItems, setCartItems }}/>
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
