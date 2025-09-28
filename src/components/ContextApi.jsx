import axios from 'axios';
import { createContext, useEffect, useState } from 'react';

const Apidata = createContext();

const ContextApi = ({ children }) => {
  let [info, setInfo] = useState([]);
  let getData = () => {
    axios.get("https://dummyjson.com/products").then((res) => {
      setInfo(res.data.products)
    })
  }
  useEffect(() => {
    getData()
  }, [])

  return (
    <>
      <Apidata.Provider value={info}>{children}</Apidata.Provider>
    </>
  );
};

export { Apidata, ContextApi };