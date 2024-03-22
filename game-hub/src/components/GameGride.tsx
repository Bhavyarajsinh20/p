import { SimpleGrid, Text } from "@chakra-ui/react";
import useGames from "../Hooks/useGames";
import GameCart from "./GameCart";
import GameCartSkeleton from "./GameCartSkeleton";
import GameCartContainer from "./GameCartContainer";
import { Genre } from "../Hooks/useGenrel";

interface Props {
  selectedGenre: Genre | null;
}
const GameGride = ({ selectedGenre }: Props) => {
  const { data, error, isLoding } = useGames(selectedGenre);
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
            <GameCartContainer key={skeleton}>
              <GameCartSkeleton />
            </GameCartContainer>
          ))}
        {data.map((games) => (
          <GameCartContainer key={games.id}>
            <GameCart game={games} />
          </GameCartContainer>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGride;
