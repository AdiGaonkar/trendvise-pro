import React from 'react';
import Movingtext from '@/components/Movingtext';

const TermsandConditions = () => {
    return (
        <div className="bg-white text-black">
            {/* Header Section */}
            <div className="relative -mt-24 h-[500px] flex items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://images.pexels.com/photos/159888/pexels-photo-159888.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                    }}
                />
                <div className="absolute inset-0 bg-gray-800 opacity-40" />
                <h1 className="relative text-4xl md:text-6xl text-white font-thin text-center px-4 z-10">
                    ADVERTISEMENT DISCLAIMER
                </h1>
            </div>

            {/* Scrolling Text */}
            <Movingtext />

            {/* Welcome Section */}
            {/* Terms and Conditions Section */}
            <section className="container mx-auto px-6 md:px-44 py-40 space-y-10">
                {termsList.map((item, index) => (
                    <div key={index} className="space-y-4">
                        <div className="text-lg space-y-2 md:text-base">{item.content}</div>
                    </div>
                ))}
            </section>
        </div>
    );
};

const termsList = [
    {
        content: [
            "Please note: Trading in stock market is inherently risky and the users agree to take complete and full responsibility for the outcomes of all trading decisions that they make, including but not limited to loss of capital.The SEBI registered intermediaries/experts may disseminate their analysis , research reports and recommendations by using the services provided by the company and the website which may include SMS or Email communications, or may ask the company, or any of the employees of such companies to disseminate such informaton on their behalf, none of these communications should be constructed as an offer to buy or sell securities, nor advice to do so, all recommendations made by their company and their employees/owners are of information prposes only and under no circmstances should be used as the basis of actual trading. Under no circumstances should any user make trading decisions based solely on the information available on the website.The company is not acting as a qualified financial advisor and the users should not construe any information discussed on the website to constitute anvestment advice, it is informational in nature.",
        ],
    },
    
];

export default TermsandConditions;
