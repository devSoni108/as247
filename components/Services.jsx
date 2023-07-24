import Image from 'next/image';

const Services = () => {
    return (
        <div className='p-4'>
            <div className='max-w-700 text-center mx-auto'>
                <h2 className='text-sm uppercase pt-4 font-semibold text-blue-950'>Our Services</h2>
                <h3 className='text-slate-950 text-2xl py-4 font-bold'>Servicing residents and businesses across all
                provinces and in all major cities around Southern Africa.</h3>
            </div>
            <div className='flex justify-center'>
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
                        <p className='text-sm max-w-320 '>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse. Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse.</p>
                    </div>
                </div>
                <div className='m-2 border drop-shadow-md'>
                    <Image
                        src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/2.jpg?alt=media&token=e514b504-463d-40dc-afcf-6c70de324393'
                        width={400}
                        height={400}
                        className=''
                        loading="lazy"
                    />
                <div className='py-4 px-6'>
                    <h3 className='font-bold pb-2'>Access Control</h3>
                    <p className='text-sm max-w-320 '>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse. Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className='m-2 border drop-shadow-md'>
                    <Image
                        src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/3.jpg?alt=media&token=4e99fea7-f98b-4564-9345-27069c1163ec'
                        alt='security consulting'
                        width={400}
                        height={400}
                        className=''
                        loading="lazy"
                    />
                    <div className='py-4 px-6'>
                        <h3 className='font-bold pb-2'>Vehicle Surveillance</h3>
                        <p className='text-sm max-w-320 '>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse. Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse.</p>
                    </div>
                </div>
                <div className='m-2 border drop-shadow-md'>
                    <Image
                        src='https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/4.jpg?alt=media&token=9045db50-53e3-43a2-9616-80b5e76f9a0f'
                        width={400}
                        height={400}
                        className=''
                        loading="lazy"
                    />
                <div className='py-4 px-6'>
                    <h3 className='font-bold pb-2'>Alarm System</h3>
                    <p className='text-sm max-w-320 '>Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse. Egestas elit dui scelerisque ut eu purus aliquam vitae habitasse. Lorem ipsum lerisque ut eu purus aliquam vitae habitasse.</p>
                </div>
                </div>
            </div>
        </div>
    )
}

export default Services
