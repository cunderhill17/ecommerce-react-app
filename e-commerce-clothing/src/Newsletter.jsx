import './global/grid.css'
import './Newsletter.css'

export default function Newsletter() {
    return (
        <section className='newsletterBckg grid-con'>
            <h2 className='col-span-full md:col-span-3 lg:col-span-6'>Join Our Newsletter</h2>

            <div className='newsletterInputCon col-span-full md:col-span-5 lg:col-span-6'>
                <input type="text" placeholder='Enter Your Email...'/>
                <button>Submit</button> 
            </div>
        </section>
    )
}