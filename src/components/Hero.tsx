import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { useContactForm } from "@/context/ContactFormContext";
import emailjs from "@emailjs/browser";
import Movingtext from "./Movingtext";

const Hero = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const { isContactOpen, setIsContactOpen } = useContactForm();

  const sendEmail = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_lio1pis",
        "template_wben4ys",
        formRef.current,
        "uf5g6o_BiofBLYRp-"
      )
      .then(
        () => {
          alert("Message sent successfully!");
          setIsContactOpen(false);
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <section className="bg-gradient-to-r from-white to-white text-black py-20 md:py-16">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <div className="animate-fade-up max-w-3xl mx-auto mb-10">
            <div className="flex items-center justify-center mb-8">
              <div className="bg-blue-600 rounded-full h-8 w-8 mr-2"></div>
              <div className="bg-yellow-400 rounded-full h-8 w-8"></div>
            </div>

            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-3">
              Trendvise pro your <span className="text-purple-600">Premium</span>
            </h1>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Market Analysis Service <span className="text-orange-500">in India</span>.
            </h2>

            <p className="text-gray-800 mb-8 max-w-2xl mx-auto">
              Explore Trendvise pro, your reliable source for valuable stock market insights!
              Our team of experts is ready to assist you with personalized tips and strategies,
              unveiling the hidden secrets of the Indian market.
            </p>

            <div className="flex flex-wrap gap-4 justify-center">
              <Link to="/Trendwise">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-2">
                  Learn more
                </Button>
              </Link>
              <Button
                className="bg-purple-600 hover:bg-purple-700 text-white px-8 py-2"
                onClick={() => setIsContactOpen(true)}
              >
                Get in touch with us
              </Button>
            </div>
          </div>
        </div>
      </div>

      <Dialog open={isContactOpen} onOpenChange={setIsContactOpen}>
        <DialogContent className="sm:max-w-md bg-white border-none">
          <DialogHeader>
            <DialogTitle className="text-2xl font-bold mb-6 text-center">
              Get in touch with us
            </DialogTitle>
          </DialogHeader>

          <form ref={formRef} onSubmit={sendEmail} className="space-y-4">
            <input
              name="user_name"
              type="text"
              placeholder="Name"
              required
              className="w-full p-3 border border-gray-200 rounded"
            />
            <input
              name="user_mobile"
              type="tel"
              placeholder="Enter Mobile No."
              required
              className="w-full p-3 border border-gray-200 rounded"
            />
            <input
              name="user_email"
              type="email"
              placeholder="Enter Email Address"
              required
              className="w-full p-3 border border-gray-200 rounded"
            />

            <select
              name="user_state"
              required
              className="w-full p-3 border border-gray-200 rounded appearance-none"
              defaultValue=""
            >
              <option value="" disabled>State</option>
              {[
                "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", "Chhattisgarh", "Goa",
                "Gujarat", "Haryana", "Himachal Pradesh", "Jharkhand", "Karnataka", "Kerala",
                "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", "Mizoram", "Nagaland",
                "Odisha", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", "Telangana", "Tripura",
                "Uttar Pradesh", "Uttarakhand", "West Bengal", "Delhi"
              ].map((state) => (
                <option key={state} value={state.toLowerCase().replace(/\s/g, "_")}>
                  {state}
                </option>
              ))}
            </select>

            <select
              name="user_segment"
              required
              className="w-full p-3 border border-gray-200 rounded appearance-none"
              defaultValue=""
            >
              <option value="" disabled>Segment</option>
              <option value="equity">Equity</option>
              <option value="forex">Option</option>
              <option value="commodity">Commodity</option>
            </select>

            <select
              name="user_investment"
              required
              className="w-full p-3 border border-gray-200 rounded appearance-none"
              defaultValue=""
            >
              <option value="" disabled>Investment</option>
              <option value="small">₹10,000 - ₹50,000</option>
              <option value="medium">₹50,000 - ₹2,00,000</option>
              <option value="large">Above ₹2,00,000</option>
            </select>

            <div className="flex items-start">
              <Checkbox id="terms" className="mt-1 mr-2" required />
              <label htmlFor="terms" className="text-sm">
                I accept terms and conditions.
              </label>
            </div>

            <Button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white py-3"
            >
              Get Live Demo
            </Button>
          </form>
        </DialogContent>
      </Dialog>

      {/* WhatsApp Floating Button for Mobile */}
      <a
        href="https://wa.me/918850279928" // Replace with your actual WhatsApp number
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-4 right-4 sm:hidden bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg z-50"
        aria-label="Chat with us on WhatsApp"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          fill="currentColor"
          className="h-6 w-6"
        >
          <path d="M16 .001C7.164.001 0 7.164 0 16c0 2.82.738 5.547 2.137 7.952L.01 32l8.264-2.105A15.875 15.875 0 0 0 16 32c8.837 0 16-7.164 16-16s-7.163-15.999-16-15.999zm0 29.405a13.27 13.27 0 0 1-6.762-1.847l-.485-.286-4.906 1.25 1.3-4.777-.314-.491A13.295 13.295 0 1 1 16 29.406zm7.278-9.852c-.398-.199-2.35-1.159-2.714-1.292-.364-.133-.63-.199-.896.2-.265.398-1.03 1.292-1.263 1.558-.232.265-.464.299-.861.1-.397-.2-1.679-.619-3.2-1.975-1.183-1.054-1.98-2.357-2.212-2.754-.232-.398-.026-.611.175-.81.179-.178.398-.465.597-.698.2-.232.265-.398.398-.663.133-.266.067-.497-.034-.696-.099-.199-.875-2.104-1.2-2.882-.316-.762-.639-.658-.875-.672-.232-.012-.497-.015-.763-.015-.265 0-.696.1-1.061.498-.364.398-1.393 1.36-1.393 3.316 0 1.956 1.426 3.844 1.625 4.108.199.265 2.81 4.29 6.807 6.021.953.41 1.697.654 2.276.837.956.305 1.826.263 2.515.16.767-.115 2.35-.961 2.681-1.887.331-.926.331-1.72.232-1.887-.099-.166-.365-.265-.763-.464z" />
        </svg>
      </a>

    </section>
  );
};

export default Hero;
