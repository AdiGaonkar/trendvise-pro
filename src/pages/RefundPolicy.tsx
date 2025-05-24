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
                            "url('https://images.pexels.com/photos/12198523/pexels-photo-12198523.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
                    }}
                ></div>

                {/* Gray Overlay */}
                <div className="absolute inset-0 bg-gray-800 opacity-40"></div>

                {/* Content */}
                <h1 className="relative text-4xl md:text-6xl text-white font-thin text-center px-4 z-10">
                    REFUND POLICY
                </h1>
            </div>


            {/* Scrolling Disclaimer Text */}
            <Movingtext />

            <div className="max-w-3xl mt-5 mx-auto px-4 py-8 space-y-6 text-justify text-lg leading-relaxed">
                <p>
                    All sales are final, and we do not offer refunds for the paid period of services already availed by the client. Complaints or dissatisfaction regarding the quality of services during the paid period shall not entitle the client to any refund or compensation.
                </p>
                <p>
                    As per SEBI guidelines, if a client requests to cancel the subscription, a refund shall only be issued for the unused portion of the subscription period. The refund will be calculated on a pro-rata basis, deducting the charges for the services already availed, including applicable taxes and administrative fees.
                </p>
                <p>
                    Refunds will not be provided for the period of services already availed, irrespective of the client’s satisfaction with the recommendations or the outcome of trades.
                </p>
                <p>
                    Investment in securities markets are subject to market risks. Profits and losses incurred due to the use of our recommendations are solely the responsibility of the client.
                </p>
                <p>
                    By subscribing to our services and making payment, the client acknowledges that they have read, understood, and agreed to the refund policy, as well as the disclaimer, disclosure, and other terms mentioned on our website.
                </p>
                <p>
                    For any questions or assistance regarding our refund policy, please contact us at:
                    Contact details : +91 8850279928 <br/>
                    Email: trendvisepro@gmail.com
                </p>
            </div>
        </div>
    );
};

export default StandardDoandDon;
