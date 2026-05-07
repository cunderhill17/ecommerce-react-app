import './global/grid.css'
import './Newsletter.css'

export default function Newsletter() {
    return (
        <section className='newsletterBckg grid-con'>
            <h2>Join Our Newsletter</h2>

            <div className='newsletterInputCon'>
                <input type="text" placeholder='Enter Your Email...'/>
                <button>Submit</button> 
            </div>
        </section>
    )
}