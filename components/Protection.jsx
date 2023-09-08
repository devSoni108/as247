import Image from 'next/image';
import Link from 'next/link';

const Protection = () => {
  return (
    <section className='overflow-hidden relative text-center text-blue-950 py-8'>
      <div className='px-2 sm:px-16 relative z-10 font-bold'>
        <h3 className='pb-2 text-sm md:text-lg drop-shadow-sm font-semibold'>The Protection You Need</h3>
        <h4 className='text-2xl md:text-3xl font-semibold uppercase drop-shadow-sm'>We Care About Your Safety</h4>
      </div>
      <div className='pt-2 relative z-20'>
        <div className='px-2 py-4 block sm:flex justify-center items-center'>
          <div className='px-2'>
            <div className='flex justify-center'>
              <div>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/prevent.png?alt=media&token=8bd49885-2429-44f9-9f05-c4201c5d84fe'
                  alt='security system'
                  width={130}
                  height={130}
                  className='rounded-sm py-8 sm:max-w-500'
                  loading="lazy"
                />
              </div>
            </div>
            <h4 className='font-bold pb-4'>Prevent</h4>
            <div className='h-0.5 w-20 mx-auto' style={{background: '#4ba1d4' }}/>
            <p className='pt-4 text-sm max-w-320'>We are committed to deploying robust solutions that provide comprehensive protection, ensuring your safety and shielding you from potential harm.</p>
          </div>
          <div className='px-2'>
            <div className='flex justify-center'>
              <div>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/protect-unscreen.gif?alt=media&token=1c6fcb7e-aad3-4c47-900a-050d5271213f'
                  alt='security lock'
                  width={150}
                  height={150}
                  className='py-2'
                  loading="lazy"
                />
              </div>
            </div>
            <h4 className='font-bold pb-4'>Protect</h4>
            <div className='h-0.5 w-20 mx-auto' style={{background: '#4ba1d4' }}/>
            <p className='pt-4 text-sm max-w-320'>We prioritize the safety and security of everything that holds value to you, whether it is your loved ones, business,  or any cherished aspect of your life.</p>
          </div>
          <div className='px-2'>
            <div className='flex justify-center'>
              <div>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/progress.png?alt=media&token=3d2dbaac-b3dd-4e06-9fcb-c6d08f6bab26'
                  alt='Home protection'
                  width={130}
                  height={130}
                  className='rounded-sm py-8 sm:max-w-500'
                  loading="lazy"
                />
              </div>
            </div>
            <h4 className='font-bold pb-4'>Progress</h4>
            <div className='h-0.5 w-20 mx-auto' style={{background: '#4ba1d4' }}/>
            <p className='pt-4 text-sm max-w-320'>We consistently drive progress through innovative security solutions that adapt to the evolving landscape, empowering your confident, secure future.</p>
          </div>
        </div>
      </div>
      <div className='pt-10'>
        <Link href='/contact' passHref>
          <button className='px-3 py-1 text-xs border-blue-950 text-blue-950 font-bold rounded border hover:text-white hover:bg-blue-950 hover:border-white uppercase md:px-4 md:py-2 drop-shadow-sm ease-in-out duration-200'>Contact Us</button>
        </Link>
      </div>
    </section>
  );
};

export default Protection;
