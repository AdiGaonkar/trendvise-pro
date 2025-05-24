import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { useContactForm } from '@/context/ContactFormContext';

const CallToAction = () => {
  const { setIsContactOpen } = useContactForm();
  
  return (
    <section className="py-16 bg-gradient-to-r from-dealwise-blue to-dealwise-light-blue text-white">
      <div className="container mx-auto px-4 md:px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Ready to Make <span className="text-dealwise-green">Informed Investment Decisions</span>?
        </h2>
        <p className="text-lg mb-8 max-w-2xl mx-auto text-gray-200">
          Get expert market research and personalized investment strategies from our SEBI-registered analysts.
        </p>
        <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-4">
          <Button 
            variant="outline" 
            className="border-white text-black hover:bg-white hover:text-dealwise-blue px-8 py-6 text-lg"
            onClick={() => setIsContactOpen(true)}
          >
            Try a Live Demo <ArrowRight className="ml-2" size={18} />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;