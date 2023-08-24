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
import { PageWrapper } from "@/components/page-wrapper";

const Home = () => {
    return (
        <main>
            <PageWrapper>
                <Navbar />
                <Hero />
                <Protection />
                <Brands />
                <Services />
                <Testimonials />
                <FAQ />
                <CTA />
                <Footer />
            </PageWrapper>
        </main>
    )
}

export default Home