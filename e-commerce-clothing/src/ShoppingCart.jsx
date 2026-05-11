import './global/grid.css'
import './ShoppingCart.css'

import { useOutletContext } from 'react-router-dom'
import { useRef, useEffect, useState } from "react";


function CartItem({item, removeFromCart, increaseQuantity, decreaseQuantity}) {
    return (
        <div className='cartItem'>
            <div className='cartImage'>
                <img className='itemImage' src={item.url} alt={item.description} />
                <button onClick={() => removeFromCart(item)}>Remove From Cart</button>
            </div>

            <div className='cartItemDetails'>
                <div className='itemName'>
                    <p>{item.name}</p>
                    <p>{item.price}</p>
                </div>                
            
                <div className='itemQuantity'>
                    <button onClick={() => decreaseQuantity(item)}>-</button>
                    <p>{item.purchaseQuantity}</p>
                    <button onClick={() => increaseQuantity(item)}>+</button>
                </div>

                <div className='itemTotal'>
                    <p className='totalTitle'>Total</p>
                    <p>$ {(Number(item.price) * Number(item.purchaseQuantity)).toFixed(2)}</p>
                </div>
            </div>
        </div>
    )
}

function CartList({cartItems, setCartItems}) {

    function removeFromCart(item) {
        setCartItems(prev => prev.filter(p => p.id !== item.id))
    }

    function increaseQuantity(item) {
        setCartItems(prev => prev.map(
            p => p.id === item.id 
            ? {
                ...p, purchaseQuantity: Number(p.purchaseQuantity) + 1
            } : p
        ));
    }

    function decreaseQuantity(item) {
        if (Number(item.purchaseQuantity) > 1) {
            setCartItems(prev => prev.map(
                p => p.id === item.id 
                ? {
                    ...p, purchaseQuantity: Number(p.purchaseQuantity) - 1
                } : p
            ));
        }
    }

    return (
        <>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart} increaseQuantity={increaseQuantity} decreaseQuantity={decreaseQuantity}/>
            ))}
        </>
    )

}


export default function ShoppingCart() {
    const { cartItems, setCartItems, usedPromo, setUsedPromo } = useOutletContext();
    const promoCodes = [
        {
            "name": "promo10",
            "value": 0.10
        },
        {
            "name": "promo15",
            "value": 0.15
        }
    ];

    const myRef = useRef(null);

    const totalQuantity = cartItems.reduce(
        (total, item) => total + Number(item.purchaseQuantity), 0
    )

    const subtotal = cartItems.reduce(
            (total, item) => total + (Number(item.purchaseQuantity) * Number(item.price)), 0
        );
    
    const discountedTotal = usedPromo.used 
        ? subtotal - (subtotal * usedPromo.value)
        : subtotal;
        
    const finalTotal = discountedTotal * 1.13;
        
    function applyPromo() {
        const userPromo = promoCodes.find(promo => promo.name === myRef.current.value.trim().toLowerCase())

        if (userPromo && !usedPromo.used) {
            setUsedPromo({
                "used": true,
                "name": userPromo.name,
                "value": userPromo.value
            })
        }
    }

    return (
        <main>
            <div className="grid-con">
                <section className='orderSummary col-span-full md:col-span-4 lg:col-span-4'>
                    <h2>Order Summary</h2>
                    <hr />
                    <div className='orderSubTotal'>
                        <p>Items: {totalQuantity}</p>
                        <p>$ {discountedTotal.toFixed(2)}</p>
                    </div>

                    <div className='orderPromo'>
                        <label htmlFor="promoCode">Promo Code</label>
                        <input ref={myRef} type="text" />
                        <button onClick={applyPromo}>Apply</button>
                        {
                            usedPromo.used ? <p>Promo Code Used: {usedPromo.name}</p> : <p>No Promo Code has been used</p>
                        }
                    </div>
                    <hr />
                    <div className='orderTotal'>
                        <p>Total Cost</p>
                        <p>$ {finalTotal.toFixed(2)}</p>
                    </div>
                    <button>Check Out</button>
                </section>

                <section className='shoppingCartItems col-span-full md:col-span-4 lg:col-span-8'>
                    <div className='shoppingCartTitle'>
                        <h2>Shopping Cart</h2>
                        <p>{totalQuantity} Items</p> 
                    </div>
                    <hr />

                    <CartList cartItems={cartItems} setCartItems={setCartItems}/>

                </section>
            </div>

        </main>
    )
}