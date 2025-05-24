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
              "url('https://wpblogassets.paytm.com/paytmblog/uploads/2023/08/Blogs_Paytm_Bond-Market-vs.-Stock-Market_-Whats-the-Difference_-1.jpg')",
          }}
        ></div>

        {/* Gray Overlay */}
        <div className="absolute inset-0 bg-gray-800 opacity-40"></div>

        {/* Content */}
        <h1 className="relative text-4xl md:text-6xl text-white font-thin text-center px-4 z-10">
          STANDARD DO’S AND DON’T
        </h1>
      </div>


      {/* Scrolling Disclaimer Text */}
      <Movingtext />

      <div className="max-w-3xl mt-5 mx-auto px-4 py-8 space-y-6 text-justify text-sm leading-relaxed">
        <p>
          As you are aware that the stock market is uncertain and volatile in nature, we suggest a few Do’s & Don’ts as a general practice to follow, which are mentioned below:
        </p>
        <p>
          • Always trade/invest by using a stop loss.
        </p>
        <p>
          • Always remember to place the stop loss in the trading terminal and do not keep a mental stop loss.
        </p>
        <p>
          • Place a target order in the system at the price at which you want to book your profit.
        </p>
        <p>
          • Always trade with only a portion of your capital.
        </p>
        <p>
          • Never trade with your entire capital in a single trade.
        </p>
        <p>
          • Try to avoid trading using leverage as much as possible.
        </p>
        <p>
          • Always focus on protecting your capital. With systematic trading, profit can be made in the long term if capital is protected.
        </p>
        <p>
          • We at Trendvise Pro will never ask for your D-mat/trading account login ID & password. If someone asks you for such details, please deny immediately and mail us at our official email ID regarding the same.
        </p>
        <p>
          • All recommendations will be given through our mobile application only. Kindly download it. You can also call us for customer support.
        </p>
        <p>
          <strong>Example:</strong>  Consider that, if someone has a capital of Rs.10 lakhs, it is suggested that you one invests only Rs. 1 Lakh in any particular trade. The main reason for diversification is that, if any trade doesn’t go in the anticipated direction and stop loss gets hit, then even after SL hit, the impact on the overall capital is minimized. If a person diversifies and trades, then the probability of making profit over time can increase and the probability of losing capital can decrease.
        </p>
        <p>
          • We hope that you will follow the above practices in your trading/investing decisions.<br />
          Thank you.
        </p>
      </div>
    </div>
  );
};

export default StandardDoandDon;
