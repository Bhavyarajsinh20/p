import { useEffect, useState } from "react";
import apiClilent from "../service/api-clilent";
import { Text } from "@chakra-ui/react";

interface Game {
  id: number;
  name: string;
}

interface FetchGame {
  count: number;
  results: Game[];
}

const GameGride = () => {
  const [games, setGames] = useState<Game[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    apiClilent
      .get<FetchGame>("/xgames")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  return (
    <>
      {error && <Text>{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name}</li>
        ))}
      </ul>
    </>
  );
};

export default GameGride;
