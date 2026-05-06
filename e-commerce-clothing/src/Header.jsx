import './global/grid.css'
import cart from './assets/cart-icon.svg'
import menuIcon from './assets/menu-icon.svg'
import search from './assets/search-icon.svg'

export default function Header() {
    return (
        <header className='grid-con'>
            <h1 className='col-span-full'>Name of Clothing Brand</h1>

            <section className='col-span-full grid-con'>
                <div className='hamburgerMenu col-span-1'>
                    <img src={menuIcon} alt="Hamburger Menu Icon" />
                </div>

                <div className='searchBar col-span-3'>
                    <img src={search} alt="Search Icon" />
                    <input type="search" name="productSearch" id="productSearch" />
                    <img src={cart} alt="Shopping Cart Icon" />
                </div>
            </section>
        </header>
    )
}