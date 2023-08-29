import { useState } from "react";
import { ApiResponse } from "apisauce";

function useApi<T>(apiFunc: () => Promise<ApiResponse<T>>) {
  const [data, setData] = useState<T>();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const request = async () => {
    setLoading(true);
    const res = await apiFunc();
    setLoading(false);

    if (!res.ok) return setError(true);

    if (res.data) {
      setError(false);
      setData(res.data);
    }
  };

  return {
    request,
    data,
    error,
    loading,
  };
}

export default useApi;
