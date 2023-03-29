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
import {Element} from "react-scroll";
import PortfolioSection from "../../components/shared/portfolio-section";
import OpeningSection from "../../components/shared/opening-section";

const HomePage = () => {

    return (
        <Layout>
            <Element name="home">
                <AnimatedSection>
                    <Banner/>
                </AnimatedSection>
            </Element>

            <Element name="services">
                <AnimatedSection>
                    <ServicesSection/>
                </AnimatedSection>

                <AnimatedSection>
                    <ChoicesSection/>
                </AnimatedSection>

                <AnimatedSection>
                    <TeamSection/>
                </AnimatedSection>

                <AnimatedSection backgroundColor="light.accent">
                    <PortfolioSection/>
                </AnimatedSection>
            </Element>


            <Element name="calculator">
                <AnimatedSection>
                    <CalculatorSection/>
                </AnimatedSection>
            </Element>

            <Element name="openings">
                <AnimatedSection>
                    <OpeningSection/>
                </AnimatedSection>
            </Element>

            <Element name="reviews">
                <AnimatedSection>
                    <ReviewsSection/>
                </AnimatedSection>
            </Element>

            <Element name="articles">
                <AnimatedSection>
                    <BlogSection/>
                </AnimatedSection>
            </Element>

            <Element name="faqs">
                <AnimatedSection>
                    <FAQsSection/>
                </AnimatedSection>
            </Element>
        </Layout>
    )
}

export default HomePage;