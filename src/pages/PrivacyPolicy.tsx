import React from 'react';
import Movingtext from '@/components/Movingtext';

const StandardDoandDon = () => {
  return (
    <div className="bg- text-black">
      {/* Header Section */}
      <div className="relative -mt-24 h-[500px] flex items-center justify-center">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://t4.ftcdn.net/jpg/03/06/66/21/360_F_306662199_pYjkVvqhcYzv3Sc7PqFVIb9k9FKWffcL.jpg')",
          }}
        ></div>

        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-gray-800 opacity-40"></div>

        {/* Content */}
        <h1 className="relative text-4xl md:text-6xl text-white font-thin text-center px-4 z-10">
          PRIVACY POLICY
        </h1>
      </div>


      {/* Scrolling Disclaimer Text */}
      <Movingtext />

      <div className="max-w-3xl mt-5 mx-auto px-4 py-8 space-y-6 text-justify text-sm leading-relaxed">
        <p>
         Trendvise pro only collects the necessary personally identifiable information in order to respond to your requests for our services. Personally identifiable information includes, but is not limited to, first and last name, e-mail address, phone numbers, profession, address and any other information that itself identifies or when tied to the above information, may identify you as a specific individual.
        </p>
        <p>
         This website does not collect personally identifiable information about you except when you specifically and knowingly provide it.
        </p>
        <p>
          By registering your mobile number on Trendvise pro website, you agree to be contacted by our personnel or send you SMSs related to our services even if the contact number you have entered is on DND (Do not Disturb).
        </p>
        <p>
          against fraud, or dealing with matters concerning the relationship between us. As there is a great risk of giving your personal information and we understand your concern, so, our way of maintaining the information is such that we assure you of the points:
        </p>
        <p>
          We only use your personal information to provide you the service at your account. The only use we will be bringing to your information will be for providing the services to you for which you have subscribed to us for which you gave us your information. We do not sell, rent, exchange, transfer or give to any company or individual for any reason without your consent for the same. We do not spam you.
        </p>
        <p>
          All information regarding Payment Gateway will be safe and secured for our site.
        </p>
        <p>
          In addition to the service provided to you your information (Mobile Number, E-Mail ID etc.) can be brought in use for sending you newsletters, survey, contest information, or information about any new services of the Company. By subscribing to our services, you consent to our Privacy Policy and Terms of Use.
        </p>
        <p>
          A cookie is a string of information that a website stores on a visitor’s computer, and that the visitor’s browser provides to the website each time the visitor returns. Trendvise pro uses cookies to help Trendvise pro identify and track visitors, their usage of Trendvise pro website, and their website access preferences. Trendvise pro visitors who do not wish to have cookies placed on their computers should set their browsers to refuse cookies before using Trendvise pro websites, with the drawback that certain features of Trendvise pro websites may not function properly without the aid of cookies.
        </p>
        <p>
          Although most changes are likely to be minor, Trendvisepro may change its Privacy Policy from time to time, and in Trendvise pro sole discretion. Trendvise pro encourages visitors to frequently check this page for any changes to its Privacy Policy. Your continued use of this site after any change in this Privacy Policy will constitute your acceptance of such change.
        </p>
        <p>
          By subscribing to our services, you consent to our Privacy Policy and Terms of Use.
        </p>
      </div>
    </div>
  );
};

export default StandardDoandDon;
