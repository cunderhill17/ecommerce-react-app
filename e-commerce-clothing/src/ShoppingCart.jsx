import './global/grid.css'
import './ShoppingCart.css'

import { useOutletContext } from 'react-router-dom'


function CartItem({item, removeFromCart}) {
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
                    <button>-</button>
                    <p>1</p>
                    <button>+</button>
                </div>

                <div className='itemTotal'>
                    <p className='totalTitle'>Total</p>
                    <p>{item.price}</p>
                </div>
            </div>
        </div>
    )
}

function CartList({cartItems, setCartItems}) {

    function removeFromCart(item) {
        setCartItems(prev => prev.filter(p => p.id !== item.id))
    }

    return (
        <>
            {cartItems.map(item => (
                <CartItem key={item.id} item={item} removeFromCart={removeFromCart}/>
            ))}
        </>
    )

}


export default function ShoppingCart() {
    const { cartItems, setCartItems } = useOutletContext();

    return (
        <main>
            <div className="grid-con">
                <section className='orderSummary col-span-full md:col-span-4 lg:col-span-4'>
                    <h2>Order Summary</h2>
                    <hr />
                    <div className='orderSubTotal'>
                        <p>Items: {cartItems.length}</p>
                        <p>$189.94</p>
                    </div>

                    <div className='orderPromo'>
                        <label htmlFor="promoCode">Promo Code</label>
                        <input type="text" />
                        <button>Apply</button>
                    </div>
                    <hr />
                    <div className='orderTotal'>
                        <p>Total Cost</p>
                        <p>$189.94</p>
                    </div>
                    <button>Check Out</button>
                </section>

                <section className='shoppingCartItems col-span-full md:col-span-4 lg:col-span-8'>
                    <div className='shoppingCartTitle'>
                        <h2>Shopping Cart</h2>
                        <p>{cartItems.length} Items</p> 
                    </div>
                    <hr />

                    <CartList cartItems={cartItems} setCartItems={setCartItems}/>

                </section>
            </div>

        </main>
    )
}