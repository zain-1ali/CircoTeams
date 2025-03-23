import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import salesforce from "../../assets/images/salesforce.png";

const schema = yup.object().shape({
  username: yup
    .string()
    .email("Invalid email")
    .required("Username is required"),
  password: yup.string().required("Password is required"),
  securityToken: yup.string().required("Security token is required"),
  instanceUrl: yup
    .string()
    .url("Invalid URL")
    .required("Instance URL is required"),
});

interface SalesforceFormProps {
  data: Record<string, any>[];
}

const SalesforceExportForm: React.FC<SalesforceFormProps> = ({ data }) => {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = async (formData: any) => {
    setLoading(true);
    setMessage("");

    try {
      const salesforceURL = `${formData.instanceUrl}/services/data/v59.0/sobjects/CustomObject__c`;

      const response = await fetch(salesforceURL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${formData.securityToken}`,
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setMessage("✅ Data successfully exported to Salesforce!");
      } else {
        setMessage("❌ Error exporting data. Check your credentials.");
      }
    } catch (error) {
      setMessage("❌ Failed to export data. Please check your connection.");
    }

    setLoading(false);
  };

  return (
    <div className="flex justify-center items-center">
      <div className="bg-white shadow-lg rounded-lg p-6 max-w-lg w-full">
        <img
          src={salesforce}
          alt="Salesforce Logo"
          className="h-16 mx-auto mb-4"
        />

        <h2 className="text-2xl font-semibold text-center text-blue-600 mb-4">
          Export Data to Salesforce
        </h2>

        {/* 📝 Form */}
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          {/* Username */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Salesforce Username
            </label>
            <input
              {...register("username")}
              type="email"
              placeholder="Enter your Salesforce email"
              className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.username?.message}
            </p>
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              {...register("password")}
              type="password"
              placeholder="Enter your password"
              className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.password?.message}
            </p>
          </div>

          {/* Security Token */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Security Token
            </label>
            <input
              {...register("securityToken")}
              type="text"
              placeholder="Enter your security token"
              className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.securityToken?.message}
            </p>
          </div>

          {/* Instance URL */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Instance URL
            </label>
            <input
              {...register("instanceUrl")}
              type="url"
              placeholder="e.g., https://na135.salesforce.com"
              className="w-full border rounded-md px-3 py-2 focus:ring focus:ring-blue-300"
            />
            <p className="text-red-500 text-xs mt-1">
              {errors.instanceUrl?.message}
            </p>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
          >
            {loading ? "Exporting..." : "Export to Salesforce"}
          </button>

          {/* Response Message */}
          {message && (
            <p className="text-center text-sm mt-2 text-blue-600">{message}</p>
          )}
        </form>
      </div>
    </div>
  );
};

export default SalesforceExportForm;
