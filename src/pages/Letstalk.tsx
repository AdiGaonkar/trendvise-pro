import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import emailjs from "@emailjs/browser";

export default function ContactPage() {
  const formRef = useRef<HTMLFormElement>(null);

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
          formRef.current?.reset();
        },
        (error) => {
          console.error("EmailJS Error:", error);
          alert("Failed to send message.");
        }
      );
  };

  return (
    <div className="min-h-screen bg-white px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Left Side - Contact Info */}
        <div>
          <h2 className="text-4xl sm:text-5xl font-light text-gray-900 mb-4">
            Get in touch
          </h2>
          <p className="text-gray-600 mb-8 sm:mb-12">
            Feel free to reach out today; our team is ready to address all your inquiries with professionalism and dedication.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8 sm:mb-12">
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Mobile Number</h3>
              <p className="text-gray-600">8850279928</p>
            </div>
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Email</h3>
              <p className="text-indigo-600">trendvisepro@gmail.com</p>
            </div>
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Office Address</h3>
              <p className="text-indigo-600">307,MIDC Kolar khairne , Navi Mumbai , Maharashtra 400605</p>
            </div>
            <div className="bg-gray-100 p-4 sm:p-6 rounded-lg">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-1 sm:mb-2">Join our Team</h3>
              <p className="text-indigo-600">trendvisepro@gmail.com</p>
              <p className="text-gray-600">8850279928</p>
            </div>
          </div>
        </div>

        {/* Right Side - Contact Form */}
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
            <option value="maharashtra">Maharashtra</option>
            <option value="delhi">Delhi</option>
            <option value="karnataka">Karnataka</option>
            <option value="tamilnadu">Tamil Nadu</option>
          </select>

          <select
            name="user_segment"
            required
            className="w-full p-3 border border-gray-200 rounded appearance-none"
            defaultValue=""
          >
            <option value="" disabled>Segment</option>
            <option value="equity">Equity</option>
            <option value="forex">Forex</option>
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
      </div>
    </div>
  );
}
