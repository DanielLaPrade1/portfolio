import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import techBackground from "../assets/DNL-Logo.png";
import KiLowBites from "../assets/KiLowBitesLogo.png";

const ProjectGrid = () => {
  return (
    <Center flexDirection="column">
      <Text
        fontSize={{ base: "30px", md: "40px", lg: "50px", xl: "60px" }}
        padding={{ base: "10px", md: "10px", lg: "60px", xl: "60px" }}
      >
        Projects
      </Text>
      <SimpleGrid
        columns={{ base: 2, sm: 2, md: 2, lg: 4, xl: 4 }}
        padding="10px"
        spacing="15px"
      >
        <ProjectCard image={KiLowBites} projectName="KiLowBites" />
        <ProjectCard image={techBackground} projectName="Under Construction" />
        <ProjectCard image={techBackground} projectName="Under Construction" />
        <ProjectCard image={techBackground} projectName="Under Construction" />
      </SimpleGrid>
    </Center>
  );
};

export default ProjectGrid;
