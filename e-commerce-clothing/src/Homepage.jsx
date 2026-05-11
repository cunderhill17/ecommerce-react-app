import { useOutletContext, NavLink } from 'react-router-dom'
import { useState } from 'react';

import Newsletter from "./Newsletter"
import { ProductList } from "./Products";
import './global/grid.css'
import './Homepage.css'

export default function Homepage() {
    let carouselArray = [
        '/images/carousel/carousel-1.jpg', 
        '/images/carousel/carousel-2.jpg', 
        '/images/carousel/carousel-3.jpg', 
        '/images/carousel/carousel-4.jpg'
    ];

    const [currentCarouselImg, setCurrentCarouselImg] = useState(carouselArray[0]);
    const { cartItems, setCartItems, originalProducts } = useOutletContext();

    const bestsellers = originalProducts.filter(p => p.bestSeller === true);

    function updateCarousel(e) {
        let currentCarouselIndex = Number(e.target.value);

        setCurrentCarouselImg(carouselArray[currentCarouselIndex]);
    }

    return (

        <main>

            <section className="hero-section grid-con">
                <div className='hero-section-cta col-span-full'>
                    <p>Crafted for Everyday Icons</p>
                    <h2>WEAR CONFIDENCE</h2>
                    <p>Timeless essentials designed with precision, comfort, and modern elegance.</p>
                    <NavLink to='/products'>Start Shopping</NavLink>
                </div>
            </section>

            <section className="grid-con">
                <h2 className="col-span-full">Best Sellers</h2>
                <div className="bestSellerCon col-span-full">
                    <ProductList products={bestsellers} cartItems={cartItems} setCartItems={setCartItems}/>
                </div>
            </section>

            <section className="bannerImageCon grid-con">
                <img className='bannerImage col-span-full' src="/images/banners/banner-1.jpg" alt="Fashion throughout the seasons" />
            </section>

            <section className="carousel grid-con">
                <img className='carouselImg col-span-full md:col-span-2 lg:col-span-3' src={currentCarouselImg} alt="Placeholder" />

                <div className='carouselBtns'>
                    {
                        carouselArray.map((_, index) => (
                            <input 
                                key={index}
                                type='radio'
                                name='imageSelect'
                                value={index}
                                onChange={updateCarousel}
                            />
                        ))
                    }
                </div>
            </section>

            <section className="imageGrid grid-con">
                {
                    carouselArray.map((img, index) => (
                        <img key={index} className='imageGridImg col-span-full md:col-span-2 lg:col-span-3' src={img} alt='Placeholder'/>
                    ))
                }
            </section>


            <Newsletter />
        </main>
    )
}