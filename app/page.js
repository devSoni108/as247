"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Protection from "@/components/Protection"
import Brands from "@/components/Brands"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import { motion, AnimatePresence } from 'framer-motion'
import { usePathname } from 'next/navigation'

const Welcome = () => {
    const pathname = usePathname();

    return (
        <main className="overflow-hidden">
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
                    <Navbar />
                    <Hero />
                    <Protection />
                    <Brands />
                    <Services />
                    <Testimonials />
                    <FAQ />
                    <CTA />
                    <Footer />
                </motion.div>
            </AnimatePresence>
        </main>
    )
}

export default Welcome