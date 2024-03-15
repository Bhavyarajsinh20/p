import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCart from "./GameCart";

const GameGride = () => {
  const { games, error } = useGames();
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5 }} spacing={10}>
        {games.map((game) => (
          <GameCart key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
