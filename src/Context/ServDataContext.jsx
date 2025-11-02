import { createContext, useEffect, useState } from "react"

export const ServDataContext = createContext()

const ServDataProvider = ({ children }) => {
  const [servData, setServData] = useState([]);

  useEffect(() => {
    fetch("/servicesData.json")
      .then((res) => res.json())
      .then((data) => {
        setServData(data);
      })
      .catch((e) => {
        console.log(e.message);
      });
  }, []);

  return (
    <ServDataContext.Provider value={{servData}}>
      {children}
    </ServDataContext.Provider>
  );
}; 

export default ServDataProvider;
