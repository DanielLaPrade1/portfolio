import { ButtonGroup, HStack, Image } from "@chakra-ui/react";
import DNL from "../assets/DNL-Logo.png";
import NavButton from "./NavButton";

interface Props {
  homeRef: React.RefObject<HTMLDivElement>;
  aboutRef: React.RefObject<HTMLDivElement>;
  projectRef: React.RefObject<HTMLDivElement>;
  contactRef: React.RefObject<HTMLDivElement>;
}

const NavBar = ({ homeRef, aboutRef, projectRef, contactRef }: Props) => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={DNL} boxSize="30px"></Image>
      <ButtonGroup spacing="2">
        <NavButton targetRef={homeRef}>Home</NavButton>
        <NavButton targetRef={aboutRef}>About</NavButton>
        <NavButton targetRef={projectRef}>Projects</NavButton>
        <NavButton targetRef={contactRef}>Contact</NavButton>
      </ButtonGroup>
    </HStack>
  );
};

export default NavBar;
