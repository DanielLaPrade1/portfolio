import { ButtonGroup, Center, HStack, Image } from "@chakra-ui/react";
import DNL from "../assets/DNL-Logo.webp";
import NavButton from "./NavButton";

interface Props {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavBar = ({ homeRef, aboutRef, projectRef, contactRef }: Props) => {
  return (
    <Center>
      <HStack
        justifyContent="space-between"
        padding="10px"
        marginRight="10px"
        width="98vw"
      >
        <Image src={DNL} boxSize="30px"></Image>
        <ButtonGroup spacing="2">
          <NavButton targetRef={homeRef}>Home</NavButton>
          <NavButton targetRef={aboutRef}>About</NavButton>
          <NavButton targetRef={projectRef}>Projects</NavButton>
          <NavButton targetRef={contactRef}>Contact</NavButton>
        </ButtonGroup>
      </HStack>
    </Center>
  );
};

export default NavBar;
