import {
  Button,
  Center,
  Flex,
  Icon,
  Link,
  SimpleGrid,
  Text,
} from "@chakra-ui/react";
import ProjectCard from "../ProjectCard";
import techBackground from "../../assets/DNL-Logo.png";
import KiLowBites from "../../assets/KiLowBitesLogo.png";
import { BsNewspaper } from "react-icons/bs";

const ProjectGrid = () => {
  return (
    <Center flexDirection="column" width="100vw" maxH="100%" padding="20px">
      <Text
        userSelect="none"
        fontSize={{
          base: "30px",
          sm: "50px",

          lg: "60px",
        }}
        marginBottom="60px"
        borderBottom="4px solid grey"
        borderRadius="4px"
        color="lightgray"
      >
        Projects
      </Text>
      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 2, lg: 4, xl: 4 }}
        spacing="20px"
        marginLeft="20px"
        marginRight="20px"
      >
        <ProjectCard image={KiLowBites} projectName="KiLowBites" />
        <ProjectCard image={techBackground} projectName="Under Construction" />
        <ProjectCard image={techBackground} projectName="Under Construction" />
        <ProjectCard image={techBackground} projectName="Under Construction" />
      </SimpleGrid>
      <Flex
        alignItems="center"
        marginTop={{ base: "20px", md: "20px", lg: "100px" }}
        borderRadius="10px"
        boxShadow="1px 8px 10px rgba(0, 0, 0, 0.1)"
      >
        <Text
          fontSize="50px"
          bgGradient="linear(to-r, darkgray, grey)"
          bgClip="text"
        >
          My Resume:
        </Text>
        <Link href={"https://github.com/DanielLaPrade1"} isExternal>
          <Button
            margin="20px"
            boxSize="60px"
            bgGradient="linear(to-r, white, grey)"
            color="white"
            _hover={{ bgGradient: "linear(to-r, grey, white)" }}
          >
            <Icon as={BsNewspaper} opacity="80%" color="black" boxSize="70px" />
          </Button>
        </Link>
      </Flex>
    </Center>
  );
};

export default ProjectGrid;
