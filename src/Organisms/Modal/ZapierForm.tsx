import React, { useState } from "react";
import zapier from "../../assets/images/zapier.png";

const ZapierForm: React.FC<any> = ({ data }) => {
  const [zapierWebhookUrl, setZapierWebhookUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState<string | null>(null);
  const apiBaseUrl = import.meta.env.VITE_APP_API_URL;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!zapierWebhookUrl) {
      setMessage("Please enter the Zapier Webhook URL.");
      return;
    }

    const payload = {
      zapierWebhookUrl,
      token: "12f3g4hj2j3h4g54h3juyt5j4k3jngbfvkg43hj",
      contacts: data || [],
    };

    setLoading(true);
    setMessage(null);

    try {
      const response = await fetch(`${apiBaseUrl}/export/zapier`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (response.ok) {
        setMessage("Data sent to Zapier successfully! ✅");
        setLoading(false);
      } else {
        setMessage("Failed to send data to Zapier ❌");
        setLoading(false);
      }
    } catch (error) {
      setMessage("Error sending data. Please check the webhook URL.");
      console.log(error);
    }
  };

  return (
    <div className="flex items-center justify-center h-[300px]  p-4 bg-transparent">
      <div className="w-full max-w-md bg-white  rounded-lg p-6">
        {/* Zapier Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={zapier}
            alt="Zapier Logo"
            className="h-[50px] object-cover"
          />
        </div>

        <h2 className="text-2xl font-semibold text-center text-gray-700 mb-4">
          Enter Zapier Webhook URL
        </h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Webhook URL Input */}
          <input
            type="text"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
            placeholder="Enter Zapier Webhook URL"
            value={zapierWebhookUrl}
            onChange={(e) => setZapierWebhookUrl(e.target.value)}
          />

          {/* Submit Button */}
          <button
            type="submit"
            className={`w-full py-2 text-white rounded-md ${
              loading ? "bg-gray-400" : "bg-orange-500 hover:bg-orange-600"
            } transition`}
            disabled={loading}
          >
            {loading ? "Sending..." : "Send Data"}
          </button>
        </form>

        {/* Status Message */}
        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("success") ? "text-green-600" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}
      </div>
    </div>
  );
};

export default ZapierForm;
