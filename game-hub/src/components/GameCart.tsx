import React from "react";
import { Game } from "../Hooks/useGames";
import { Card, CardBody, Heading, Image } from "@chakra-ui/react";

interface Props {
  game: Game;
}
const GameCart = ({ game }: Props) => {
  return (
    <>
      <Card borderRadius={10} overflow={"hidden"}>
        <Image src={game.background_image} />
        <CardBody>
          <Heading fontSize="xl">{game.name}</Heading>
        </CardBody>
      </Card>
    </>
  );
};

export default GameCart;
