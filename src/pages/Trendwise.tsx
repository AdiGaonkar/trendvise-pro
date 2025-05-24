import React from "react";
import { Link } from "react-router-dom";
import Footer from "@/components/Footer";
import ScrollingText from "@/components/Movingtext"; // ✅ Corrected import

const AboutPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Header Section */}
      <div className="relative -mt-24 h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        ></div>

        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-gray-800 opacity-40"></div>

        {/* Content */}
        <h1 className="relative text-4xl md:text-6xl text-white font-thin text-center px-4 z-10">
          ABOUT TRENDVISE PRO
        </h1>
      </div>

      {/* Scrolling Disclaimer Text */}
      <ScrollingText /> {/* ✅ Corrected usage */}

      {/* Welcome Section */}
      <section className="container mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-center md:space-x-12">
        <img
          src="https://dealwisepro.com/wp-content/uploads/2024/02/Group-7-1.png"
          alt="Team"
          className="w-full max-w-sm md:max-w-md rounded-lg shadow-md"
        />
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <h2 className="text-4xl md:text-5xl font-thin mb-8 md:mb-12 px-4 md:px-0">
            Welcome to Trendvise Pro
          </h2>
          <div className="space-y-6 px-4 md:px-0 text-justify md:text-left">
            <p>
              At Trendvise Pro, we excel in delivering a comprehensive range of
              services that span stock market investments, intraday trading,
              equity transactions, and options trading, among other areas.
              Distinguished by our unwavering commitment to excellence,
              innovation, and client success, Trendvise Pro stands as a beacon
              in the financial landscape.
            </p>
            <p>
              Our dedicated focus revolves around providing unparalleled financial
              solutions, making Trendvise Pro a standout choice for individuals
              seeking guidance in navigating the intricacies of the stock market.
              Whether you are a seasoned investor or a newcomer exploring the world
              of finance, Trendvise Pro is committed to crafting tailored strategies
              and offering reliable guidance to ensure that your investments are
              managed with precision and care.
            </p>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-gray-50 py-12">
        <div className="container mx-auto px-6 md:px-10">
          <h2 className="text-3xl font-thin text-center mb-10">What's the process?</h2>
          <div className="grid md:grid-cols-2 gap-12 text-center px-4 md:px-0">
            <div>
              <img
                src="https://dealwisepro.com/wp-content/uploads/2024/01/Group-13.png"
                alt="Get in touch"
                className="mx-auto mb-4 w-12 h-12 object-contain"
              />
              <h3 className="font-semibold text-sm mb-2">Get in touch with us</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Feel free to reach out to us by completing a simple and convenient form. We look forward to hearing from you!
              </p>
            </div>
            <div>
              <img
                src="https://dealwisepro.com/wp-content/uploads/2024/01/Group-58.png"
                alt="Start Investing"
                className="mx-auto mb-4 w-12 h-12 object-contain"
              />
              <h3 className="font-semibold text-sm mb-2">Start Investing</h3>
              <p className="text-gray-600 max-w-md mx-auto">
                Unlock new possibilities by taking the first step into the world of investment opportunities. Start building your financial future with us.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-12">
        <div className="container mx-auto px-6 md:px-10 flex flex-col md:flex-row items-center md:space-x-12">
          <img
            src="https://images.pexels.com/photos/3184287/pexels-photo-3184287.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="CTA Visual"
            className="w-full max-w-md rounded-lg shadow-md mb-6 md:mb-0"
          />
          <div className="w-full md:w-1/2 px-4 md:px-0">
            <h2 className="text-3xl font-semibold mb-4 text-center md:text-left">
              Get in Touch With Us
            </h2>
            <p className="mb-4 text-4xl font-thin text-center md:text-left">
              Start Your Live Demo Today
            </p>
            <p className="mb-6 text-xl font-thin text-center md:text-left max-w-lg mx-auto md:mx-0">
              Allow our seasoned team to navigate you toward success in the stock market.
            </p>
            <div className="flex justify-center md:justify-start">
              <Link
                to="/Letstalk"
                className="inline-block bg-dealwise-green text-white px-6 py-2 rounded hover:bg-dealwise-light-blue transition duration-300"
              >
                Get Live Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Section */}
    </div>
  );
};

export default AboutPage;
