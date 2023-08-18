import Image from 'next/image'
import CTA from '@/components/CTA'
import Footer from '@/components/Footer'

const Solutions = () => {
    return (
        <main className='overflow-hidden'>
            {/* Header */}
            <header className="bg-blue-950 py-16 text-white text-center">
                <h1 className="text-5xl py-10">Our Services</h1>
                <div className="h-0.5 mx-auto w-1/2" style={{background: '#4ba1d4' }}/>
                <h2 className="text-xl py-10">We offer a wide range of Home and Business security soltutions.</h2>
            </header>

            <div className='py-8'>
            <div className='px-2 py-4 md:flex justify-evenly items-center'>
                    <div>
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/services.jpg?alt=media&token=3bb68dfe-752d-42ae-9872-321b98495fa0"
                            width={1920}
                            height={1200}
                            alt='security protection'
                            className='rounded-sm pb-2 sm:max-w-500'
                            loading='lazy'
                        />
                    </div>
                    <div className='max-w-500 border p-8 shadow-md'>
                        <h4 className='font-semibold pb-1 text-lg'>We offer a comprehensive range of solutions</h4>
                        <div className='md:flex text-sm'>
                            <div className='p-2'>
                                <h4 className='font-bold'>Our services include:</h4>
                                <li>Security Consulting</li>
                                <li>Security Upgrades</li>
                                <li>Security Complexes and Estates</li>
                                <li>Vehicle and Fleet Surveilance</li>
                            </div>
                            <div className='p-2'>
                                <h4 className='font-bold'>We also specialise in:</h4>
                                <li>Access Control</li>
                                <li>Gate and Garage Motors</li>
                                <li>Electric Fencing</li>
                            </div>
                        </div>
                    </div>
                </div> 
                
                <div className='px-2 py-6 sm:flex justify-evenly items-center'>
                    <div className='max-w-500 border p-8 shadow-md'>
                        <h4 className='font-semibold text-xl pb-1'>Monitored Alarm Systems: Fortifying Your Security Strategy</h4>
                        <p className='text-sm'>Alarm systems stand as the cornerstone of modern security, providing an active and vigilant shield against potential threats. By seamlessly integrating advanced technologies, such as motion sensors for both indoor and outdoor spaces, alarm systems offer a robust defense that deters, detects, and responds to intrusions.</p>
                        <h5 className='font-semibold pt-2'>Complete Protection Inside and Out</h5>
                        <p className='text-sm'>An alarm system goes beyond mere surveillance; it's a proactive guardian of your peace of mind. With a network of sensors and detectors strategically placed, these systems create an intelligent barrier that safeguards your property and loved ones:</p>
                    </div>
                    <div>
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/alarm-system.jpg?alt=media&token=822e536e-dbab-4b4e-a89c-0248b041050d"
                            width={1920}
                            height={1200}
                            alt='Alarm systems'
                            className='rounded-sm pb-2 sm:max-w-500'
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className='px-2 py-6 sm:flex justify-evenly items-center'>
                    <div> 
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/cctv.jpg?alt=media&token=7326ab2b-3cf4-43a5-836e-1de774b1d7bf"
                            width={1920}
                            height={1200}
                            alt='CCTV'
                            className='rounded-sm pb-2 sm:max-w-500'
                            loading="lazy"
                        />
                    </div>
                    <div className='max-w-500 border p-8 shadow-md'>
                        <h4 className='font-semibold text-xl pb-1'>CCTV Surveillance: A New Dimension of Security</h4>
                        <p className='text-sm'>Closed-Circuit Television (CCTV) surveillance has revolutionized the way we safeguard our surroundings, introducing an unparalleled level of vigilance and control. By combining advanced camera technology with real-time monitoring, CCTV systems elevate security to new heights, providing an ever-watchful eye that leaves no corner unexamined.</p>
                        <h5 className='font-semibold pt-2'>Eyes That Never Blink</h5>
                        <p className='text-sm'>CCTV cameras are the vigilant sentinels of modern security, capturing every detail with unwavering precision. Strategically positioned across your property, these cameras ensure that no angle is left unobserved, providing an all-encompassing visual record of your surroundings.</p>
                    </div>
                </div>
                <div className='px-2 py-6 sm:flex justify-evenly items-center'>
                    <div className='max-w-500 border p-8 shadow-md'>
                        <h4 className='font-semibold text-xl pb-1'>Access Control: Redefining Security Through Intelligent Gateways</h4>
                        <p className='text-sm'>In an era where security is paramount, access control emerges as the guardian of modern spaces. By combining cutting-edge technology with intuitive control mechanisms, access control systems introduce a new paradigm of security, one that goes beyond traditional locks and keys.</p>
                        <h5 className='font-semibold pt-2'>Empowering Precision Control</h5>
                        <p className='text-sm'>Access control is the key to precision security management. Whether it's a business premise, residential complex, or a sensitive facility, these systems ensure that only authorized individuals have entry, significantly reducing the risk of unauthorized access.</p>
                    </div>
                    <div>
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/access-control.jpg?alt=media&token=be61b11a-6fe0-4152-891d-dea871f76e2e"
                            width={1920}
                            height={1200}
                            alt='Alarm systems'
                            className='rounded-sm pb-2 sm:max-w-500'
                            loading='lazy'
                        />
                    </div>
                </div>
                <div className='px-2 py-6 sm:flex justify-evenly items-center'>
                    <div> 
                        <Image
                            src="https://firebasestorage.googleapis.com/v0/b/as247-8b5e3.appspot.com/o/parameter-security.jpg?alt=media&token=bbb29563-d59e-4912-be2c-d46b33674239"
                            width={1920}
                            height={1200}
                            alt='electric fence'
                            className='rounded-sm pb-2 sm:max-w-500'
                            loading="lazy"
                        />
                    </div>
                    <div className='max-w-500 border p-8 shadow-md'>
                        <h4 className='font-semibold text-xl pb-1'>Parameter Security: Fortifying Your Boundaries with Precision and Power</h4>
                        <p className='text-sm'>In the realm of safeguarding, perimeter security emerges as the first line of defense, and within it, the synergy of technology and craftsmanship defines its new-age avatar. Among these, the electric fence and gate and garage motors by Centurion Motors stand tall as sentinels of modern security.</p>
                        <h5 className='font-semibold pt-2'>Safeguarding Your Boundaries</h5>
                        <p className='text-sm'>Parameter security, powered by technologies like electric fences and Centurion Motors, serves as the guardian of your domain. It extends beyond mere protection; it embodies a sense of empowerment, where you control who enters your space. In this modern age, where security is paramount, parameter security redefines your safety standards, merging innovation with strength to fortify your world.</p>
                    </div>
                </div>
            </div>
            <CTA />
            <Footer />
        </main>
    )
}

export default Solutions