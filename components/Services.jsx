import Image from 'next/image';

const Services = () => {
    return (
        <div className='p-4 text-blue-950'>
            <div className='max-w-700 text-center mx-auto'>
                <h2 className='pb-2 text-sm md:text-lg drop-shadow-sm font-semibold'>Our Services</h2>
                <h3 className='text-2xl md:text-3xl font-semibold uppercase drop-shadow-sm'>Servicing residents and businesses across Southern Africa.</h3>
            </div>
            <div className='block sm:flex justify-center'>
                <div className='m-2 border drop-shadow-md'>
                    <Image
                        src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/1.jpg?alt=media&token=c8c12ca5-8a6b-4c8c-98dd-40d08be98e2f'
                        alt='security consulting'
                        width={400}
                        height={400}
                        className=''
                        loading="lazy"
                    />
                    <div className='py-4 px-6'>
                        <h3 className='font-bold pb-2'>Security Consulting</h3>
                        <p className='text-sm max-w-320 '>Unlock a new level of security with our expert consulting services. Our seasoned consultants work alongside you, assessing risks, designing proactive measures, and ensuring every corner of your operation is fortified. Trust us to pave the way for your complete security transformation.</p>
                    </div>
                </div>
                <div className='m-2 border drop-shadow-md'>
                    <Image
                        src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/2.jpg?alt=media&token=e514b504-463d-40dc-afcf-6c70de324393'
                        alt='secure and protect'
                        width={400}
                        height={400}
                        loading="lazy"
                    />
                <div className='py-4 px-6'>
                    <h3 className='font-bold pb-2'>Access Control</h3>
                    <p className='text-sm max-w-320 '> We empower you with the ultimate access control over your premises. Our cutting-edge technology seamlessly integrates with your environment, creating a smooth yet impenetrable barrier against potential threats. Redefine your security standards and grant you the confidence to protect what matters most. </p>
                </div>
                </div>
            </div>
            <div className='block sm:flex justify-center'>
                <div className='m-2 border drop-shadow-md'>
                    <Image
                        src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/3.jpg?alt=media&token=4e99fea7-f98b-4564-9345-27069c1163ec'
                        alt='security consulting'
                        width={400}
                        height={400}
                        loading="lazy"
                    />
                    <div className='py-4 px-6'>
                        <h3 className='font-bold pb-2'>Vehicle Surveillance</h3>
                        <p className='text-sm max-w-320 '>Empowering Vigilance, Ensuring Safety: Our cutting-edge Vehicle Surveillance solutions provide an unwavering shield for your assets, delivering real-time monitoring and unmatched protection. With us, your vehicles are safeguarded, and your peace of mind is our ultimate goal.</p>
                    </div>
                </div>
                <div className='m-2 border drop-shadow-md'>
                    <Image
                        src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/4.jpg?alt=media&token=9045db50-53e3-43a2-9616-80b5e76f9a0f'
                        alt='security south africa'
                        width={400}
                        height={400}
                        loading="lazy"
                    />
                <div className='py-4 px-6'>
                    <h3 className='font-bold pb-2'>Alarm System</h3>
                    <p className='text-sm max-w-320 '>Fortifying Your Peace of Mind: Our advanced Alarm Systems stand as vigilant sentinels, safeguarding your spaces with unwavering precision. With cutting-edge technology and rapid response, we deliver a shield of protection that lets you rest easy, knowing that every corner is secure.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Services
