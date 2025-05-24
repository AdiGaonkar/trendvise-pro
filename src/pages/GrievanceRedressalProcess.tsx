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
                    GRIEVANCE REDRESSAL PROCESS
                </h1>
            </div>

            {/* Scrolling Text */}
            <Movingtext />

            {/* Welcome Section */}
            {/* Terms and Conditions Section */}
            <section className="container mx-auto px-6 md:px-44 py-40 space-y-10">
                {termsList.map((item, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
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
            "We believe that Investor service is a vital element for sustained business growth and we want to ensure that our Investors receive exemplary service across different touch points. Prompt and efficient service is essential for retaining existing relationships and therefore Investor satisfaction becomes critical to us, especially since we follow the Direct to Investor model. Investor queries and complaints constitute an important voice of Investor, and this policy details grievance handling through a structured grievance redressal framework. Grievance redressal is supported by a review mechanism, to minimize the recurrence of similar issues in future.",
        ],
    },
    {
        content: [
            "The Grievance redressal policy follows the following principles:",
        ],
    },
    {
        content: [
            "1)Investors will be treated fairly at all times", <br />,
            "2)Complaints raised by Investors will be dealt with courtesy and in a timely manner", <br />,
            "3)Queries and Complaints will be treated efficiently and fairly.", <br />,
        ],
    },
    {
        content: [
            "The Research Analyst has a dedicated Client Servicing Team which is responsible for timely and prompt communication with our clients, while having an open attitude towards service recovery, and providing alternate solutions to investors, thus ensuring healthy relationships with our clients. The Client Servicing Team trendvisepro@gmail.com",
        ],
    },
    {
        title: 'Grievance Redressal Mechanism.',
        content: [
            "Client’s queries / complaints may arise due to lack of understanding or a deficiency of service experienced by clients. Deficiency of service may include lack of explanation, clarifications, understanding which escalates into shortfalls in the expected delivery standards, either due to inadequacy of facilities available or through the attitude of staff towards client.", <br />,
            "• Clients can seek clarification to their query and are further entitled to make a complaint in writing, orally or telephonically. An email may be sent to the Client Servicing Team at trendvisepro@gmail.com. Alternatively, the Investor may call on our customer care number – +91 8850279928.", <br />,
            "• Clients can call on our Compliance officer number – +91 8850279928 or alternatively, the Investor may write to the Research Analyst team at.", <br />,
        ],
    },
    {
        title: "trendvisepro@gmail.com and the client can expect a reply within 10 business days of approaching the Research Analyst team and if the Investor does not receive a response within 10 business days of writing to the Client servicing team.",
        content: [
            "•Team and if the Investor does not receive a response within 10 business days of writing to the Client servicing team.",
            "In case you are not satisfied with our response you can lodge your grievance with SEBI at https://scores.sebi.gov.in/ or you may also write to any of the offices of SEBI.",
            "SCORES may be accessed through SCORES mobile application as well. The same can be downloaded from the link below:",
            "https://play.google.com/store/apps/details?id=com.ionicframework.sebi236330.",
        ],
    },
    
];

export default TermsandConditions;
