"use client";
import axiosInstance from "@/lib/axios.config";
import { useEffect, useState } from "react";
const useFetchData = () => {
  const [result, setResult] = useState([]);
  const [responseError, setResponseError] = useState<null | any>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const getData = async (url: string) => {
    try {
      setLoading(true);
      const { data } = await axiosInstance.get(url);
      setResult(data);
    } catch (error: any) {
      setResponseError(error.response?.data?.message || "Something went wrong");
    } finally {
      setLoading(false);
    }
  };
  return { getData, result, responseError, loading };
};
export default useFetchData;
