import { NavLink } from "react-router-dom";

import './global/grid.css'
import './Header.css'
import cart from './assets/cart-icon.svg'
import menuIcon from './assets/menu-icon.svg'
import search from './assets/search-icon.svg'

export default function Header() {
    return (
        <header className='grid-con'>
            <h1 className='col-span-full'>Name of Clothing Brand</h1>

            <section className='navMenu col-span-full grid-con'>
                <div className='hamburgerMenu col-span-1'>
                    <img className='menuIcon' src={menuIcon} alt="Hamburger Menu Icon" />
                </div>

                <nav className='navLinks md:col-span-3 lg:col-span-5'>
                    <ul>
                        <li>
                            <NavLink to="/products">Products</NavLink>
                        </li>
                        <li>
                            <NavLink to="/contact">Contact</NavLink>
                        </li>
                        <li>
                            <NavLink to="/">About</NavLink>
                        </li>
                    </ul>
                </nav>

                <div className='searchBar col-span-3 md:col-start-6 md:col-end-9 lg:col-start-10 lg:col-end-13'>
                    <img className='searchIcon' src={search} alt="Search Icon" />
                    <input type="search" name="productSearch" id="productSearch" placeholder='Search...' />
                    <NavLink to="/shoppingcart">
                        <img className='cartIcon' src={cart} alt="Shopping Cart Icon" />
                    </NavLink>
                </div>
            </section>
        </header>
    )
}