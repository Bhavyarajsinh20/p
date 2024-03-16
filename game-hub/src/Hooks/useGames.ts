import { useEffect, useState } from "react";
import apiClilent from "../service/api-clilent";
import { CanceledError } from "axios";

export interface Platform{
    id: number;
    name: string;
    slug:string;
}
export interface Game {
    id: number;
    name: string;
    background_image:string;
    parent_platforms:{platform:Platform}[];
    metacritic: number;
  }
  
  interface FetchGame {
    count: number;
    results: Game[];
  }

const useGames=()=>{
    const [games, setGames] = useState<Game[]>([]);
    const [error, setError] = useState("");
    const[isLoding,setLoding]= useState(false);

  
  useEffect(() => {
    const controller = new AbortController();

    setLoding(true);
    apiClilent
      .get<FetchGame>("/games",{signal:controller.signal})
      .then((res) => {
        setGames(res.data.results);
        setLoding(false);
      })
      .catch((err) => {
        if (err instanceof CanceledError) return;
        setError(err.message)
        setLoding(false);
    });

      return () => controller.abort();
  },[]);

  return {games,error,isLoding};
}

export default useGames;