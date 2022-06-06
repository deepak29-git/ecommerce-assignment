import axios from "axios";
import { useEffect, useState } from "react";
import { useData } from "./Components/context/data-context";
const useAxios = () => {
    
  const { products, setProducts } = useData();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
   

  useEffect(() => {
    (async () => {
        try {
          setLoading(true);
          const { data } = await axios.get("data.json", {
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json",
            },
          });
          setLoading(false);
          setProducts(data);
        } catch (error) {
          setError(error);
        }
      })();
      return ()=>{
          setProducts([])
      }
  }, [setProducts]);

  return { products, loading, error, setProducts };
};

export { useAxios };
