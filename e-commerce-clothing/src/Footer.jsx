import { NavLink } from "react-router-dom";

import './global/grid.css'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='grid-con'>

            <section className='col-span-full md:col-span-4'>
                <NavLink to="/" className="footerLogo">
                    <h2>Novaire & Co.</h2>
                </NavLink>
                
                
                <div className='footerAddress'>
                    <p>76 Willow Drive</p>
                    <p>London ON.</p>
                    <p>Canada, N6H1K2</p>
                </div>
                
                <div className='footerNumber'>
                    <p>1 (000) 000-0000</p>
                </div>
            </section>

            <section className='footerQuickLinks col-span-2'>
                <h2>Quick Links</h2>
                <ul>
                    <li><NavLink to='/products'>Products</NavLink></li>
                    <li><NavLink to='/contact'>Contact</NavLink></li>
                    <li><NavLink>About</NavLink></li>
                </ul>
            </section>

            <section className="footerSocialMedia col-span-2">
                <h2>Stay In Touch</h2>
                <ul>
                    <li><a href="#">Facebook</a></li>
                    <li><a href="#">Instagram</a></li>
                    <li><a href="#">YouTube</a></li>
                </ul>
            </section>

            <div className='copyright col-span-full md:col-span-5'>
                <p>&copy; 2026 Your Brand Name. All rights reserved. Designed with purpose.</p>
            </div>

            <div className='footerPrivacy col-start-2 col-end-3 md:col-start-7 md:col-end-8 lg:col-start-11 lg:col-end-12'>
                <p>Privacy</p>
            </div>

            <div className='footerTerms col-start-3 col-end-4 md:col-start-8 md:col-end-9 lg:col-start-12 lg:col-end-13'>
                <p>Terms</p>
            </div>
        </footer>
    )
}