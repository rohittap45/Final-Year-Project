import React, { createContext, useState, useContext } from "react";

const RegistrationContext = createContext();

export const useRegistration = () => useContext(RegistrationContext);

export const RegistrationProvider = ({ children }) => {
  const [registrationData, setRegistrationData] = useState({
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
    name: "",
    gender: "",
    age: "",
    height: "",
    currentWeight: "",
    targetWeight: "",
    targetBody: "",
    fitnessGoal: "",
  });

  return (
    <RegistrationContext.Provider value={{ registrationData, setRegistrationData }}>
      {children}
    </RegistrationContext.Provider>
  );
};
