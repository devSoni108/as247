import Image from 'next/image';

const Protection = () => {
  return (
    <div className='px-4 py-4 sm:p-8 text-center' style={{ position: 'relative' }}>
      <Image
        src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/mesh-bg.png?alt=media&token=4bbc6235-0ab1-4d9c-958e-c303b0e700e7'
        alt='Security solutions'
        width={1920}
        height={400}
        style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '400px', objectFit: 'cover', objectPosition: 'center' }}
        loading="lazy"
      />
      <div className='px-2 sm:px-16 text-white relative z-10'>
        <h3 className='text-lg font-bold text-blue-950 uppercase'>The Protection You Need</h3>
        <h4 className='text-slate-950 text-4xl pt-4 font-bold'>We Care About Your Safety</h4>
      </div>
      <div className='pt-2 relative z-20'>
        <div className='px-2 py-4 flex justify-center items-center'>
          <div className='text-center px-2'>
            <div className='flex justify-center'>
              <div>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/5.png?alt=media&token=22f9a21c-f68e-46ee-bbc9-666ac59cf015'
                  alt='Alert'
                  width={100}
                  height={100}
                  className='rounded-sm py-8 sm:max-w-500'
                  loading="lazy"
                />
              </div>
            </div>
            <h4 className='font-bold pb-4'>Prevent</h4>
            <div className='py-0.5 bg-blue-600 w-20 mx-auto'/>
            <p className='pt-4 text-sm max-w-320'>We are committed to deploying robust solutions that provide comprehensive protection, ensuring your safety and shielding you from potential harm.</p>
          </div>
          <div className='text-center px-2'>
            <div className='flex justify-center'>
            <div>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/cctv.gif?alt=media&token=7e64a323-65cc-42f1-a71e-e066e70eb822'
                  alt='CCTV'
                  width={150}
                  height={150}
                  className='py-2'
                  loading="lazy"
                />
              </div>
            </div>
            <h4 className='font-bold pb-4'>Protect</h4>
            <div className='py-0.5 bg-blue-600 w-20 mx-auto'/>
            <p className='pt-4 text-sm max-w-320'>We prioritize the safety and security of everything that holds value to you, whether it is your loved ones, business,  or any cherished aspect of your life.</p>
          </div>
          <div className='text-center px-2'>
            <div className='flex justify-center'>
              <div>
                <Image
                  src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/eye.png?alt=media&token=11fd599c-d2ca-4d0c-8429-f5cb90bff22b'
                  alt='Home protection'
                  width={100}
                  height={100}
                  className='rounded-sm py-8 sm:max-w-500'
                  loading="lazy"
                />
              </div>
            </div>
            <h4 className='font-bold pb-4'>Progress</h4>
            <div className='py-0.5 bg-blue-600 w-20 mx-auto'/>
            <p className='pt-4 text-sm max-w-320'>We are committed to deploying robust solutions that provide comprehensive protection, ensuring your safety and shielding you from potential harm.</p>
          </div>
        </div>
      </div>
      <div className='pt-4'>
        <button className='py-1 px-4 bg-blue-500 font-bold text-white rounded-sm'>Contact Us</button>
      </div>
    </div>
  );
};

export default Protection;
