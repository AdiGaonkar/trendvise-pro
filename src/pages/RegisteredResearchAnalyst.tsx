import React from 'react';
import Movingtext from '@/components/Movingtext';

const InfoRow = ({
  label,
  value,
  isEmail = false,
}: {
  label: string;
  value: string;
  isEmail?: boolean;
}) => (
  <div className="flex flex-col sm:flex-row sm:items-start gap-1 sm:gap-2">
    <span className="font-medium w-60">{label} -</span>
    {isEmail ? (
      <a href={`mailto:${value}`} className="text-blue-600 underline break-all">
        {value}
      </a>
    ) : (
      <span>{value}</span>
    )}
  </div>
);

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
          Registered Research Analyst
        </h1>
      </div>

      {/* Scrolling Text */}
      <Movingtext />

      {/* Research Analyst Info Section */}
      <div className="bg-white px-20 items-center py-12 md:px-20">
        <h1 className="text-2xl md:text-3xl font-semibold mb-8">Registered Research Analyst</h1>

        <div className="space-y-4 text-gray-800">
          <InfoRow label="Grievance Officer" value="Nakul Chakraborty" />
          <InfoRow label="Compliance Number" value="8850279928" />
          <InfoRow label="Register no" value="INC40089754" />
          <InfoRow label="Compliance E-mail" value="trendvisepro@gmail.com" isEmail />
          <InfoRow label="Sales E-mail" value="trendvisepro@gmail.com" isEmail />
          <InfoRow
            label="Registered Address"
            value="307,MIDC Kopar khairne, Navi Mumbai , Maharashtra 400605"
          />
          <InfoRow
            label="Corporate Office Address"
            value="307,MIDC Kolar khairne , Navi Mumbai , Maharashtra 400605"
          />
        </div>

        <div className="mt-10">
          <p className="font-semibold underline text-red-600 mb-2">Warning</p>
          <p className="text-gray-700">
            Investment in securities market are subject to market risk. Read all the related documents carefully before investing.
          </p>
        </div>

        <div className="mt-6">
        </div>
      </div>
    </div>
  );
};

export default TermsandConditions;
