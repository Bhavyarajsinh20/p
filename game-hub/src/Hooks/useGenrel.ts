import { useEffect, useState } from "react";
import apiClilent from "../service/api-clilent";
import { CanceledError } from "axios";

interface Genre{
    id:number;
    name:string;

}
interface FetchGenrcRespones{
    count:number;
    results:Genre[];

}

const useGanres= ()=> {
    const [genres, setGenres] = useState<Genre[]>([]);
    const [error, setError] = useState("");
    const[isLoding,setLoding]= useState(false);

  
  useEffect(() => {
    const controller = new AbortController();

    setLoding(true);
    apiClilent
      .get<FetchGenrcRespones>("/genres",{signal:controller.signal})
      .then((res) => {
        setGenres(res.data.results);
        setLoding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoding(false);
    });

      return () => controller.abort();
  },[]);

  return {genres,error,isLoding};
};
export default useGanres;