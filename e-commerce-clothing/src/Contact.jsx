import './global/grid.css'
import envelope from './assets/envelope-icon.svg'
import map from './assets/map-icon.svg'
import telephone from './assets/telephone-icon.svg'
import facebook from './assets/facebook-icon.svg'
import instagram from './assets/instagram-icon.svg'
import pinterest from './assets/pinterest-icon.svg'

import Newsletter from './Newsletter'

export default function Contact() {
    return (
        <main>
            <section className="grid-con">

                <div className="col-span-full">
                    <h1>Get In Touch</h1>
                    <form action="#">
                        <label htmlFor="fname">First Name</label>
                        <input type="text" placeholder='enter your first name' />

                        <label htmlFor="lname">Last Name</label>
                        <input type="text" placeholder='enter your last name' />

                        <label htmlFor="eml">Email Address</label>
                        <input type="text" placeholder='enter your email address' />

                        <label htmlFor="subj">Subject</label>
                        <input type="text" placeholder='enter subject of message' />

                        <label htmlFor="mssg">Message</label>
                        <textarea name="mssg" id="mssg"></textarea>

                        <label htmlFor="tAndC">
                            <input type="checkbox" name="tAndC" id="tAndC" /> I’ve read and agree with the terms and conditions
                        </label>

                        <button>Submit</button>
                    </form>
                </div>

                <div className="col-span-full">
                    <div className='mapContainer'>
                        <div className='contactMap'>Map</div>

                        <div>
                            <img src={telephone} alt="Telephone Icon" />
                            <p>1 (000) 000-0000</p>
                        </div>

                        <div>
                            <img src={map} alt="Map Icon" />
                            <p>76 Willow Drive, London ON, Canada, N6H1K2</p>
                        </div>

                        <div>
                            <img src={envelope} alt="Envelope Icon" />
                            <p>contact@email.com</p>
                        </div>

                        <div>
                            <h2>Connect With Us</h2>
                            <div className='iconCon'>
                                <a href="#">
                                   <img src={pinterest} alt="Pinterest Icon" /> 
                                </a>
                                
                                <a href="#">
                                   <img src={facebook} alt="Facebook Icon" /> 
                                </a>

                                <a href="#">
                                   <img src={instagram} alt="Instagram Icon" /> 
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Newsletter />
        </main>
    )
}