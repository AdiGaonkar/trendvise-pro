import React from "react";

const AboutPage = () => {
  return (
    <div className="bg-white text-black">
      {/* Who We Are Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        <img
          src="https://images.pexels.com/photos/7108819/pexels-photo-7108819.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Team"
          className="w-96 rounded-lg shadow-md"
        />
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-thin mb-8">Who We Are?</h2>
          <p>
            Meet Trendvise Pro, a trusted name in finance offering a range of services like stock
            market investments, intraday trading, equity transactions, and options trading.
            Whether you’re a seasoned investor or new to finance, Trendvise Pro provides tailored
            strategies and reliable guidance. Known for expertise and commitment, they help clients
            navigate the stock market complexities, ensuring your investments are handled with
            precision.
          </p>
        </div>
      </section>

      {/* Our Competitive Edge Section */}
      <section className="container mx-auto px-6 py-20 flex flex-col md:flex-row items-center justify-center gap-12 text-center md:text-left">
        <div className="w-full md:w-1/2">
          <h2 className="text-5xl font-thin mb-8">Our Competitive Edge</h2>
          <div className="space-y-6">
            <div>
              <strong>Informed Guidance</strong>: Our team of seasoned financial experts and
              analysts provides unparalleled guidance, drawing from years of experience to ensure
              well-informed investment decisions.
            </div>
            <div>
              <strong>Unparalleled Support</strong>: Our customer support team is dedicated and
              available 24/7 to assist you with any queries or concerns. Committed to your
              satisfaction, we aim to deliver prompt, reliable, and friendly support whenever you
              need it.
            </div>
            <div>
              <strong>Personalized Plans</strong>: Recognizing the uniqueness of each investor, we
              customize our investment strategies to align with your specific goals, risk
              tolerance, and financial aspirations.
            </div>
          </div>
        </div>
        <img
          src="https://images.pexels.com/photos/7108697/pexels-photo-7108697.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="Team"
          className="w-96 rounded-lg shadow-md"
        />
      </section>
    </div>
  );
};

export default AboutPage;
