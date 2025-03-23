import { useState } from "react";
import Blureffect from "../assets/images/Blureffect.png";
import Text from "../Atoms/Text";
import PricingCard from "../Organisms/PricingCard";
import PricingTable from "../Organisms/TeamsPayment";
import { useNavigate } from "react-router-dom";

const SubscriptionPlansTemplate = () => {
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [isTeams, setIsTeams] = useState<boolean>(false);
  const navigate = useNavigate();
  const proFeatures = [
    { text: "3 digital business card and QR code", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: false },
    { text: "This is a placeholder message", isAvailable: false },
  ];

  const freeFeatures = [
    { text: "1 digital business card and QR code", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: false },
    { text: "This is a placeholder message", isAvailable: false },
  ];
  const proPlusFeatures = [
    { text: "5 digital business card and QR code", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: true },
    { text: "This is a placeholder message", isAvailable: false },
    { text: "This is a placeholder message", isAvailable: false },
  ];
  return (
    <div
      style={{
        width: "100%",
        minHeight: "100vh",
        backgroundImage: `url(${Blureffect})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      }}
      className="flex flex-col items-center pt-5"
    >
      <h2 className="font-[700] text-[32px]">Choose your right plan</h2>
      <Text
        text="Choose the best plan for you or your business!"
        classes="text-[#898989] font-[400] text-[20px]"
      />
      <div className="w-[100%] flex justify-center items-center mt-5 relative">
        <div className="border border-[#D4D4D4] w-[500px] h-[54px] mt-3 bg-white rounded-full flex relative items-center">
          {/* Moving background div */}
          <div
            className={`w-[48%] h-[93%] absolute bg-primary rounded-full flex justify-center items-center transition-all duration-500 ${
              isTeams ? "translate-x-[3px]" : "translate-x-[255px]"
            }`}
          ></div>

          {/* Annually button */}
          <div
            className={`w-[50%] h-[100%] flex justify-center items-center font-[700] text-[16px] cursor-pointer transition-all duration-500 ${
              isTeams ? "text-[#ffffff]" : "text-[#C7C7C7]"
            }  relative z-10`}
            onClick={() => setIsTeams(true)}
          >
            For business & teams
          </div>

          {/* Monthly button */}
          <div
            className={`w-[50%] h-[100%] flex justify-center items-center font-[700] text-[16px] cursor-pointer transition-all duration-500 ${
              isTeams ? "text-[#C7C7C7]" : "text-[#ffffff]"
            } relative z-10`}
            onClick={() => setIsTeams(false)}
          >
            For individuals
          </div>
        </div>
        <div className="w-[222px] absolute right-[60px]">
          <div className="border border-[#D4D4D4] w-[200px] h-[54px] mt-3 bg-white rounded-full flex relative items-center">
            {/* Moving background div */}
            <div
              className={`w-[48%] h-[93%] absolute bg-primary rounded-full flex justify-center items-center transition-all duration-500 ${
                isMonthly ? "translate-x-[100px]" : "translate-x-[3px]"
              }`}
            ></div>

            {/* Annually button */}
            <div
              className={`w-[50%] h-[100%] flex justify-center items-center font-[700] text-[16px] cursor-pointer transition-all duration-500 ${
                isMonthly ? "text-[#C7C7C7]" : "text-[#ffffff]"
              }  relative z-10`}
              onClick={() => setIsMonthly(false)}
            >
              Annually
            </div>

            {/* Monthly button */}
            <div
              className={`w-[50%] h-[100%] flex justify-center items-center font-[700] text-[16px] cursor-pointer transition-all duration-500 ${
                isMonthly ? "text-[#ffffff]" : "text-[#C7C7C7]"
              } relative z-10`}
              onClick={() => setIsMonthly(true)}
            >
              Monthly
            </div>
          </div>
        </div>
      </div>

      {!isTeams ? (
        <div className="flex gap-5 mt-5">
          <PricingCard
            title="Free"
            price="Free"
            features={freeFeatures}
            buttonText="Get started for free"
            onClick={() => navigate("/myprofiles")}
            amount={0}
          />
          <PricingCard
            title="Pro"
            price={isMonthly ? "$5.99" : "$59.99"}
            features={proFeatures}
            buttonText="Subscrible now"
            onClick={() => {}}
            amount={isMonthly ? 5.99 : 59.99}
            duration={isMonthly ? "monthly" : "yearly"}
          />
          <PricingCard
            title="Pro+"
            price="Coming Soon..."
            features={proPlusFeatures}
            buttonText="Coming Soon"
            onClick={() => {}}
            amount={0}
          />
        </div>
      ) : (
        <PricingTable
          amount={isMonthly ? 5 : 4}
          duration={isMonthly ? "monthly" : "yearly"}
        />
      )}
    </div>
  );
};

export default SubscriptionPlansTemplate;
