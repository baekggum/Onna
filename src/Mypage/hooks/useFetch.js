import { useEffect, useState } from "react";

export const useFetch = (url, option) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url, option);
        const data = res.json();
        setData(data);
      } catch (error) {
        setError(error);
      }
    };
    fetchData();
  }, [url]);

  return [data, error];
};
