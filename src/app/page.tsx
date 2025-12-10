import Hero from "@/components/Hero";
import Partners from "@/components/Partners";
import Pricing from "@/components/Pricing/Pricing";
import FAQ from "@/components/FAQ";
import Logos from "@/components/Logos";
import Benefits from "@/components/Benefits/Benefits";
import Container from "@/components/Container";
import Section from "@/components/Section";
import Stats from "@/components/Stats";
import CTA from "@/components/CTA";
import Descriptor from "@/components/Descriptor";


const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <Descriptor />
      {/* <Logos /> */}
      <Container>
        <Benefits />

        <Section
          id="Products"
          title="Products"
          description="Choose what fits your needs. Contact us for custom plans."
        >
          <Pricing />
        </Section>

        <Section
          id="Team"
          title="Core Team"
          description="Meet the brains behind Mintro Labs."
        >
          <Partners />
        </Section>

        <FAQ />



        <CTA />
      </Container>
    </>
  );
};

export default HomePage;
