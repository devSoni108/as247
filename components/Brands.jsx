import Image from 'next/image';

const Brands = () => {
    return (
        <div className='p-4 text-center bg-blue-800 text-white'>
            <div>
                <h2 className='text-sm uppercase pt-4 font-semibold'>You are in good company</h2>
                <h3 className='p-2 font-bold text-2xl'>We partner with industry leading brands</h3>
                <p className='p-2 text-sm max-w-700 mx-auto '>AS247 Security Solutions partners with industry-trusted and renowned brands, ensuring top-quality solutions for our clients.  By aligning ourselves with these esteemed brands, we can deliver unparalleled security solutions that are built on expertise, reliability, and industry leadership.</p>
            </div>
            <div className='flex justify-evenly items-center'>
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/Dahua_Technology.svg?alt=media&token=b30260ce-80a8-4ee0-9e0e-ef8c1e97cf48"
                        alt='dahua'
                        width={200}
                        height={200}
                        className='py-2'
                        loading="lazy"
                    />
                </div>
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/nemtek.svg?alt=media&token=c1762832-52b7-4722-a224-e641c366a020"
                        alt='nemtek'
                        width={200}
                        height={200}
                        className='py-2'
                        loading="lazy"
                    />
                </div>
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/hik-vision.svg?alt=media&token=7fc5b1d2-a70d-4b5a-8de3-c1f83f5e9056"
                        alt='hik vision'
                        width={200}
                        height={200}
                        className='py-2'
                        loading="lazy"
                    />
                </div>
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/zkteco.svg?alt=media&token=325043db-ccc4-477f-8467-484d9e933a25"
                        alt='zk teco'
                        width={200}
                        height={200}
                        className='py-2'
                        loading="lazy"
                    />
                </div>
            </div>
            <div className='flex justify-evenly items-center'>
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/IDS.svg?alt=media&token=81ca2bd2-518b-487e-99fe-8e24f9d345b5"
                        alt='inhep digital security'
                        width={130}
                        height={130}
                        className='py-2'
                        loading="lazy"
                    />
                </div>
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/paradox-security.svg?alt=media&token=e6226e68-19ef-42e0-856d-0d48b424b78c"
                        alt='Paradox security'
                        width={400}
                        height={200}
                        className='py-2'
                        loading="lazy"
                    />
                </div>
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/takex.svg?alt=media&token=6b97da9c-0231-4b30-ae03-9d6be977c847"
                        alt='takex'
                        width={200}
                        height={200}
                        className='py-2'
                        loading="lazy"
                    />
                </div>
            </div>
            <div className='flex justify-evenly items-center pt-8'>
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/wolf.svg?alt=media&token=c54947f7-3c05-4cd6-9b2d-1e9bca134f32"
                        alt='wolf protection'
                        width={120}
                        height={120}
                        className='py-2'
                        loading="lazy"
                    />
                </div>
                <div>
                    <Image
                        src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/no-jack.svg?alt=media&token=3dfcc853-8e6a-4d36-9d20-8ac02d5adcfe"
                        alt='no jack'
                        width={200}
                        height={200}
                        className='py-2'
                        loading="lazy"
                    />
                </div>
            </div>
        </div>
    )
}

export default Brands