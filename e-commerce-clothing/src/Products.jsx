import './global/grid.css'
import './Products.css'
import filter from './assets/filter-icon.svg'





function Filter() {
    return (
        <>
            <details>
                <summary>Category</summary>

                <div className="filterCatCon">
                    <label>
                        <input type="checkbox" name="category" value="tshirts" /> T-Shirts
                    </label>
                    
                    <label>
                        <input type="checkbox" name="category" value="blouse" /> Blouse
                    </label>
                    
                    <label>
                        <input type="checkbox" name="category" value="tanktop" /> Tank Top
                    </label>
                    
                    <label>
                        <input type="checkbox" name="category" value="trousers" /> Trousers
                    </label>
                    
                    <label>
                        <input type="checkbox" name="category" value="slacks" /> Slacks
                    </label>

                    <label>
                        <input type="checkbox" name="category" value="jeans" /> Jeans
                    </label>

                    <label>
                        <input type="checkbox" name="category" value="cardigan" /> Cardigan
                    </label>
                </div>
            </details>

            <details>
                <summary>Price</summary>

                <div className="filterCatCon">
                    <label>
                        <input type="checkbox" name="maxPrice" value="25" /> &lt; 25
                    </label>
                    
                    <label>
                        <input type="checkbox" name="maxPrice" value="50" /> &lt; 50
                    </label>
                    
                    <label>
                        <input type="checkbox" name="maxPrice" value="75" /> &lt; 75
                    </label>
                </div>
            </details>

            <details>
                <summary>Colour</summary>

                <div className='filterCatCon'>
                    <label>
                        <input type="checkbox" name="colour" value="red" /> Red
                    </label>
                    
                    <label>
                        <input type="checkbox" name="colour" value="navy" /> Navy
                    </label>
                    
                    <label>
                        <input type="checkbox" name="colour" value="beige" /> Beige
                    </label>
                </div>
                
            </details>
        </>
        
    )
}



export default function Products() {
    return (
        <main>
            <section className='grid-con'>

                <div className='mobFilter col-span-full'>
                    <img className='filterIcon' src={filter} alt="Filter Icon" />
                </div>

                <div className='tabFilter md:col-span-2 lg:col-span-3'>
                    <Filter/>
                </div>

                <section className='productCon col-span-full md:col-span-6 lg:col-span-9'>

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