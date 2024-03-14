import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/download.jpg";

const Navbar = () => {
  return (
    <>
      <HStack>
        <Image src={logo} padding={"5px"} boxSize={"50px"} />
        <Text>Navbar</Text>
      </HStack>
    </>
  );
};

export default Navbar;
