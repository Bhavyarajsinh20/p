import {
  Button,
  HStack,
  Image,
  List,
  ListItem,
  Spinner,
  Text,
} from "@chakra-ui/react";
import useGanres, { Genre } from "../Hooks/useGenrel";
import getCroppedImageUrl from "../service/Image-url";

interface Props {
  onSelectGenre: (genre: Genre) => void;
  SelectGenre: Genre | null;
}
const GenralList = ({ onSelectGenre, SelectGenre }: Props) => {
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
              <Button
                fontWeight={genre.id === SelectGenre?.id ? "bold" : "normal"}
                onClick={() => onSelectGenre(genre)}
                fontSize={"lg"}
                variant="link"
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenralList;
