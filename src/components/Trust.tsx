import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white text-black overflow-hidden">
      <section className="bg-gray-50 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-thin text-center mb-10">What's the process?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 text-center">
            <div className="flex flex-col items-center px-4">
              <img
                src="https://dealwisepro.com/wp-content/uploads/2024/01/Group-13.png"
                alt="Get in touch"
                className="mb-4 w-14 h-14 object-contain"
              />
              <h3 className="font-semibold text-sm mb-2">Get in touch with us</h3>
              <p className="text-gray-600 max-w-md text-sm">
                Feel free to reach out to us by completing a simple and convenient form.
                We look forward to hearing from you!
              </p>
            </div>

            <div className="flex flex-col items-center px-4">
              <img
                src="https://dealwisepro.com/wp-content/uploads/2024/01/Group-58.png"
                alt="Start Investing"
                className="mb-4 w-14 h-14 object-contain"
              />
              <h3 className="font-semibold text-sm mb-2">Start Investing</h3>
              <p className="text-gray-600 max-w-md text-sm">
                Unlock new possibilities by taking the first step into the world of investment opportunities.
                Start building your financial future with us.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
