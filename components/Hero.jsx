import Image from 'next/image';
import Link from 'next/link';

const Hero = () => {
  return (
    <section className='overflow-hidden'>
      <div style={{ position: 'relative', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/hero-gr.jpg?alt=media&token=af58aa6d-7263-4c02-981b-47d67355c91b'
          alt='Security solutions'
          width={1920}
          height={400}
          style={{ width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center' }}
          loading="lazy"
        />
        <div
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            width: '100%',
            textAlign: 'center',
            color: 'white',
          }}
        >
          <div className='max-w-600 mx-auto px-4 sm:px-8'>
            <div className='flex justify-center'>
            <div>
              <Image
                src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/Lgo.png?alt=media&token=6385852c-bf22-4508-b333-2cf4466c4517"
                alt='AS247'
                width={150}
                height={150}
                className='py-2'
                loading="lazy"
              />
            </div>
            </div>
            <h1 className='text-5xl font-semibold uppercase drop-shadow-sm'>Security Solutions</h1>
            <h2 className='py-6 text-sm md:text-xl sm:max-w-600 drop-shadow-sm'>Your safety, Our solutions.</h2>
            <div className='pt-2'>
              <Link href='/contact' passHref>
                <button className='px-3 py-1 text-xs text-stone-950 bg-white font-semibold rounded border border-stone-400 hover:text-white hover:bg-stone-800 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-stone-800 focus:ring-offset-2 uppercase md:px-4 md:py-2 drop-shadow-sm'>Learn More</button>
              </Link>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
