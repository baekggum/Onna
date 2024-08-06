// AddressContext.js
import { createContext, useContext, useState } from "react";

const AddressContext = createContext();

export const useAddress = () => useContext(AddressContext);

export const AddressProvider = ({ children }) => {
  const [address, setAddress] = useState({
    doSpecialCity: "",
    city: "",
    district: "",
    roadAddress: "",
    postalCode: "",
    apartmentDetails: "",
  });

  return (
    <AddressContext.Provider value={{ address, setAddress }}>
      {children}
    </AddressContext.Provider>
  );
};
