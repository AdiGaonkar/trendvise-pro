import React from 'react';
import MovingText from '@/components/Movingtext';

const Disclosure = () => {
  return (
    <div className="bg-white text-black">
      

      {/* Header Section */}
      <div className="relative -mt-8 h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://wpblogassets.paytm.com/paytmblog/uploads/2023/08/Blogs_Paytm_Bond-Market-vs.-Stock-Market_-Whats-the-Difference_-1.jpg')",
          }}
        />
        <div className="absolute inset-0 bg-gray-800 opacity-40" />
        <h1 className="relative text-4xl md:text-6xl text-white font-thin text-center px-4 z-10">
         DISCLOSURE
        </h1>
      </div>
      {/* Scrolling Text */}
      <MovingText />

      {/* Main Disclosure Content */}
      <div className="px-6 py-12 md:px-20 space-y-8 text-gray-800 max-w-4xl mx-auto">

        <Section title="1. Terms and Conditions of Research Services">
          <ul className="list-disc list-inside space-y-1">
            <li>Research services will be limited to providing independent research recommendations and shall not be involved in any advisory or portfolio management services.</li>
            <li>The Research Analyst does not assure returns on the recommendations provided. Investors shall take their investment/ trading decisions independently.</li>
            <li>Investment in stocks/ mutual funds/ other securities are subject to market risks. Past performance is never a guarantee of future results.</li>
            <li>The Research Analyst shall not be responsible for any loss to the investors.</li>
          </ul>
        </Section>

        <Section title="2. Disciplinary History">
          <ul className="list-disc list-inside space-y-1">
            <li>There are no pending material litigations or legal proceedings against the Research Analyst.</li>
            <li>Zero action against the Research Analyst by SEBI under SEBI Act and/or Regulations made there under against the Research Analyst relating to Research Analyst services.</li>
          </ul>
        </Section>

        <Section title="3. Details of its Associates">
          <p>No associates.</p>
        </Section>

        <Section title="4. Disclosures with Respect to Research and Recommendation Services">
          <ul className="list-disc list-inside space-y-1">
            <li>The Research Analyst and its employees do not hold any financial interest or actual/beneficial ownership in the subject matter of recommendation.</li>
            <li>The Research Analyst or any of its employees have not received any compensation from the company whose securities are subject of recommendation.</li>
            <li>No material conflict of interest at the time of recommendation.</li>
            <li>The Research Analyst or employees have not served as officer/director/employee of the subject company.</li>
            <li>The Research Analyst and its associates have not been engaged in market making activity for the subject company.</li>
          </ul>
        </Section>

        <Section title="5. Standard Warning">
          <p>
            Investment in securities market are subject to market risks. Read all the related documents carefully before investing.
          </p>
        </Section>
      </div>
    </div>
  );
};

const Section = ({ title, children }: { title: string; children: React.ReactNode }) => (
  <div>
    <h2 className="text-xl font-semibold mb-2">{title}</h2>
    <div className="text-gray-700">{children}</div>
  </div>
);

export default Disclosure;
