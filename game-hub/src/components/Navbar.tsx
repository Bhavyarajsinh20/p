import { HStack, Image } from "@chakra-ui/react";
import logo from "../assets/download.jpg";
import ColorMode from "./ColorMode";

const Navbar = () => {
  return (
    <>
      <HStack justifyContent={"space-between"} padding={"10px"}>
        <Image src={logo} borderRadius={10} padding={"2px"} boxSize={"60px"} />
        <ColorMode />
      </HStack>
    </>
  );
};

export default Navbar;
