// src/DataContext.js
import React, { createContext, useContext, useEffect, useState } from 'react';

const DataContext = createContext();




export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [totalSent,Settotalsent]=useState(0);
  const [totalRecieved,Settotalrecieved]=useState(0);
  const [total,Settotal]=useState(0);

  // Function to fetch data
  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:5000/data");
      const result = await response.json();
      setData(result.reverse());
    } catch (error) {
      console.error("Failed to fetch data:", error);
    }
  };

  // Initial fetch when component mounts
  useEffect(() => {
    fetchData();
  }, []);

  useEffect(()=>{
    let sum=0;
    let sum2=0;
    for (const key in data) {
      if(data[key].Type === false)
      {sum+=data[key].Amount;
      }
      else{
        sum2+=data[key].Amount;
      }
      Settotalsent(sum);
      Settotalrecieved(sum2);
      Settotal(sum2-sum)
        
    }
  },[data])

  return (
    <DataContext.Provider value={{data,total,totalSent,totalRecieved,fetchData}}>
      {children}
    </DataContext.Provider>
  );
};

export const useData = () => useContext(DataContext);

