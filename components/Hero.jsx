import Image from 'next/image';
import Link from 'next/link';
import { BsHouseGearFill } from "react-icons/bs"
import { MdElectricBolt } from "react-icons/md"
import { GiMovementSensor, GiCctvCamera } from "react-icons/gi"

const Hero = () => {
  return (
    <section className='overflow-hidden -mt-16'>
      <div
        className='overflow-hidden '
        style={{
          position: 'relative',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Image
          src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/hero.jpg?alt=media&token=495985f6-bf5b-4f8e-a2c3-d888311953b8'
          alt='Security solutions'
          width={1920}
          height={600}
          style={{
            width: '100%',
            height: '600px',
            objectFit: 'cover',
            objectPosition: 'center',
            zIndex: -1, // Set the image to be beneath other content
          }}
        />
        {/* Gradient Overlay */}
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundImage: 'linear-gradient(to bottom, rgba(9,37,77,0.09), #09254d)',
            zIndex: 0,
          }}
        />
        {/* Content */}
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
          <div className='max-w-700 mx-auto px-4 sm:px-8 pt-24'>
            <h1 className='text-2xl md:text-3xl font-semibold uppercase drop-shadow-sm'>Security Solutions</h1>
            <h2 className='pt-2 text-sm md:text-lg drop-shadow-sm font-light md:font-normal'>Your safety, Our solutions.</h2>
            <div className='text-xs md:text-sm pt-10 font-extralight text-gray-300'>
              <ul>
                <li className='flex items-center justify-end pt-4'>
                  Parameter Security
                  <span className='px-2'>
                    <MdElectricBolt className='border p-0.5 rounded border-gray-300' size={25} />
                  </span>
                </li>
                <li className='flex items-center justify-start pt-4'>
                  <span className='px-2'>
                    <GiMovementSensor className='border p-0.5 rounded' size={25} />
                  </span>
                  Motion Sensors
                </li>
                <li className='flex items-center justify-end pt-4'>
                  CCTV Surveliance
                  <span className='px-2'>
                    <GiCctvCamera className='border p-0.5 rounded' size={25} />
                  </span>
                </li>
                <li className='flex items-center justify-start pt-4'>
                  <span className='px-2'>
                    <BsHouseGearFill className='border p-0.5 rounded' size={25} />
                  </span>
                  Access Control
                </li> 
              </ul>  
            </div>
            <div className='pt-16'>
              <Link href='/solutions' passHref>
                <button className='px-3 py-1 text-xs text-white font-semibold rounded border hover:font-bold hover:text-blue-950 hover:bg-white hover:border-white uppercase md:px-4 md:py-2 drop-shadow-sm ease-in-out duration-200'>Learn More</button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
