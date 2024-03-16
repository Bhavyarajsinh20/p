import { Box } from "@chakra-ui/react";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCartContainer = ({ children }: Props) => {
  return (
    <>
      <Box borderRadius={10} width={"300px"} overflow={"hidden"}>
        {children}
      </Box>
    </>
  );
};

export default GameCartContainer;
