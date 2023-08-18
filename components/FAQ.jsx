const FAQ = () => {
    return (
        <div className="text-blue-950 py-8">
            <div className='px-2 sm:px-16 text-center'>
                <h3 className='pb-2 text-sm md:text-lg drop-shadow-sm font-semibold'>Frequently asked questions</h3>
                <h4 className='text-2xl md:text-3xl font-semibold uppercase drop-shadow-sm'>Need some more information?<br/>Have a look at our FAQ&apos;s below.</h4>
            </div>
            <div className="pt-4 flex justify-center max-w-700 mx-auto">
                <div>
                    <div className="p-2">
                        <p className="font-semibold">Do you offer home and business solutions?</p>
                        <p>Yes, we offer comprehensive security solutions tailored for both home and business environments.</p>
                    </div>
                    <div className="p-2">
                        <p className="font-semibold">How does your installation and customer support process work?</p>
                        <p>Our installation and customer support process is designed to ensure a smooth and hassle-free experience for our clients. Contact us for more information.</p>
                    </div>
                    <div className="p-2">
                        <p className="font-semibold">Is your equipment up-to-date and technologically advanced?</p>
                        <p>Absolutely, our commitment to your security is reflected in the advanced and up-to-date equipment we provide.</p>
                    </div>
                    <div className="p-2">
                        <p className="font-semibold">Do you offer customizable security packages to fit different needs and budgets?</p>
                        <p>Certainly, we understand that every individual and business has unique security needs and varying budgets. </p>
                    </div>
                    <div className="p-2">
                        <p className="font-semibold">Are your security systems professionally monitored?</p>
                        <p>All of our security systems are professionally monitored around the clock, 24/7. Our state-of-the-art monitoring center is staffed by trained professionals who are dedicated to ensuring your safety.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FAQ