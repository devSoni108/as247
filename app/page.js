"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero"
import Protection from "@/components/Protection"
import Brands from "@/components/Brands"
import Services from "@/components/Services"
import OurWork from "@/components/OurWork";
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"
import { PageWrapper } from "@/components/page-wrapper";

const Home = () => {
    return (
        <main className="overflow-hidden">
            <PageWrapper>
                <Navbar />
                <Hero />
                <Protection />
                <Brands />
                <Services />
                <OurWork />
                <FAQ />
                <CTA />
                <Footer />
            </PageWrapper>
        </main>
    )
}

export default Home