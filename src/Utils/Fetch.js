import axios from "axios";
import { useState } from "react";

const useFetch = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [data, setData] = useState(null);

  const fetchData = async (method = "GET", url = "", body = {}) => {
    setLoading(true);
    try {
      if (method === "GET") {
        const response = await axios.get(url);
        setData(response?.data);
      } else if (method === "POST") {
        const config = {
          headers: {
            "Content-Type": "application/json",
            Authorization: "Bearer Token",
          },
        };
        const response = await axios.post(url, body, config);
        setData(response?.data);
      }
    } catch (error) {
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  return { data, loading, error, fetchData };
};

export default useFetch;
