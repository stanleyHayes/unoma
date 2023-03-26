import Layout from "../../components/layout/layout";
import Banner from "../../components/shared/banner";
import AnimatedSection from "../../components/shared/animated-section";
import ServicesSection from "../../components/shared/services-section";
import ChoicesSection from "../../components/shared/choices-section";
import TeamSection from "../../components/shared/team-seciton";
import CalculatorSection from "../../components/shared/calculator-section";
import FAQsSection from "../../components/shared/faq-section";
import BlogSection from "../../components/shared/blog-section";
import ReviewsSection from "../../components/shared/reviews-section";


const HomePage = () => {

    return (
        <Layout>
            <AnimatedSection>
                <Banner/>
            </AnimatedSection>

            <AnimatedSection>
                <ServicesSection/>
            </AnimatedSection>

            <AnimatedSection>
                <ChoicesSection/>
            </AnimatedSection>

            <AnimatedSection>
                <TeamSection/>
            </AnimatedSection>

            <AnimatedSection>
                <CalculatorSection/>
            </AnimatedSection>

            <AnimatedSection>
                <ReviewsSection/>
            </AnimatedSection>

            <AnimatedSection>
                <BlogSection/>
            </AnimatedSection>

            <AnimatedSection>
                <FAQsSection/>
            </AnimatedSection>


        </Layout>
    )
}

export default HomePage;