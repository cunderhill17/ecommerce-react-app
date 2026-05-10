import { useState, useEffect } from 'react'
import { useOutletContext } from 'react-router-dom'

import './global/grid.css'
import './Products.css'
// import productsData from './data/products.json'
import filter from './assets/filter-icon.svg'





function Filter({setCategory, setMaxPrice, setColour}) {

    function updateFilters(setFilterValue, e) {
        setFilterValue(e.target.value);
    }

    return (
        <>
            <details>
                <summary>Category</summary>

                <div className="filterCatCon">
                    <label>
                        <input type="radio" name="category" value="" onChange={(event) => updateFilters(setCategory, event)}/> All Categories
                    </label>
                    
                    <label>
                        <input type="radio" name="category" value="tshirt" onChange={(event) => updateFilters(setCategory, event)}/> T-Shirts
                    </label>
                    
                    <label>
                        <input type="radio" name="category" value="blouse" onChange={(event) => updateFilters(setCategory, event)}/> Blouse
                    </label>
                    
                    <label>
                        <input type="radio" name="category" value="tanktop" onChange={(event) => updateFilters(setCategory, event)}/> Tank Top
                    </label>
                    
                    <label>
                        <input type="radio" name="category" value="trousers" onChange={(event) => updateFilters(setCategory, event)}/> Trousers
                    </label>
                    
                    <label>
                        <input type="radio" name="category" value="slacks" onChange={(event) => updateFilters(setCategory, event)}/> Slacks
                    </label>

                    <label>
                        <input type="radio" name="category" value="jeans" onChange={(event) => updateFilters(setCategory, event)}/> Jeans
                    </label>

                    <label>
                        <input type="radio" name="category" value="cardigan" onChange={(event) => updateFilters(setCategory, event)}/> Cardigan
                    </label>
                </div>
            </details>

            <details>
                <summary>Price</summary>

                <div className="filterCatCon">
                    <label>
                        <input type="radio" name="maxPrice" value="" onChange={(event) => updateFilters(setMaxPrice, event)}/> All Prices
                    </label>

                    <label>
                        <input type="radio" name="maxPrice" value="25" onChange={(event) => updateFilters(setMaxPrice, event)}/> &lt; 25
                    </label>
                    
                    <label>
                        <input type="radio" name="maxPrice" value="50" onChange={(event) => updateFilters(setMaxPrice, event)}/> &lt; 50
                    </label>
                    
                    <label>
                        <input type="radio" name="maxPrice" value="75" onChange={(event) => updateFilters(setMaxPrice, event)}/> &lt; 75
                    </label>
                </div>
            </details>

            <details>
                <summary>Colour</summary>

                <div className='filterCatCon'>
                    <label>
                        <input type="radio" name="colour" value="" onChange={(event) => updateFilters(setColour, event)}/> All Colours
                    </label>

                    <label>
                        <input type="radio" name="colour" value="red" onChange={(event) => updateFilters(setColour, event)}/> Red
                    </label>
                    
                    <label>
                        <input type="radio" name="colour" value="navy" onChange={(event) => updateFilters(setColour, event)}/> Navy
                    </label>
                    
                    <label>
                        <input type="radio" name="colour" value="beige" onChange={(event) => updateFilters(setColour, event)}/> Beige
                    </label>
                </div>
                
            </details>
        </>
        
    )
}


export function ProductList({products, cartItems, setCartItems}) {
    function addToCart(p) {

        const existingItem = cartItems.find(item => item.id === p.id);

        if(existingItem) {
            setCartItems(prev => prev.map(
                item => item.id === p.id 
                ? {
                    ...item, purchaseQuantity: Number(item.purchaseQuantity) + 1
                } : item
            ));
        } else {
            setCartItems(prev => [...prev, p]);
        }

        
    }

    return (
        <>
            {products.map(p => (
                <ProductCard key={p.id} p={p} addToCart={addToCart}/>
            ))}
        </>
    )
}


function ProductCard({p, addToCart}) {

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
            <button className='addCartBtn' onClick={() => addToCart(p)}>Add To Cart</button>
        </div>
    )
}


export default function Products() {
    // const originalProducts = productsData;
    const { cartItems, setCartItems, originalProducts } = useOutletContext();

    const [filteredProducts, setFilteredProducts] = useState(originalProducts);

    const [category, setCategory] = useState('');
    const [maxPrice, setMaxPrice] = useState('');
    const [colour, setColour] = useState('');

    useEffect(() => {
        let newFiltered = originalProducts;

        if(category != '') {
           newFiltered = newFiltered.filter(p => p.category === category);
        }

        if(maxPrice != '') {
            newFiltered = newFiltered.filter(p => Number(p.price) <= Number(maxPrice));
        }

        if(colour != '') {
            newFiltered = newFiltered.filter(p => p.colours.includes(colour));
        }

        setFilteredProducts(newFiltered);

    }, [category, maxPrice, colour])

    return (
        <main>
            <section className='grid-con'>

                <div className='mobFilter col-span-full'>
                    <img className='filterIcon' src={filter} alt="Filter Icon" />
                </div>

                <div className='tabFilter md:col-span-2 lg:col-span-3'>
                    <Filter setCategory={setCategory} setMaxPrice={setMaxPrice} setColour={setColour} />
                </div>

                <section className='productCon col-span-full md:col-span-6 lg:col-span-9'>
                    <ProductList products={filteredProducts} cartItems={cartItems} setCartItems={setCartItems}/>
                </section>

            </section>
        </main>        
    )
}