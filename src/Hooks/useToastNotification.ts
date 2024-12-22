import { useState } from "react";
import { toast } from "react-hot-toast";

const useToastNotifications = () => {
  const [isToastActive, setIsToastActive] = useState(false);

  const showSuccess = (message: string) => {
    if (isToastActive) return; 

    setIsToastActive(true);
    const toastId = toast.success(message, {
      duration: 3000,
    });

    
    setTimeout(() => {
      setIsToastActive(false);
      toast.dismiss(toastId); 
    }, 3000);
  };

  const showError = (message: string) => {
    if (isToastActive) return; 

    setIsToastActive(true);
    const toastId = toast.error(message, {
      duration: 3000,
    });

   
    setTimeout(() => {
      setIsToastActive(false);
      toast.dismiss(toastId); 
    }, 3000);
  };

  return { showSuccess, showError };
};

export default useToastNotifications;
