import { useState } from "react";
import { PricingCardProps } from "../Types";
import CustomModal from "./Modal/Modal";
import StripePayment from "./Modal/PaymentForm";

const PricingCard: React.FC<PricingCardProps> = ({
  title,
  price,
  features,
  buttonText,
  onClick,
  amount,
  duration,
}) => {
  const [paymentModal, setPaymentModal] = useState<boolean>(false);

  return (
    <div className="w-[350px] bg-white shadow-lg rounded-2xl p-6 text-center border border-gray-200">
      {/* Title */}
      <h2 className="text-xl font-semibold text-blue-600">{title}</h2>
      <p className="text-gray-500 text-sm mt-1">
        For you to share your business and personal info with others
      </p>

      {/* Price */}
      <h1 className="text-3xl font-bold text-blue-600 mt-3">{price}</h1>

      {/* Features */}
      <ul className="mt-4 space-y-2 text-left">
        {features.map((feature, index) => (
          <li
            key={index}
            className={`flex items-center ${
              feature?.isAvailable ? "text-gray-700" : "text-gray-300"
            }  font-medium`}
          >
            <span className="text-blue-500 text-lg">✔</span>
            <span className="ml-2">{feature.text}</span>
          </li>
        ))}
        {/* <li className="flex items-center text-gray-700 font-medium">
          <span className="text-blue-500 text-lg">✔</span>
          <span className="ml-2">1 digital business card and QR code</span>
        </li> */}
      </ul>

      {/* Button */}
      <button
        className="mt-5 bg-blue-600 text-white font-semibold py-2 w-full rounded-lg"
        onClick={() => {
          onClick(), setPaymentModal(title === "Pro" ? true : false);
        }}
      >
        {/* Try 7 days free */}
        {buttonText}
      </button>

      <CustomModal
        open={paymentModal}
        onClose={() => setPaymentModal(false)}
        style={{ height: 550, width: 470, borderRadius: 5 }}
        childProps={{
          onclick: () => console.log("clicked"),
        }}
      >
        <StripePayment ammount={amount} duration={duration} type="self" />
      </CustomModal>
    </div>
  );
};

export default PricingCard;
