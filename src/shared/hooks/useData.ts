import { useEffect, useState } from "react";

function useData<T>(callback: () => T) {
  const [data, setData] = useState<T>();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const result = callback();
      setData(result);
      setLoading(false);
    }, 1000);
    return () => clearTimeout(timeout);
  }, [callback]);

  return { data, isLoading };
}

export { useData };
