import React, { useState } from "react";
import CustomModal from "./Modal/Modal";
import StripePayment from "./Modal/PaymentForm";

const PricingTable: React.FC<any> = ({ amount, duration }) => {
  const [paymentModal, setPaymentModal] = useState<boolean>(false);
  return (
    <div className="flex flex-col md:flex-row border rounded-lg shadow-lg p-6 max-w-5xl w-[100%] mx-auto bg-white mt-[30px] mb-5">
      <div className="w-full md:w-1/2 border-r p-6">
        <h2 className="text-lg font-semibold">Circo Teams (5 members)</h2>
        <p className="text-gray-500 flex items-center">
          <span className="text-xl font-bold">${amount} USD</span>{" "}
          <span className="ml-1">/member /month</span>
        </p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4" onClick={() => setPaymentModal(true)}>
          Get Started
        </button>
        <ul className="mt-4 space-y-2">
          {[
            "Digital Card Management",
            "Digital Card Templates",
            "Lead Management",
            "CRM Integrations",
            "Custom lead capture forms",
            "Team Usage Insights",
            "Member Restrictions",
            "Team Directory Integrations",
            "Subteams",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> {item}
            </li>
          ))}
        </ul>
      </div>

      {/* Popl Teams for Enterprise Plan */}
      <div className="w-full md:w-1/2 p-6">
        <h2 className="text-lg font-semibold">
          Circo Teams for Enterprise (200 Members)
        </h2>
        <p className="text-gray-500">Contact Us</p>
        <button className="bg-blue-500 text-white px-4 py-2 rounded-md mt-4">
          Contact Sales
        </button>
        <p className="mt-4">
          Everything in Circo Teams, <span className="font-semibold">plus</span>
        </p>
        <ul className="mt-4 space-y-2">
          {[
            "Priority Response Time from Support",
            "A Success Manager Dedicated to Your Team",
            "Fully Assisted Onboarding",
            "Full Team Trainings",
          ].map((item, index) => (
            <li key={index} className="flex items-center">
              <span className="text-blue-500 mr-2">✔</span> {item}
            </li>
          ))}
        </ul>
      </div>

      <CustomModal
        open={paymentModal}
        onClose={() => setPaymentModal(false)}
        style={{ height: 550, width: 470, borderRadius: 5 }}
        childProps={{
          onclick: () => console.log("clicked"),
        }}
      >
        <StripePayment
          ammount={duration === "monthly" ? amount * 5 : amount * 5 * 12}
          duration={duration}
          type="teams"
        />
      </CustomModal>
    </div>
  );
};

export default PricingTable;
