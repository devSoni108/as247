import Slick from "./Slick"

const OurWork = () => {
    return(
        <div className='py-8 text-center bg-blue-950 text-white'>
            <div>
                <h2 className='pb-2 text-sm md:text-lg drop-shadow-sm font-semibold'>Our Work</h2>
                <h3 className='text-2xl md:text-3xl font-semibold uppercase drop-shadow-sm'>Experience Our Expert Team in Action</h3>
            </div>
            <Slick />
        </div>
    )
}

export default OurWork
