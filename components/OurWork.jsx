import Slick from "./Slick"

const OurWork = () => {
    return(
        <div className='py-8 text-center bg-blue-950 text-white'>
            <div>
                <h2 className='pb-2 text-sm md:text-lg drop-shadow-sm font-semibold'>Our Work</h2>
                <h3 className='text-2xl md:text-3xl font-semibold uppercase drop-shadow-sm'>Experience Our Expert Team in Action</h3>
                <p className='p-2 text-sm max-w-700 mx-auto '>Our team of highly qualified technicians boasts extensive experience in both residential and commercial installations. Our unwavering commitment is to fortify your home and business, safeguarding what matters most to you with an impenetrable shield of protection.</p>
            </div>
            <Slick />
        </div>
    )
}

export default OurWork
