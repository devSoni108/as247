import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Image
            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/hero.jpg?alt=media&token=a99c16c2-a04b-4ee4-9523-6b6575ca470f'
            alt='Security solutions'
            width={1920}
            height={400}
            style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center' }}
            loading="lazy"
          />
        {/* Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 800,
            width: '50%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.6)',
            zIndex: 0
          }}
          className='drop-shadow-md' 
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 1,
            width: '100%',
            textAlign: 'right',
            color: 'white',
          }}
        >
          <div className='px-4 sm:px-8'>
            <h1 className='pt-4 text-4xl font-bold md:text-7xl max-w-500 drop-shadow-sm'>AS247<br/><span className='text-5xl font-semibold uppercase'>SecuritySolutions</span></h1>
            <h2 className='py-6 text-sm md:text-xl  sm:max-w-600 drop-shadow-sm'>Your safety, Our solutions.</h2>
            <div className='block sm:flex justify-end'>
              <div className='pr-2 pt-2'>
                <Link href='/services' passHref>
                  <button className='px-2 py-1 text-xs text-stone-950 bg-amber-300 font-semibold rounded border border-amber-200 hover:text-amber-300 hover:bg-stone-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2 uppercase md:px-4 md:py-2 drop-shadow-sm'>Our Solutions</button>
                </Link>
              </div>
              <div className='pt-2'>
                <Link href='/contact' passHref>
                  <button className='px-3 py-1 text-xs text-stone-950 bg-white font-semibold rounded border border-stone-400 hover:text-white hover:bg-stone-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2 uppercase md:px-4 md:py-2 drop-shadow-sm'>Contact Us</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;