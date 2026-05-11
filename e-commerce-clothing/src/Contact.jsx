import './global/grid.css'
import './Contact.css'

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
            <section className="mainContactSection grid-con">

                <div className="contactForm col-span-full md:col-span-4 lg:col-span-6">
                    <h2>Get In Touch</h2>
                    <form action="#">

                        <div className='conFullName'>
                            <div className='conName'>
                                <label htmlFor="fname">First Name</label>
                                <input className='inputHalf' type="text" placeholder='enter your first name' />
                            </div>

                            <div className='conName'>
                                <label htmlFor="lname">Last Name</label>
                                <input className='inputHalf' type="text" placeholder='enter your last name' />
                            </div>  
                        </div>

                        <label htmlFor="eml">Email Address</label>
                        <input className='inputFull' type="text" placeholder='enter your email address' />

                        <label htmlFor="subj">Subject</label>
                        <input className='inputFull' type="text" placeholder='enter subject of message' />

                        <label htmlFor="mssg">Message</label>
                        <textarea className='textareaFull' name="mssg" id="mssg"></textarea>

                        <label htmlFor="tAndC">
                            <input type="checkbox" name="tAndC" id="tAndC" /> I’ve read and agree with the terms and conditions
                        </label>

                        <button>Submit</button>
                    </form>
                </div>

                <div className="col-span-full md:col-span-4 lg:col-span-6">
                    <div className='mapContainer'>
                        <img className='contactMap' src="/images/contact/map.jpg" alt="Map of the area surrounding London Ontario" />
                        {/* <div className='contactMap'></div> */}

                        <div className='contactDetails'>
                            <img className='contactIcon' src={telephone} alt="Telephone Icon" />
                            <p>1 (000) 000-0000</p>
                        </div>

                        <div className='contactDetails'>
                            <img className='contactIcon' src={map} alt="Map Icon" />
                            <p>76 Willow Drive, London ON, Canada, N6H1K2</p>
                        </div>

                        <div className='contactDetails'>
                            <img className='contactIcon' src={envelope} alt="Envelope Icon" />
                            <p>contact@email.com</p>
                        </div>

                        <div className='socialMediaCon'>
                            <h2>Connect With Us</h2>
                            <div className='iconCon'>
                                <a href="#">
                                   <img className='contactIcon' src={pinterest} alt="Pinterest Icon" /> 
                                </a>
                                
                                <a href="#">
                                   <img className='contactIcon' src={facebook} alt="Facebook Icon" /> 
                                </a>

                                <a href="#">
                                   <img className='contactIcon' src={instagram} alt="Instagram Icon" /> 
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