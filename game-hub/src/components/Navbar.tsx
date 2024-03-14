import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/download.jpg";
import ColorMode from "./ColorMode";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image src={logo} padding={"5px"} boxSize={"50px"} />
        <ColorMode />
      </HStack>
    </>
  );
};

export default Navbar;
