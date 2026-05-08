import './global/grid.css'
import './ShoppingCart.css'

import { useOutletContext } from 'react-router-dom'


function CartItem({item, removeFromCart, increaseQuantity, decreaseQuantity}) {
    return (
        <div className='cartItem'>
            <div className='cartImage'>
                <div className='itemImage'></div>
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
    const { cartItems, setCartItems } = useOutletContext();

    let totalQuantity = cartItems.reduce(
        (total, item) => total + Number(item.purchaseQuantity), 0
    )

    let totalCost = cartItems.reduce(
        (total, item) => total + (Number(item.purchaseQuantity) * Number(item.price)), 0
    )

    return (
        <main>
            <div className="grid-con">
                <section className='orderSummary col-span-full md:col-span-4 lg:col-span-4'>
                    <h2>Order Summary</h2>
                    <hr />
                    <div className='orderSubTotal'>
                        <p>Items: {totalQuantity}</p>
                        <p>$ {totalCost}</p>
                    </div>

                    <div className='orderPromo'>
                        <label htmlFor="promoCode">Promo Code</label>
                        <input type="text" />
                        <button>Apply</button>
                    </div>
                    <hr />
                    <div className='orderTotal'>
                        <p>Total Cost</p>
                        <p>$ {(totalCost * 1.13).toFixed(2)}</p>
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