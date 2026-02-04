
import { Link } from 'react-router-dom';
import { PhoneCall, Mail, MapPin, Facebook, Twitter, Linkedin, Instagram } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-dealwise-blue text-white pt-16 pb-8">
      <div className="container mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-x-2 gap-y-1">
          {/* Company Info */}
          <div className='mr-10'>
            <h3 className="text-xl font-bold mb-4 text-dealwise-green">TrendvisePro</h3>
            <p className="text-sm text-gray-300">Registration: INC40089754</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Firm</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-dealwise-green transition-colors">Home</Link>
              </li>
              <li>
                <div>
                  <Link to="/Trendwise" className="hover:text-dealwise-green transition-colors">Subscriptions</Link>
                  <ul className="ml-4 mt-1 space-y-1 text-sm">
                    <li>
                      <Link to="/Subscription" className="hover:text-dealwise-green transition-colors">• Index Option Silver Package</Link>
                    </li>
                    <li>
                      <Link to="/Subscriptionplatinum" className="hover:text-dealwise-green transition-colors">• Index Option Platinum Package</Link>
                    </li>
                  </ul>
                </div>
              </li>
              <li>
                <Link to="/Trendwise" className="hover:text-dealwise-green transition-colors">About us</Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link to="/StandardDoandDon" className="hover:text-dealwise-green transition-colors">Standard Do’s and Don’t</Link></li>
              <li><Link to="/TermsandConditions" className="hover:text-dealwise-green transition-colors">Terms and Conditions</Link></li>
              <li><Link to="/PrivacyPolicy" className="hover:text-dealwise-green transition-colors">Privacy Policy</Link></li>
              <li><Link to="/RefundPolicy" className="hover:text-dealwise-green transition-colors">Refund Policy</Link></li>
              <li><Link to="/Charter" className="hover:text-dealwise-green transition-colors">Investor Charter</Link></li>
              <li><Link to="/LegalDisclaimer" className="hover:text-dealwise-green transition-colors">Legal Disclaimer</Link></li>
              <li><Link to="/GrievanceRedressalProcess" className="hover:text-dealwise-green transition-colors">Grievance Redressal Process</Link></li>
              <li><Link to="/AdvertisementDisclaime" className="hover:text-dealwise-green transition-colors">Advertisement Disclaimer</Link></li>
              <li><Link to="/RegisteredResearchAnalyst" className="hover:text-dealwise-green transition-colors">Registered Research Analyst</Link></li>
              <li><Link to="/Disclosure" className="hover:text-dealwise-green transition-colors">Disclosure</Link></li>

            </ul>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center">
                <PhoneCall size={18} className="mr-2 text-dealwise-green" />
                <span>+91 7710089851</span>
              </li>
              <li className="flex items-center">
                <Mail size={18} className="mr-2 text-dealwise-green" />
                <span>trendvisepro@gmail.com </span>
              </li>
              <li className="flex items-start">
                <MapPin size={18} className="mr-2 text-dealwise-green mt-1" />
                <span>307,MIDC Kopar khairne , Navi Mumbai , Maharashtra 400605</span>
              </li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-lg font-bold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-dealwise-green transition-colors">
                <Facebook size={24} />
              </a>
              <a href="#" className="hover:text-dealwise-green transition-colors">
                <Twitter size={24} />
              </a>
              <a href="#" className="hover:text-dealwise-green transition-colors">
                <Linkedin size={24} />
              </a>
              <a href="https://www.instagram.com/trendvisepro?igsh=MXBrMW4yZXA5OTl2dg%3D%3D" className="hover:text-dealwise-green transition-colors">
                <Instagram size={24} />
              </a>
            </div>
            <p className="mt-4 text-sm">
              24/7 Customer Support Available
            </p>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-12 pt-8 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Trendvisepro. All rights reserved.</p>
          <p className="mt-2">
            Investments are subject to market risks. Please read all scheme related documents carefully.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
