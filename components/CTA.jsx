import Link from "next/link"

const CTA = () => {
    return(
        <div className="py-4 text-white text-center bg-blue-950 overflow-hidden">
            <h2 className='py-2 text-sm md:text-lg drop-shadow-sm font-semibold'>Get in touch with us.</h2>
            <h3 className='text-2xl md:text-3xl font-semibold uppercase drop-shadow-sm'>Make safety your priority.</h3>
            <p className="py-4 max-w-500 mx-auto text-sm">At AS247 your safety is our priority. Get in touch with us and take back the security of you and your family.</p>
            <div className="py-4">
                <Link href='/contact' passHref>
                    <button className='px-3 py-1 text-xs border-white text-white font-bold rounded border hover:text-blue-950 hover:bg-white hover:border-white uppercase md:px-4 md:py-2 drop-shadow-sm ease-in-out duration-200'>Contact Us</button>
                </Link>
            </div>
        </div>
    )
}

export default CTA