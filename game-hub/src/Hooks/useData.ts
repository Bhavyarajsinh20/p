import { useEffect, useState } from "react";
import apiClilent from "../service/api-clilent";
import { AxiosRequestConfig, CanceledError } from "axios";

interface FetchRespones<T>{
    count:number;
    results:T[];

}

const useData= <T>(endpoint:string,requstconfing?:AxiosRequestConfig,deps?:any[])=> {
    const [data, setData] = useState<T[]>([]);
    const [error, setError] = useState("");
    const[isLoding,setLoding]= useState(false);

  
  useEffect(() => {
    const controller = new AbortController();

    setLoding(true);
    apiClilent
      .get<FetchRespones<T>>(endpoint,{signal:controller.signal, ...requstconfing})
      .then((res) => {
        setData(res.data.results);
        setLoding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoding(false);
    });

      return () => controller.abort();
  },deps ? [...deps] : []);

  return {data,error,isLoding};
};
export default useData;