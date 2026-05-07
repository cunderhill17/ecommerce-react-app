import './global/grid.css'


function CartItem() {
    return (
        <div className='cartItem'>
            <div className='cartImage'>
                <div>Image</div>
                <button>Remove From Cart</button>
            </div>

            <div className='cartItemDetails'>
                <div className='itemName'>
                    <p>Product Name</p>
                    <p>This is where product details will go</p>
                </div>

                <p className='itemCost'>$50.99</p>
            
                <div className='itemQuantity'>
                    <button>-</button>
                    <p>2</p>
                    <button>+</button>
                </div>

                <div className='itemTotal'>
                    <p>Total</p>
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
                <section className='orderSummary col-span-full'>
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
                </section>

                <section className='col-span-full'>
                    <div>
                    <h2>Shopping Cart</h2>
                    <p>3 Items</p> 
                    </div>
                    <hr />

                    <CartItem />
                </section>
            </div>

        </main>
    )
}