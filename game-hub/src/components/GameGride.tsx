import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCart from "./GameCart";
import GameCartSkeleton from "./GameCartSkeleton";

const GameGride = () => {
  const { games, error, isLoding } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 3 }} spacing={10}>
        {isLoding &&
          skeletons.map((skeleton) => <GameCartSkeleton key={skeleton} />)}
        {games.map((game) => (
          <GameCart key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
