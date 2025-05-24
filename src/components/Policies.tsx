import { useContactForm } from '@/context/ContactFormContext';

const AboutPage = () => {
  const { setIsContactOpen } = useContactForm(); // Hook to control the dialog state

  return (
    <div className="bg-white text-black overflow-x-hidden">
      {/* CTA Section */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-4 md:px-6 flex flex-col md:flex-row items-center md:space-x-10">
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="CTA Visual"
            className="w-full md:w-1/2 rounded-lg shadow-md mb-6 md:mb-0"
          />
          <div className="w-full md:w-1/2 text-center md:text-left px-4 md:px-0">
            <h2 className="text-3xl font-semibold mb-4">Get in Touch With Us</h2>
            <p className="text-4xl md:text-5xl font-light mb-4">Start Your Live Demo Today</p>
            <p className="text-lg text-gray-700 mb-6 max-w-md mx-auto md:mx-0">
              Allow our seasoned team to navigate you toward success in the stock market.
            </p>
            <button
              type="button"
              onClick={() => setIsContactOpen(true)}
              className="bg-dealwise-green text-white px-6 py-3 rounded hover:bg-dealwise-light-blue transition duration-200"
            >
              Get Live Demo
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
