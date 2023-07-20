import { Center, SimpleGrid, Text } from "@chakra-ui/react";
import ProjectCard from "./ProjectCard";
import techBackground from "../assets/DNL-Logo.png";
import KiLowBites from "../assets/KiLowBitesLogo.png";

const ProjectGrid = () => {
  return (
    <Center flexDirection="column">
      <Text
        fontSize="30px"
        padding={{ sm: "10px", md: "10px", lg: "40px", xl: "40px" }}
      >
        Projects
      </Text>
      <SimpleGrid
        columns={{ sm: 2, md: 2, lg: 4, xl: 4 }}
        padding="20px"
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
