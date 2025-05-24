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
              "url('https://images.pexels.com/photos/6770610/pexels-photo-6770610.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')",
          }}
        />
        <div className="absolute inset-0 bg-gray-800 opacity-40" />
        <h1 className="relative text-4xl md:text-6xl text-white font-thin text-center px-4 z-10">
          TERMS AND CONDITIONS
        </h1>
      </div>

      {/* Scrolling Text */}
      <Movingtext />

      {/* Welcome Section */}
      <section className="container mx-auto px-6 md:px-10 py-20 flex flex-col md:flex-row items-center md:space-x-12">
        <img
          src="https://images.pexels.com/photos/1251828/pexels-photo-1251828.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="Team"
          className="w-full max-w-sm md:max-w-md rounded-lg shadow-md"
        />
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="space-y-6 px-4 md:px-0 text-justify md:text-left">
            <p>
             By accessing this website, you Trendvise pro agree to be governed by the terms and conditions listed below. We have the right to modify these terms and conditions at any time. Your continuing use of (https://trendvisepro.netlify.app) implies that you agree to any new or modified terms and conditions that we may impose. Please return to our site’s ‘Terms of Use’ page from time to time to remain up to date on any changes we may make. Throughout this Terms of Service agreement, the phrase ‘Trendvise pro’ refers to the website, its owners, and the owner’s employees and affiliates.
            </p>
            <p>
             * We do not provide any guaranteed profit services or Fixed Returns on investments in the securities market since they are subject to market risk.
            </p>
            <p>
             Before obtaining team or any other services from Trendvise pro, clients should read the company’s disclaimer, terms and conditions, and refund policy. We do not accept advisory fees in any personal or individual bank account; any payment made should be made in the name of Trendvise pro.
            </p>
            <p>
            *Investing and trading in the stock market is a high-risk endeavor. Profit and loss are both involved. Due to the exaggeration of profit and loss due to leverage, our advisory service provides trading guidance in which both goal and stop loss are indicated; nevertheless, trade execution is exclusively the responsibility of the customer.
            </p>
          </div>
        </div>
      </section>

      {/* Terms and Conditions Section */}
      <section className="container mx-auto px-6 md:px-40 py-10 space-y-10">
        {termsList.map((item, index) => (
          <div key={index} className="space-y-4">
            <h3 className="text-lg font-semibold text-gray-800">{item.title}</h3>
            <div className="text-lg space-y-2">{item.content}</div>
          </div>
        ))}
      </section>
    </div>
  );
};

const termsList = [
  {
  title: '1) REGISTRATION',
  content: [
    <p key="reg-1">
      By registering, you confirm that any information you submit, now and in the future, is accurate. Trendvise pro reserves the right, in its sole discretion, to deny you access to this website or any portion thereof without notice for the following reasons: (a) immediately by Trendvise pro for any unauthorized access or use by you; (b) immediately by Trendvise pro if you assign or transfer (or attempt to assign or transfer) any rights granted to you under this Agreement; and (c) immediately if you violate any of the other terms and conditions of this User Agreement.
    </p>,
    <p key="reg-2" className="mt-4">
      I consent to get SMS alerts on a regular basis.
    </p>,
    <p key="reg-3" className="mt-2">
      I consent to receive newsletters on a regular basis.
    </p>,
  ],
},
  {
    title: '2) LICENSE',
    content: [
      "Trendvise pro hereby provides you a limited, non-exclusive, non-assignable, and non-transferable license to access Trendvise pro, subject to your commitment that any such access and use will be controlled by all of the terms and restrictions set out in this USER AGREEMENT.",
    ],
  },
   {
  title: '3) COPYRIGHT & INFORMATION RETRANSMISSION',
  content: [
    <p key="reg-1">
      Trendvise pro, as well as the design and information on this site, are valuable and exclusive property of Trendvise pro, and nothing in this Agreement shall be regarded as transferring or assigning any such ownership rights to you or any other person or organization. All information on Trendvise pro is the sole and exclusive property of Trendvise pro and may not be reproduced for any reason other than Trendvise pro. You agree not to repeat or rebroadcast any of the suggestions given on Trendvise pro in any manner for any purpose. You agree that if you repeat or re-post any of Trendvise pro’s suggestions, you will be responsible for actual and punitive damages as decided by Trendvise pro, as well as extra damages as determined by an Indian court of law.
    </p>,
    <p key="reg-2" className="mt-4">
      You may not resell, disseminate, broadcast, or transfer the information, or use it in a searchable, machine-readable database, unless Trendvise pro has separately and clearly permitted such usage in writing. Trendvise pro, any part thereof, or any of the information received or accessed therefrom, may not be rented, leased, sublicensed, distributed, transferred, copied, reproduced, publicly displayed, published, adapted, stored, or time-shared to or through any other person or entity unless separately and specifically authorized in writing by Trendvise pro prior to such use. Furthermore, except as set out below, you may not remove, change, or obscure any copyright, legal, or property notices in or on any components of Trendvise pro without prior written authority. Any other use of the information on this site requires the prior written approval of Trendvise pro and may be subject to a fee.
    </p>,
  ],
},
  {
    title: '4) SERVICE DELAYS',
    content: [
      "Trendvise pro (including its directors, employees, affiliates, agents, representatives, or subcontractors) will not be liable for any loss or liability resulting, directly or indirectly, from delays or interruptions caused by electronic or mechanical equipment failures, telephone interconnect problems, defects, weather, strikes, walkouts, fire, acts of God, riots, armed conflicts, acts of war, or other similar causes. Trendvise pro has no responsibility for providing you with access to (Trendvisepro.com) when it is unavailable due to any such cause.",
    ],
  },
  {
  title: '5)  DISCLAIMER OF LIABILITY',
  content: [
    <p key="reg-1">
     You clearly accept that your use of the website is entirely at your own risk. This website’s contents, information, software, goods, features, and services may contain inaccuracies or typographical mistakes. The following materials are updated on a regular basis. Trendvise pro and/or its respective providers have the right to make modifications and/or enhancements to this website at any time. This website may be momentarily unavailable due to scheduled maintenance, telecommunications outages, or other disturbances.
    </p>,
    <p key="reg-2" className="mt-4">
      Should Trendvise pro exercise its right to modify or discontinue any or all of the contents, information, software, products, features, and services published on this website, Trendvise pro (and its owners, suppliers, consultants, advertisers, affiliates, partners, employees, or any other associated entities, all collectively referred to as associated entities hereafter) shall not be liable to user or member or any third party.
    </p>,
    <p key="reg-3" className="mt-2">
      Trendvise pro and/or its respective affiliated organizations offer no warranties or guarantees about the appropriateness of the materials, information, software, goods, features, and services featured on this website for any purpose. All such materials, information, software, goods, features, and services are given “as is” and without any guarantee of any kind. Trendvise pro and/or its affiliated entities expressly disclaim any and all warranties and conditions with regard to these contents, information, software, products, features, and services, including all implied warranties and conditions of merchantability, fitness for a particular purpose, title, non-infringement, and availability.
    </p>,
    <p key="reg-3" className="mt-2">
     In no event shall Trendvise pro and/or its affiliated entities be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or with the delay or inability to use this website, or for any contents, information, software, products, features, and services obtained through this website, or otherwise arising out of the use of this website, whether based on contract, tort, strenuous negligence, or otherwise.
    </p>,
  ],
},
  {
  title: '6) TRADING CONDITION',
  content: [
    <p key="reg-1">
      Trendvise pro strictly adheres to Trading Principles and Stop Loss Policy, whereby customers agree by default not to do/enter any transaction without a Pre Informed/ Defined Stop Loss. If you trade against the stop loss policy, you will be solely liable for the consequences, and Trendvise pro will have no obligation in this regard. We also encourage that you
    </p>,
    <p key="reg-2" className="mt-4">
      do not trade on staff recommendations outside of the scope of our employment. If you do, you will be solely responsible for any losses, and Trendvise pro will not be held liable.
    </p>,
  ],
},
  {
  title: '7) USE OF MESSAGE BOARDS, CHAT ROOMS AND OTHER COMMUNICATION FORUMS',
  content: [
    <p key="reg-1">
     If this website has message/bulletin boards, chat rooms, or other messaging or communication facilities (collectively, “Forums”), you agree to use the Forums solely to send and receive messages and content that are appropriate and linked to the specific Forum. As an example, and not as a limitation, you agree not to perform any of the following when using a Forum:
    </p>,
    <p key="reg-2" className="mt-4">
     Defame, abuse, harass, stalk, threaten, or otherwise infringe on the legal rights (such as privacy and publicity rights) of another
    </p>,
     <p key="reg-2" className="mt-4">
     Publish, post, distribute, or otherwise disseminate any defamatory, libelous, infringing, obscene, indecent, or illegal content or information.
    </p>,
     <p key="reg-2" className="mt-4">
     Upload files containing software or other content protected by intellectual property laws (or by privacy or publicity rights) unless you own or control the rights or have gotten all applicable consents.
    </p>,
     <p key="reg-2" className="mt-4">
     Upload files containing viruses, damaged files, or any other similar software or programs that may harm the functioning of another person’s computer.
    </p>,
    <p key="reg-2" className="mt-4">
    Conduct or distribute polls, competitions, or chain letters.
    </p>,
    <p key="reg-2" className="mt-4">
    Download any file submitted by another Forum user that you know, or should reasonably know, cannot be lawfully disseminated in this manner.
    </p>,
  ],
},
  {
  title: '8) EQUIPMENT AND OPERATION',
  content: [
    <p key="reg-1">
     You must provide and maintain any telephone/internet and other equipment required to access Trendvise pro, and you are entirely responsible for the price of such equipment and/or telephone/internet connections or use, including all applicable taxes. You are solely responsible for the operation of the equipment you use to access Trendvise pro.for actual and punitive damages as decided by Trendvise pro, as well as extra damages as determined by an Indian court of law.
    </p>,
  ],
},
  {
  title: '9)  DISCLAIMER OF INFORMATION',
  content: [
    <p key="reg-1">
    You accept that the information supplied by Trendvise pro is derived from sources outside of
    </p>,
    <p key="reg-2" className="mt-4">
     Trendvise pro’s control. Though the parties accept that such material is typically trustworthy, they note that inaccuracies may arise, and Trendvise pro does not assure the consistency or usefulness of the information. As a result of this, as well as the potential of human and mechanical mistakes and other variables, you agree that Trendvise pro is offered to you “as is, with all faults.”
    </p>,
    <p key="reg-2" className="mt-4">
     Trendvise pro expressly disclaims any and all warranties of any kind to users and/or any third party, whether express, oral, implied, statutory, or otherwise, including any implied warranties of consistency, timeliness, completeness, merchantability, and fitness for a particular purpose, as well as any warranties arising from custom of trade or course of dealing, and any implied warranties of title or non-infringement. Furthermore, Trendvise pro offers no endorsement of any specific securities, market player, or brokerage by presenting the information. Furthermore, Trendvise pro makes no representation or warranty that it will fulfill your demands or expectations.
    </p>,
    <p key="reg-2" className="mt-4">
     Under this User Agreement, you accept full responsibility for any mistakes and/or omissions in Trendvise pro, including information transfer or translation. You accept full responsibility for implementing sufficient procedures and checks to meet your requirements for the consistency and suitability of Trendvise pro, including the information, as well as for maintaining any means necessary for the reconstruction of lost data or subsequent manipulations or analyses of the information under the User Agreement.
    </p>,
    <p key="reg-2" className="mt-4">
     You agree that Trendvise pro (including its officers, directors, employees, affiliates, group companies, agents, representatives, or subcontractors) will not be liable for any special, incidental, or consequential damages resulting from the use or inability to use Trendvise pro for any reason. Trendvise pro and its affiliates, allies, officers, directors, employees, and agents shall have no responsibility to the user and/or any third party in tort, contract, or otherwise.
    </p>,
  ],
},
  {
  title: '10) LINKS TO THIRD PARTY SITES',
  content: [
    <p key="reg-1">
      You may exit Trendvise pro by using the links on this page. Trendvise pro has no control over the linked websites. Trendvise pro has not verified or authorized these sites and is not responsible for their contents or omissions, or for links contained in a connected site. The inclusion of any linked site does not constitute endorsement of the site by Trendvise pro. A different agreement governs third-party links to Trendvise pro
    </p>,
  ],
},
  {
  title: '11) INDEMNIFICATION',
  content: [
    <p key="reg-1">
      You agree to indemnify, defend, and hold Trendvise pro (including its and their officers, directors, employees, affiliates, group companies, agents, representatives, or subcontractors) harmless from any and all claims and losses imposed on, incurred by, or asserted as a result of or related to: (a) your access and use of Trendvise pro; (b) any non-compliance by user with the terms and conditions hereof; or (c) any third-party actions related to users. Any invalid clause shall be regarded as severable and shall have no bearing on the legality or enforceability of the remainder. Only in writing, signed by Trendvise pro, may these conditions be altered.
    </p>,
  ],
},
  {
  title: '12) TERMS IN CONFLICT',
  content: [
    <p key="reg-1">
     You agree to indemnify, defend, and hold Trendvise pro (including its and their officers, directors, employees, affiliates, group companies, agents, representatives, or subcontractors) harmless from any and all claims and losses imposed on, incurred by, or asserted as a result of or related to: (a) your access and use of Trendvise pro; (b) any non-compliance by user with the terms and conditions hereof; or (c) any third-party actions related to users. Any invalid clause shall be regarded as severable and shall have no bearing on the legality or enforceability of the remainder. Only in writing, signed by Trendvise pro, may these conditions be altered.
    </p>,
  ],
},
  {
  title: '13)ATTORNEY’S FEES',
  content: [
    <p key="reg-1">
      You agree to indemnify, defend, and hold Trendvise pro (including its and their officers, directors, employees, affiliates, group companies, agents, representatives, or subcontractors) harmless from any and all claims and losses imposed on, incurred by, or asserted as a result of or related to: (a) your access and use of Trendvise pro; (b) any non-compliance by user with the terms and conditions hereof; or (c) any third-party actions related to users. Any invalid clause shall be regarded as severable and shall have no bearing on the legality or enforceability of the remainder. Only in writing, signed by Trendvise pro, may these conditions be altered.
    </p>,
  ],
},
  {
  title: '14) AGREEMENT IN ITS ENTIRETY',
  content: [
    <p key="reg-1">
     This User Agreement is the parties’ only agreement, and no other agreement, written or oral, exists between you and Trendvise pro. By accessing the Trendvise pro information, you accept full responsibility for any and all gains and losses, financial, emotional, or otherwise, that you experience, suffer, or incur.
    </p>,
    <p key="reg-2" className="mt-4">
      Trendvise pro does not guarantee the consistency, completeness, or timeliness of the views, opinions, or recommendations stated in the Information, and does not offer investment advice or promote the purchase or sale of any securities or investment by you or any other individual.
    </p>,
    <p key="reg-2" className="mt-4">
      The Information is not intended to offer tax, legal, or financial advice, which you should get from your professional adviser before making any of the investments indicated in the Information. The material does not represent a solicitation of the purchase or selling of securities by the information providers, Trendvise pro, or others.
    </p>,
    <p key="reg-2" className="mt-4">
      This liability disclaimer applies to any damages or injury caused by any failure of performance, error, omission, interruption, deletion, defect, delay in operation or transmission, computer virus, communication line failure, theft or destruction, or unauthorized access to, alteration of, or use of record, whether for breach of contract, tort, negligence, or any other cause of action. Neither Trendvise pro nor any of its employees, agents, successors, assignees, affiliates, group companies, or content or service providers shall be liable to you or any other third party for any direct, indirect, incidental, special, or consequential damages arising from use of the service or inability to gain access to or use the service, or any breach of any warranty.
    </p>,
    <p key="reg-2" className="mt-4">
      The following restriction may not apply to you because some countries do not allow the exclusion or limitation of responsibility for consequential or incidental damages. In such countries, Trendvise pro, its employees, agents, successors, assignees, affiliates, group businesses, and content or service suppliers’ liability is limited to the amount specified by law.
    </p>,
  ],
},
{
  title: '15) DISPUTE RESOLUTION',
  content: [
    <p key="reg-1">
      All disputes, differences, and questions of any kind that arise between the parties to this agreement at any time regarding the construction of or relating to anything contained in or arising out of this agreement, or as to the rights, duties, or liabilities under it or the parties to it, shall be referred to the sole Arbitrator under the Arbitration and Conciliation Act, 1996. The Managing Director of Trendvise pro will designate the single Arbitrator. The Arbitration Proceedings will take place in Mumbai, Maharashtra, India. The arbitration will be held in Mumbai, Maharashtra, India. The parties’ arbitration proceedings shall be governed solely by the laws of India.
    </p>,
  ],
},
{
  title: '16) JURISDICTION',
  content: [
    <p key="reg-1">
      Both parties agree that all claims, differences, and disputes, including any agreements, contracts, and transactions made with reference to anything incidental to or in pursuance thereof, or relating to their validity, construction, interpretation, fulfillment, or the rights, obligations, and liabilities of the parties thereto, and including any question of whether such dealings, transactions, MOA, or contracts have been entered into or not, shall be subject to the exclusive jurisdiction of the Courts of Mumbai only.
    </p>,
  ],
},
];

export default TermsandConditions;
