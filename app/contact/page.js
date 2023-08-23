"use client";
import { FaMapMarkerAlt, FaClock, FaUser } from 'react-icons/fa';
import Form from '@/components/Form';
import Footer from '@/components/Footer';
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Contact = () => {
  const pathname = usePathname();
  return (
    <main className='overflow-hidden'>
      <AnimatePresence mode='wait'>
        <motion.div
                key={pathname}
                initial="initialState"
                animate="animateState"
                exit="exitState"
                transition={{
                    duration: 0.75,
                }}
                variants={{
                    initialState: {
                    opacity: 0,
                    },
                    animateState: {
                    opacity: 1,
                    },
                    exitState: {
                    },
                }}>
          {/* Header */}
          <header className="bg-blue-950 pt-16 text-white text-center">
              <h1 className="text-5xl py-10">Get in touch</h1>
              <div className="h-0.5 mx-auto w-1/2" style={{background: '#4ba1d4' }}/>
              <h2 className="text-xl py-10">Contact us for an obligation free quote.</h2>
          </header>

          {/* Form */}
          <section className="px-8 py-16 text-center text-blue-950">
            <h2 className="text-3xl">We will call you back.</h2>
            <h3 className="text-xl pt-2 pb-6">Complete the form below and we will contact you.</h3>
            <Form />
          </section>

          {/* Contact Details */}
          <section className="px-4 py-8 text-center text-blue-950">
            <h2 className="text-3xl">Contact forms not your thing?</h2>
            <h3 className="text-xl pt-2">Give us a call or drop us an email.</h3>

            <div className="py-8 sm:px-16 items-center sm:flex justify-around">
              <div className="py-4 flex flex-col items-center justify-center">
                <FaMapMarkerAlt className="text-4xl mb-2" />
                <h3 className="text-2xl py-1">Our Location:</h3>
                <ul className="px-4">
                  <li>Dewald Hatting Park, 1501</li>
                  <li>Gauteng, South Africa</li>
                </ul>
              </div>

              <div className="py-4 flex flex-col items-center justify-center">
                <FaUser className="text-4xl mb-2" />
                <h3 className="text-2xl py-1">Contact Details:</h3>
                <ul className="px-4">
                  <li>064 572 2714</li>
                  <li>info@as247security.co.za</li>
                </ul>
              </div>

              <div className="py-4 flex flex-col items-center justify-center">
                <FaClock className="text-4xl mb-2" />
                <h3 className="text-2xl py-1">Business Hours:</h3>
                <ul className="px-4">
                  <li>Mon-Fri:</li>
                  <li>8:00am to 17:00pm</li>
                </ul>
              </div>
            </div>
          </section>
          <Footer />
        </motion.div>
      </AnimatePresence>
    </main>
  );
};

export default Contact;