import './global/grid.css'
import './ShoppingCart.css'


function CartItem() {
    return (
        <div className='cartItem'>
            <div className='cartImage'>
                <div className='itemImage'></div>
                <button>Remove From Cart</button>
            </div>

            <div className='cartItemDetails'>
                <div className='itemName'>
                    <p>Product Name</p>
                    <p>$50.99</p>
                </div>                
            
                <div className='itemQuantity'>
                    <button>-</button>
                    <p>2</p>
                    <button>+</button>
                </div>

                <div className='itemTotal'>
                    <p className='totalTitle'>Total</p>
                    <p>$101.98</p>
                </div>
            </div>
        </div>
    )
}


export default function ShoppingCart() {
    return (
        <main>
            <div className="grid-con">
                <section className='orderSummary col-span-full md:col-span-4 lg:col-span-4'>
                    <h2>Order Summary</h2>
                    <hr />
                    <div className='orderSubTotal'>
                        <p>Items: 3</p>
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
                        <p>3 Items</p> 
                    </div>
                    <hr />

                    <CartItem />
                    <CartItem />
                    <CartItem />
                </section>
            </div>

        </main>
    )
}