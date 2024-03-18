import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import useGanres, { Genre } from "../Hooks/useGenrel";
import getCroppedImageUrl from "../service/Image-url";

const GenralList = () => {
  const { data, isLoding } = useGanres();
  if (isLoding) return <Spinner />;
  return (
    <>
      <List>
        {data.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"30px"}
                borderRadius={8}
                src={getCroppedImageUrl(genre.image_background)}
              ></Image>
              <Text fontSize={"large"}> {genre.name}</Text>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenralList;
