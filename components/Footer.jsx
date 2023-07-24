import Image from 'next/image';

const Footer = () => {
    return (
        <div>
            <div className='flex justify-center items-center'>
                <div>
                    <Image
                    src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/Lgo.png?alt=media&token=6385852c-bf22-4508-b333-2cf4466c4517"
                    alt='AS247'
                    width={200}
                    height={200}
                    className='py-2'
                    loading="lazy"
                    />
                </div>
            </div>
            <div className='p-2 text-white font-thin text-sm text-center bg-gray-700'>
                <p>AS247Security @ 2023. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer