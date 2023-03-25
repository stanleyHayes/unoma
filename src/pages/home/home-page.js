import Layout from "../../components/layout/layout";
import Banner from "../../components/shared/banner";
import AnimatedSection from "../../components/shared/animated-section";
import ServicesSection from "../../components/shared/services-section";


const HomePage = () => {

    return (
        <Layout>
            <AnimatedSection>
                <Banner />
            </AnimatedSection>

            <AnimatedSection>
                <ServicesSection />
            </AnimatedSection>
        </Layout>
    )
}

export default HomePage;