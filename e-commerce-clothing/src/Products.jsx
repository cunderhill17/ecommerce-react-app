import './global/grid.css'
import filter from './assets/filter-icon.svg'







export default function Products() {
    return (
        <main>
            <section className='grid-con'>

                <div className='col-span-full'>
                    <img src={filter} alt="Filter Icon" />
                </div>

                <section className='productCon col-span-full'>

                    <div className='productCard'>
                        <div>Image</div>
                        <div>
                            <p>Product Name</p>
                            <p>Price</p>
                        </div>
                        <div className='ProductColours'>
                            <div>Colors</div>
                            <div>Colors</div>
                            <div>Colors</div>
                        </div>
                        <button>Add To Cart</button>
                    </div>
                    
                </section>

            </section>
        </main>        
    )
}