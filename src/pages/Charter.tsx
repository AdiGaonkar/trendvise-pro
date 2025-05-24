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
                    INVESTOR CHARTER
                </h1>
            </div>

            {/* Scrolling Text */}
            <Movingtext />

            {/* Welcome Section */}
            {/* Terms and Conditions Section */}
            <section className="container mx-auto px-6 md:px-44 py-40 space-y-10">
                {termsList.map((item, index) => (
                    <div key={index} className="space-y-4">
                        <h3 className="text-2xl font-semibold text-gray-800">{item.title}</h3>
                        <h3 className="text-2xl font-semibold text-gray-800">{item.title1}</h3>
                        <div className="text-justify space-y-2 text-sm md:text-base">{item.content}</div>
                    </div>
                ))}
            </section>
        </div>
    );
};

const termsList = [
    {
        title: 'A. Vision and Mission Statements for investors',
    },
    {
        title: 'Vision',
        content: [
            "Invest with knowledge & safety.",
        ],
    },
    {
        title: 'Mission',
        content: [
            "Every investor should be able to invest in right investment products based on their needs, manage and monitor them to meet their goals, access reports and enjoy financial wellness.",
        ],
    },
    {
        title: 'B. Details of business transacted by the Research Analyst with respect to the investors.',
        content: [
            "• To publish research report based on the research activities of the RA.", <br />,
            "• To provide an independent unbiased view on securities.", <br />,
            "• To offer unbiased recommendation, disclosing the financial interests in recommended securities.", <br />,
            "• To provide research recommendation, based on analysis of publicly available information and known observations.", <br />,
            "• To conduct audit annually.",
        ],
    },
    {
        title: 'C. Details of services provided to investors (No Indicative Timelines)',
        content: [
            "• Onboarding of Clients", <br />,
            "• Disclosure to Clients.", <br />,
            "• To distribute research reports and recommendations to the clients without discrimination.", <br />,
            "• To maintain confidentiality w.r.t publication of the research report until made available in the public domain.", <br />,
        ],
    },
    {
        title: 'D. Details of grievance redressal mechanism and how to access it',
        content: [
            "In case of any grievance / complaint, an investor should approach the concerned research analyst and shall ensure that the grievance is resolved within 30 days.", <br />,
            "If the investor’s complaint is not redressed satisfactorily, one may lodge a complaint with SEBI on SEBI’s SCORES portal which is a centralized web-based complaints redressal system.", <br />,
            "SEBI takes up the complaints registered via SCORES with the concerned intermediary for timely redressal. SCORES facilitates tracking the status of the complaint. With regard to physical complaints, investors may send their complaints to: Office of Investor Assistance and Education, Securities and Exchange Board of India, SEBI Bhavan. Plot No. C4-A, ‘G’ Block, Bandra-Kurla Complex, Bandra (E), Mumbai – 400 051.",
        ],
    },
    {
        title: 'E. Expectations from the investors (Responsibilities of investors)',
        title1: 'Do’s',
        content: [
            <p key="reg-1">
                • Always deal with SEBI registered Research Analyst.<br />
                • Ensure that the Research Analyst has a valid registration certificate.<br />
                • Check for SEBI registration number.<br />
                • Please refer to the list of all SEBI registered Research Analysts which is available on SEBI website in the following link:
                • https://www.sebi.gov.in/sebiweb/other/OtherAction.do?doRecognisedFpi=yes&intmId=14<br />
                • Always pay attention towards disclosures made in the research reports before investing.<br />
                • Pay your Research Analyst through banking channels only and maintain duly signed receipts mentioning the details of your payments.<br />
                • Before buying securities or applying in public offer, check for the research recommendation provided by your research Analyst.<br />
                • Ask all relevant questions and clear your doubts with your Research Analyst before acting on the recommendation.<br />
                • Inform SEBI about Research Analyst offering assured or guaranteed returns.<br />
            </p>,
        ],
    },
    {
        title: 'E. Expectations from the investors (Responsibilities of investors)',
        title1: 'Don’ts',
        content: [
            <p key="reg-1">
                • Do not provide funds for investment to the Research Analyst.<br />
                • Don’t fall prey to luring advertisements or market rumors.<br />
                • Do not get attracted to limited period discount or other incentive, gifts, etc. offered by Research Analyst.<br />
                • Do not share login credentials and password of your trading and Demat accounts with the Research Analyst.<br />
            </p>,
        ],
    },
];

export default TermsandConditions;
