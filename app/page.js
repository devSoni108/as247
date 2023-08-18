import Hero from "@/components/Hero"
import Protection from "@/components/Protection"
import Brands from "@/components/Brands"
import Services from "@/components/Services"
import Testimonials from "@/components/Testimonials"
import FAQ from "@/components/FAQ"
import CTA from "@/components/CTA"
import Footer from "@/components/Footer"

const Welcome = () => {
    return (
        <main className="overflow-hidden">
            <Hero />
            <Protection />
            <Brands />
            <Services />
            <Testimonials />
            <FAQ />
            <CTA />
            <Footer />
        </main>
    )
}

export default Welcome