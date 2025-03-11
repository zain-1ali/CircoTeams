export const generateUsername = (firstName: string, email: string) => {
    if (!firstName || !email) return '';
  
    const namePart = firstName.substring(0, 3).toLowerCase();
    const emailPart = email.split('@')[0].substring(0, 3).toLowerCase();

    const randomNum = Math.floor(100 + Math.random() * 900);
  
    return `${namePart}${emailPart}${randomNum}`;
  };