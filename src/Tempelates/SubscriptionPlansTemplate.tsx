import { useEffect, useState } from "react";
import Blureffect from "../assets/images/Blureffect.png";
import Text from "../Atoms/Text";
import PricingCard from "../Organisms/PricingCard";
import PricingTable from "../Organisms/TeamsPayment";
import { useNavigate } from "react-router-dom";
import { getSingleChildFromDb } from "../Services/Constants";
import { getPlans } from "../Services/SubscriptionServices";

const SubscriptionPlansTemplate = () => {
  const companyId: string | null = localStorage.getItem("circoCompanyUid");
  const [isMonthly, setIsMonthly] = useState<boolean>(false);
  const [isTeams, setIsTeams] = useState<boolean>(false);
  const [allPlans, setAllPlans] = useState<any>([]);
  const navigate = useNavigate();
  const [companyProfile, setCompanyProfile] = useState<any>({});

  const getCompanyProfile = (data: any) => {
    if (data) {
      setCompanyProfile(Object.values(data)?.[0]);
    }
  };

  useEffect(() => {
    getSingleChildFromDb("/User", "id", companyId, getCompanyProfile);
  }, []);

  useEffect(() => {
    getPlans(setAllPlans);
  }, []);
  // const proFeatures = [
  //   { text: "3 digital business card and QR code", isAvailable: true },
  //   { text: "Access to All Link Types", isAvailable: true },
  //   { text: "Access To Unlimited Connections", isAvailable: true },
  //   { text: "Advanced Insights", isAvailable: true },
  //   { text: "CRM Integrations", isAvailable: true },
  //   { text: "Business Card Scanner", isAvailable: true },
  // ];

  const freeFeatures = [
    { text: "1 digital business card and QR code", isAvailable: true },
    { text: "50+ Different Link Types", isAvailable: true },
    { text: "Only the 5 Most Recent Connections", isAvailable: true },
    { text: "Basic Insights", isAvailable: true },
    { text: "CRM Integrations", isAvailable: false },
    { text: "Business Card Scanner", isAvailable: false },
  ];
  // const proPlusFeatures = [
  //   { text: "5 digital business card and QR code", isAvailable: true },
  //   { text: "This is a placeholder message", isAvailable: true },
  //   { text: "This is a placeholder message", isAvailable: true },
  //   { text: "This is a placeholder message", isAvailable: true },
  //   { text: "This is a placeholder message", isAvailable: true },
  //   { text: "This is a placeholder message", isAvailable: false },
  //   { text: "This is a placeholder message", isAvailable: false },
  // ];
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
              className={`w-[50%] h-[100%] flex flex-col leading-[16px] justify-center items-center font-[500] text-[15px] cursor-pointer transition-all duration-500 ${
                isMonthly ? "text-[#C7C7C7]" : "text-[#ffffff]"
              }  relative z-10`}
              onClick={() => setIsMonthly(false)}
            >
              Yearly
              <div className="text-[10px]">(20% Off)</div>
            </div>

            {/* Monthly button */}
            <div
              className={`w-[50%] h-[100%] flex justify-center items-center font-[500] text-[15px] cursor-pointer transition-all duration-500 ${
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
            buttonText={
              companyProfile.isProVersion
                ? "Get started for free"
                : "Current Plan"
            }
            onClick={() => navigate("/myprofiles")}
            amount={0}
            companyProfile={companyProfile}
          />
          {allPlans.map((plan: any, index: number) => {
            return (
              plan.subscriptionType === "self" && (isMonthly ? plan.duration === "monthly" : plan.duration === "yearly") && (
                <PricingCard
                  title={plan.name}
                  price={isMonthly ? `$${plan.amount}` : `$${plan.amount}`}
                  priceId={plan.priceId}
                  features={plan.properties}
                  buttonText={
                    companyProfile.isProVersion &&
                    companyProfile.subscription == (isMonthly ? "monthly" : "yearly")
                      ? "Current Plan"
                      : "Subscribe now"
                  }
                  onClick={() => {}}
                  amount={isMonthly ? plan.amount : plan.amount}
                  duration={isMonthly ? "monthly" : "yearly"}
                  key={index}
                  companyProfile={companyProfile}
                />
              )
            );
          })}
          {/* <PricingCard
            title="Pro"
            price={isMonthly ? "$5.99" : "$59.99"}
            features={proFeatures}
            buttonText={
              companyProfile.isProVersion &&
              companyProfile.subscription == (isMonthly ? "monthly" : "yearly")
                ? "Current Plan"
                : "Subscribe now"
            }
            onClick={() => {}}
            amount={isMonthly ? 5.99 : 59.99}
            duration={isMonthly ? "monthly" : "yearly"}
            companyProfile={companyProfile}
          /> */}
          {/* <PricingCard
            title="Pro+"
            price="Coming Soon..."
            features={proPlusFeatures}
            buttonText="Coming soon"
            onClick={() => {}}
            amount={0}
          /> */}
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
