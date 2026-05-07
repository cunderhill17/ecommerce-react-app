import './global/grid.css'

export default function Newsletter() {
    return (
        <section className='grid-con'>
            <h2>Join Our Newsletter</h2>
            <input type="text" placeholder='Enter Your Email...'/>
            <button>Submit</button>
        </section>
    )
}