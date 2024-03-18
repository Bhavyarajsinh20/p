import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCart from "./GameCart";
import GameCartSkeleton from "./GameCartSkeleton";
import GameCartContainer from "./GameCartContainer";
import { MdPadding } from "react-icons/md";

const GameGride = () => {
  const { data, error, isLoding } = useGames();
  const skeletons = [1, 2, 3, 4, 5, 6];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 3 }}
        padding={"10px"}
        spacing={5}
      >
        {isLoding &&
          skeletons.map((skeleton) => (
            <GameCartContainer>
              <GameCartSkeleton key={skeleton} />
            </GameCartContainer>
          ))}
        {data.map((games) => (
          <GameCartContainer>
            <GameCart key={games.id} game={games} />
          </GameCartContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
