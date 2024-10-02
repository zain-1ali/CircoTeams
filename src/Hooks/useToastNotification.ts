import { toast } from 'react-hot-toast';

const useToastNotifications = () => {
  // Function to display a success toast
  const showSuccess = (message: string) => {
    toast.success(message);
  };

  // Function to display an error toast
  const showError = (message: string) => {
    toast.error(message);
  };

  return { showSuccess, showError };
};

export default useToastNotifications;
