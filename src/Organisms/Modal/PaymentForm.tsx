import React, { useEffect, useState } from "react";
import {
  loadStripe,
  // ,
  //  PaymentRequest
} from "@stripe/stripe-js";
import {
  Elements,
  CardElement,
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  //   PaymentRequestButtonElement,
} from "@stripe/react-stripe-js";
import axios from "axios";
// import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import { ref, update } from "firebase/database";
import { db } from "../../firebase";

// Load Stripe
const stripePromise = loadStripe(
  import.meta.env.VITE_STRIPE_PUBLIC_KEY as string
);

const PaymentForm: React.FC<any> = ({ ammount, duration, type }) => {
  const companyId = localStorage.getItem("circoCompanyUid");
  const currentDate = new Date();
  const currentTimestamp = currentDate.getTime(); // Current date in milliseconds

  const oneMonthLater = new Date(currentDate);
  oneMonthLater.setMonth(oneMonthLater.getMonth() + 1);
  const oneMonthLaterTimestamp = oneMonthLater.getTime(); // One month later in milliseconds

  const oneYearLater = new Date(currentDate);
  oneYearLater.setFullYear(oneYearLater.getFullYear() + 1);
  const oneYearLaterTimestamp = oneYearLater.getTime();
  const stripe = useStripe();
  const elements = useElements();
  //   const location = useLocation();
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    cardholderName: "",
  });

  //   const [country, setCountry] = useState("");
  //   const [state, setState] = useState("");
  //   const [city, setCity] = useState("");
  //   const [paymentData, setPaymentData] = useState<any>(null);
  const [btnLoader, setBtnLoader] = useState(false);

  const apiBaseUrl = import.meta.env.VITE_APP_API_URL;
  //   const token = localStorage.getItem("token");
  //   const total = location.state?.total || 0;
  const roundedTotal = Math.round(ammount * 100); // Convert to cents
  const [paymentRequest, setPaymentRequest] = useState<any>(null);
  console.log(paymentRequest);

  useEffect(() => {
    if (stripe) {
      try {
        const pr = stripe.paymentRequest({
          country: "US",
          currency: "usd",
          total: {
            label: "Total Amount",
            amount: roundedTotal,
          },
          requestPayerName: true,
          requestPayerEmail: true,
        });

        pr.canMakePayment().then((result) => {
          if (result) {
            setPaymentRequest(pr);
          }
        });
      } catch (error) {
        console.log(error);
      }
    }
  }, [stripe]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handlePayment = async (e: React.FormEvent) => {
    e.preventDefault();
    toast.dismiss();

    if (!stripe || !elements) return;
    setBtnLoader(true);

    const cardElement = elements.getElement(CardElement);
    if (!cardElement) return;

    try {
      // Step 1: Create Payment Method
      const { error, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardElement,
        billing_details: {
          email: formData.email,
          name: formData.cardholderName,
        },
      });

      if (error) {
        // toast.error(error?.message);
        console.log(error);

        setBtnLoader(false);
        return;
      }

      // Step 2: Process Payment
      const response = await axios.post(
        `${apiBaseUrl}/payment/processByMethodId`,
        {
          amount: ammount,
          paymentMethodId: paymentMethod.id,
          token: "12f3g4hj2j3h4g54h3juyt5j4k3jngbfvkg43hj",
        },
        {
          headers: {
            Authorization: `Bearer 12f3g4hj2j3h4g54h3juyt5j4k3jngbfvkg43hj`,
          },
        }
      );

      if (response?.data?.success) {
        const selfPaymentData = {
          subscription: duration,
          transactionId: response?.data?.paymentIntent?.transactionId,
          isProVersion: true,
          isTrialPeriod: false,
          proVersionExpiryDate:
            duration === "monthly"
              ? JSON.stringify(oneMonthLaterTimestamp)
              : JSON.stringify(oneYearLaterTimestamp),
          proVersionPurchaseDate: JSON.stringify(currentTimestamp),
        };

        const teamsPaymentData = {
          teamsSubscription: duration,
          teamsTransactionId: response?.data?.paymentIntent?.transactionId,
          isTeamsProVersion: true,
          isTeamsTrialPeriod: false,
          teamsProVersionExpiryDate:
            duration === "monthly"
              ? JSON.stringify(oneMonthLaterTimestamp)
              : JSON.stringify(oneYearLaterTimestamp),
          teamsProVersionPurchaseDate: JSON.stringify(currentTimestamp),
        };

        await update(
          ref(db, `User/${companyId}`),
          type === "teams" ? { ...teamsPaymentData } : { ...selfPaymentData }
        ).then(() => {});
      }
      console.log(response.data.paymentIntent);
      console.log(response.data, "here is trasaction data");

      // Step 3: Navigate to Receipt
      localStorage.setItem(
        "paymentIntent",
        JSON.stringify(response.data.paymentIntent)
      );
      toast.success("Payment Successful!");
      //   setTimeout(
      //     () =>
      //       navigate("/receipt", {
      //         state: { paymentIntent: response.data.paymentIntent },
      //       }),
      //     1000
      //   );
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "Payment failed");
    }
  };

  //   const handleNavigateReceipt = () => {
  //     navigate("/receipt", {
  //       state: { paymentIntent: localStorage.getItem("paymentIntent") },
  //     });
  //   };

  return (
    <div className=" w-full mx-auto p-6 bg-white  rounded-xl border">
      <h2 className="text-3xl font-semibold mb-5 text-center text-gray-700">
        Secure Payment
      </h2>

      {/* Total Amount */}
      <div className="mb-4 flex justify-between items-center p-3 bg-gray-100 rounded">
        <span className="text-lg font-medium text-gray-600">Total Amount:</span>
        <span className="text-xl font-bold text-gray-800">${ammount}</span>
      </div>

      <form onSubmit={handlePayment} className="space-y-4">
        {/* Email */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">Email</label>
          <input
            type="email"
            name="email"
            placeholder="Enter your email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Cardholder Name */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Cardholder Name
          </label>
          <input
            type="text"
            name="cardholderName"
            placeholder="Name on card"
            value={formData.cardholderName}
            onChange={handleChange}
            className="w-full p-3 border rounded-lg focus:ring-2 focus:ring-blue-500"
            required
          />
        </div>

        {/* Card Details */}
        <div>
          <label className="block text-gray-600 font-medium mb-1">
            Card Number
          </label>
          <div className="p-3 border rounded-lg bg-gray-100">
            <CardNumberElement className="w-full" />
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4">
          {/* Expiry Date */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">
              Expiry Date
            </label>
            <div className="p-3 border rounded-lg bg-gray-100">
              <CardExpiryElement className="w-full" />
            </div>
          </div>

          {/* CVC */}
          <div>
            <label className="block text-gray-600 font-medium mb-1">CVC</label>
            <div className="p-3 border rounded-lg bg-gray-100">
              <CardCvcElement className="w-full" />
            </div>
          </div>
        </div>

        {/* Pay Now Button */}
        <button
          type="submit"
          className="w-full bg-green-500 text-white py-3 mt-4 rounded-lg text-lg font-semibold hover:bg-green-600 transition-all disabled:bg-gray-400"
          disabled={btnLoader}
        >
          {btnLoader ? "Processing..." : "Pay Now"}
        </button>
      </form>
    </div>
  );
};

// Wrap in Elements Provider
const StripePayment: React.FC<any> = ({ ammount, duration, type }) => {
  return (
    <Elements stripe={stripePromise}>
      <PaymentForm ammount={ammount} duration={duration} type={type} />
    </Elements>
  );
};

export default StripePayment;
