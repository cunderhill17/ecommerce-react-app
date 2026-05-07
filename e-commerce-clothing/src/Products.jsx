import './global/grid.css'
import './Products.css'
import productsData from './data/products.json'
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


function ProductList({products}) {
    return (
        <>
            {products.map(p => (
                <ProductCard key={p.id} p={p} />
            ))}
        </>
    )
}


function ProductCard({p}) {

    return (    
        <div className='productCard'>
            <div className='productImg'></div>
            <div className='productDetails'>
                <p>{p.name}</p>
                <p>{p.price}</p>
            </div>
            <div className='productColours'>
                {p.colours.map((colour, i) => (
                    <div key={i} className='colour' style={{ backgroundColor: colour}}></div>
                ))}
            </div>
            <button className='addCartBtn'>Add To Cart</button>
        </div>
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
                    <ProductList products={productsData}/>
                </section>

            </section>
        </main>        
    )
}