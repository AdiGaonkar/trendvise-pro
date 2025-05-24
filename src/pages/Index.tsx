import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import Trust from "@/components/Trust";
import Testimonials from "@/components/Testimonials";
import Policies from "@/components/Policies";
import CallToAction from "@/components/CallToAction";
import { ContactFormProvider } from "@/context/ContactFormContext";

const Index = () => {
  return (
    <div className="min-h-screen">
      
      <ContactFormProvider>
        <main>
          <Hero />
          <Services />
          <Trust />
          <Testimonials />
          <Policies />
          <CallToAction />
        </main>
      </ContactFormProvider>
    </div>
  );
};

export default Index;
