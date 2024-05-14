import Slider from "react-slick";
import Image from 'next/image';

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Slick = () => {
  
    const settings = {
        dots: true,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
      };

    return (
        <div className='flex justify-around items-center'>
            <div className='max-w-370 p-2 sm:max-w-500'>
                <Slider {...settings}>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/work1.jpg?alt=media&token=71f0a57d-e23f-47aa-8be8-98ce20c8d374'
                            alt='South Africa security soltuions'
                            width={500}
                            height={500}
                            className='p-4'
                            
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/work2.jpg?alt=media&token=2812cfad-9dbb-44a5-986a-d27eaac4accb'
                            alt='security camera installers'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/work3.jpg?alt=media&token=03aed65f-f65d-4689-bda1-e8f61045bd38'
                            alt='security upgrades johannesburg'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/work4.jpg?alt=media&token=e2a20328-58bd-41c1-a62c-7922a1f6f680'
                            alt='home security south africa'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/work5.jpg?alt=media&token=34ee482b-4f00-44de-b88f-cde86159014f'
                            alt='electric fencing johannesburg'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/work6.jpg?alt=media&token=d54b24da-12b8-4434-96bc-c40c751a2249'
                            alt='business security south africa'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/work7.jpg?alt=media&token=18cc6dde-ce79-4bb5-ab20-460612a1047f'
                            alt='home security johannesburg'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/cctv.jpeg?alt=media&token=e605752a-98a7-41c0-93ec-ec7534678a0b'
                            alt='cctv boksburg'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/electric-gate-motor.jpeg?alt=media&token=b7f35d64-f71b-4d20-ab18-bad1904dd5b5'
                            alt='electric gate motor boksburg'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/electric-fencing-installation.jpeg?alt=media&token=aab9276a-06ac-4b45-a5b1-f939e8b4c25a'
                            alt='electric fence boksburg'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/electric-fencing-installation2.jpeg?alt=media&token=62b19873-9e3d-4948-981c-272b705e2b76'
                            alt='electric fence east rand'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                    <div>
                        <Image
                            src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/electric-fencing-installation3.jpeg?alt=media&token=3faba28b-a4ed-4907-8ff0-dba670101178'
                            alt='electric fence johannesburg'
                            width={500}
                            height={500}
                            className='p-4'
                        />
                    </div>
                </Slider>
            </div>
        </div>
    )
}

export default Slick
