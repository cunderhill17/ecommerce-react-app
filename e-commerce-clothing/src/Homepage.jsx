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

            <section className="grid-con">
                <h2 className="col-span-full">Best Sellers</h2>
                <div className="bestSellerCon col-span-full">
                    <ProductList products={bestsellers} cartItems={cartItems} setCartItems={setCartItems}/>
                </div>
            </section>

            <Newsletter />
        </main>
    )
}