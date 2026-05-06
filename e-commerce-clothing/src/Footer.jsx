import './global/grid.css'
import './Footer.css'

export default function Footer() {
    return (
        <footer className='grid-con'>

            <section className='col-span-full'>
                <h2 className="footerLogo">Name of Clothing Brand</h2>
                
                <div className='footerAddress'>
                    <p>76 Willow Drive</p>
                    <p>London ON.</p>
                    <p>Canada, N6H1K2</p>
                </div>
                
                <div className='footerNumber'>
                    <p>1 (000) 000-0000</p>
                </div>
            </section>

            <div className='copyright col-span-full'>
                <p>&copy; 2026 Your Brand Name. All rights reserved. Designed with purpose.</p>
            </div>

            <div className='footerPrivacy col-start-2 col-end-3'>
                <p>Privacy</p>
            </div>

            <div className='footerTerms col-start-3 col-end-4'>
                <p>Terms</p>
            </div>
        </footer>
    )
}