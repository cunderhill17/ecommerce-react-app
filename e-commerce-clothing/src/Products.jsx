import './global/grid.css'
import './Products.css'
import filter from './assets/filter-icon.svg'







export default function Products() {
    return (
        <main>
            <section className='grid-con'>

                <div className='col-span-full'>
                    <img className='filterIcon' src={filter} alt="Filter Icon" />
                </div>

                <section className='productCon col-span-full'>

                    <div className='productCard'>
                        <div className='productImg'></div>
                        <div className='productDetails'>
                            <p>Product Name</p>
                            <p>Price</p>
                        </div>
                        <div className='productColours'>
                            <div className='colour'></div>
                            <div className='colour'></div>
                            <div className='colour'></div>
                        </div>
                        <button className='addCartBtn'>Add To Cart</button>
                    </div>

                    <div className='productCard'>
                        <div className='productImg'></div>
                        <div className='productDetails'>
                            <p>Product Name</p>
                            <p>Price</p>
                        </div>
                        <div className='productColours'>
                            <div className='colour'></div>
                            <div className='colour'></div>
                            <div className='colour'></div>
                        </div>
                        <button className='addCartBtn'>Add To Cart</button>
                    </div>

                    <div className='productCard'>
                        <div className='productImg'></div>
                        <div className='productDetails'>
                            <p>Product Name</p>
                            <p>Price</p>
                        </div>
                        <div className='productColours'>
                            <div className='colour'></div>
                            <div className='colour'></div>
                            <div className='colour'></div>
                        </div>
                        <button className='addCartBtn'>Add To Cart</button>
                    </div>

                    <div className='productCard'>
                        <div className='productImg'></div>
                        <div className='productDetails'>
                            <p>Product Name</p>
                            <p>Price</p>
                        </div>
                        <div className='productColours'>
                            <div className='colour'></div>
                            <div className='colour'></div>
                            <div className='colour'></div>
                        </div>
                        <button className='addCartBtn'>Add To Cart</button>
                    </div>
                    
                </section>

            </section>
        </main>        
    )
}