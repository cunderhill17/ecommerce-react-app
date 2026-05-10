import { useOutletContext } from 'react-router-dom'

import Newsletter from "./Newsletter"
import { ProductList } from "./Products";
import './global/grid.css'
import './Homepage.css'

export default function Homepage() {
    const { cartItems, setCartItems, originalProducts } = useOutletContext();

    const bestsellers = originalProducts.filter(p => p.bestSeller === true);

    return (
        <main>

            <section className="hero-section grid-con">
                <div className='hero-section-cta col-span-3 md:col-span-4 lg:col-span-7'>
                    <p>Small Text</p>
                    <h2>Larger Heading</h2>
                    <p>Details for the heading</p>
                    <button>Start Shopping</button>
                </div>

                <div className='verticalImages md:col-span-4 lg:col-span-5'>
                    <div className='image1'></div>
                    <div className='image2'></div>
                </div>

                <div className='horizontalImages col-span-full md:col-span-4 lg:col-span-7'>
                    <div></div>
                </div>
            </section>

            <section className="grid-con">
                <h2 className="col-span-full">Best Sellers</h2>
                <div className="bestSellerCon col-span-full">
                    <ProductList products={bestsellers} cartItems={cartItems} setCartItems={setCartItems}/>
                </div>
            </section>

            <section className="bannerImageCon grid-con">
                <div className='bannerImage col-span-full'></div>
            </section>

            <section className="carousel grid-con">
                <div className="carouselImg col-span-full md:col-span-2 lg:col-span-3"></div>
                <div className="carouselImg col-span-full md:col-span-2 lg:col-span-3"></div>
                <div className="carouselImg col-span-full md:col-span-2 lg:col-span-3"></div>
                <div className="carouselImg col-span-full md:col-span-2 lg:col-span-3"></div>
            </section>

            <Newsletter />
        </main>
    )
}