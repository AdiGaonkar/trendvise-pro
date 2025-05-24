import React from 'react';
import Movingtext from '@/components/Movingtext';

const StandardDoandDon = () => {
    return (
        <div className="bg-white text-black">
            {/* Header Section */}
            <div className="relative -mt-24 h-[300px] md:h-[500px] flex items-center justify-center">
                {/* Background Image */}
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{
                        backgroundImage:
                            "url('https://wpblogassets.paytm.com/paytmblog/uploads/2023/08/Blogs_Paytm_Bond-Market-vs.-Stock-Market_-Whats-the-Difference_-1.jpg')",
                    }}
                ></div>

                {/* Gray Overlay */}
                <div className="absolute inset-0 bg-gray-800 opacity-40"></div>

                {/* Content */}
                <h1 className="relative text-2xl sm:text-3xl md:text-6xl text-white font-thin text-center px-4 z-10">
                    LEGAL DISCLAIMER
                </h1>
            </div>

            {/* Scrolling Disclaimer Text */}
            <Movingtext />

            <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-10 space-y-6 text-justify text-base sm:text-lg leading-relaxed">
                <p>
                    All rights reserved. Any act of copying, reproducing, or distributing the research reports & Alerts published by Trendvise pro on its website/mobile app or any such platforms whether wholly or in part, for any purpose without the permission of Trendvise pro is <br />
                    <br />
                    strictly prohibited and shall be deemed to be copyright infringement. Trendvise pro (hereinafter referred to as Trendvise pro) is independent equity research providing firm operating under the License of its proprietor Trendvise pro is not an Investment Advisor. Information herein should be regarded as a resource only and should be used at one’s own risk. This is not an offer to sell or solicitation to buy any securities and Trendvise pro pro or any of its promoters/employees/associates will not be Liable for any losses incurred or investment(s) made or decisions taken/or not taken based on the information provided herein. Information contained herein does not constitute investment advice or a personal recommendation or take into account the particular investment objectives, financial situations, or needs of individual subscribers. Before acting on any recommendation, subscribers should consider whether it is suitable for their particular circumstances and, if necessary, seek independent professional advice from a licensed Investment Adviser. This is not directed for access or use by anyone in any other country than India, especially, the USA, Canada, or the European Union countries, where such use or access is unlawful or which may subject Trendvise pro  or its promoters/employees/affiliates to any registration or licensing requirement. All content and information are provided on an As Is basis by Trendvise pro Information herein is believed to be reliable but Trendvise pro  does not warrant its completeness or accuracy and expressly disclaims all warranties and conditions of any kind, whether express or implied. Trendvise  pro or its promoters/employees/affiliates may hold shares in the companies discussed herein. As a condition to accessing Trendvise pro  content and website, you agree to our Terms and Conditions of Use, available here, the performance data quoted represents past performance and does not guarantee future results. The user further agrees to completely indemnify Trendvise pro  or its promoters, employees, directors & stakeholders from any lawsuit or legal proceedings. The user also agrees that the research provided by Trendvise pro and conveyed by its promoters, employees, directors & stakeholders is only for reference purposes and the final decision to Buy/Sell/Hold any security or instrument is the sole of the user and any Loss/Gains arising due to action or inaction based on our research services are completely the responsibility and Liability of the User. The User agrees that Trendvise pro & its promoters, employees, directors & stakeholders are not Liable to repay or reimburse in any form the Loss that might occur to the user based on the user’s own decision to Buy/Sell/Hold any security or instrument that might be mentioned or given a view on in any of our research services.
                    <br />
                    <br />
                    <strong className="block py-4">STANDARD DISCLOSURE/DISCLAIMER</strong>
                    <br />
                    Trendvise pro does not receive any consideration by way of remuneration or compensation or in any other form whatsoever, by us or any of our associates or subsidiaries for any distribution or execution services in respect of the products or securities for which the research service is provided to the client. Trendvise pro does not provide any order execution services to any user/subscriber. If any person offers an order execution service in the name of Trendvise  pro, the user should immediately deny such services and report to us about the same. If the user/subscriber accepts such services, then Trendvise  pro or its promoter/s. employees, representatives, and/or stakeholders are not responsible for any losses/gains or any outcome that may arise due to any such activities. The user/subscriber agrees to indemnify Trendvise pro or its promoter/s, employees, representatives, and/or stakeholders from any Losses or damages that the user may incur from any such execution services activities agreed upon by the user on his/her/their own accord. The user agrees that he/she/they have taken services offered by Trendvise  pro or any of its subsidiaries only after having read and accepted the term and conditions of services provided by us.
                    <br />
                    <br />
                    Trendvise pro does not recommend a stock/commodity broker. If any stock/commodity broker is recommended by any of our representatives, we do not receive any consideration by way of remuneration or compensation or in any other form whatsoever from the stock/commodity broker or any other intermediary so recommended to the client.
                    <br />
                    <br />
                    To ensure compliance with the SEBI (Research Analysts) Regulations, 2014, we have resolved that the research analyst and all its representatives will not make any trades in the market in the securities/instruments covered in our research services. We are not associated in any manner with any issuer of products/ securities, this ensures that there are no actual or potential conflicts of interest. This also ensures that objectivity or independence in the carrying on of our research providing services is not compromised. Investment in stock/commodity markets is subject to market risk, though best attempts are made for predicting markets, no surety of return or accuracy of any kind is guaranteed, while the performance sheet of various products is available but should not be considered as a guarantee for future performance of the products/services. Clients are suggested to consider all the
                    <br />
                    <br />
                    research reports as just an opinion and make investment decisions of their own accord.
                    <br />
                    <br />
                    In case of clients seeking research on any specific positions already made by the client, we will be able to suggest the best possible action considering
                    <br />
                    <br />
                    and we suggest the client consider our opinion and not consultancy to make his/her final decision. We are not liable for any losses whatsoever the client may incur in accepting this opinion.
                    <br />
                    <br />
                    It is also suggested that the Client should only trade if our research calls suit his/her/their current risk profile and risk-bearing capacity, all such research calls shall be considered as a view or opinion and the client shall on his/her/their discretion decide actual trades.
                    <br />
                    <br />
                    We are not associated with any intermediaries and do not recommend the services of any specific intermediaries. No Litigations have been filed against us since the incorporation.
                    <br />
                    <br />
                    ALL the research services which are suggested by us are communicated in written, nonverbal communication by any of our executives or otherwise under any circumstances shall be considered as research services by our organization.
                    <br />
                    <br />
                    <strong>Standard Disclaimer:</strong>
                    <br />
                    Trendvise pro or its promoter, employees, directors & stakeholders may have had or may have in future positions in the stocks/instruments covered by us in our research reports/communications.
                </p>
            </div>
        </div>
    );
};

export default StandardDoandDon;
