import { useEffect, useState } from "react";

export function useFetch(fetchFun, initial) {
  const [data, setData] = useState(initial);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    async function fetchData() {
      setIsLoading(true);
      try {
        const data = await fetchFun();
        setData(data);
      } catch (error) {
        setError({ message: error.message || "Failed to fetch user places." });
      }

      setIsLoading(false);
    }

    fetchData();
  }, []);

  return {
    data,
    setData,
    isLoading,
    error,
  };
}
