import React, { createContext, useContext, useState } from "react";

type ContactFormContextType = {
  isContactOpen: boolean;
  setIsContactOpen: (value: boolean) => void;
};

const ContactFormContext = createContext<ContactFormContextType | undefined>(undefined);

export const ContactFormProvider = ({ children }: { children: React.ReactNode }) => {
  const [isContactOpen, setIsContactOpen] = useState(false);

  return (
    <ContactFormContext.Provider value={{ isContactOpen, setIsContactOpen }}>
      {children}
    </ContactFormContext.Provider>
  );
};

export const useContactForm = () => {
  const context = useContext(ContactFormContext);
  if (!context) {
    throw new Error("useContactForm must be used within a ContactFormProvider");
  }
  return context;
};

// ✅ Export this if you are importing `ContactFormContext` directly
export { ContactFormContext };
