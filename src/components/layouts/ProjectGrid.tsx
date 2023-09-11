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
import techBackground from "../../assets/DNL-Logo.webp";
import KiLowBites from "../../assets/KiLowBitesLogo.webp";
import MrKrabs from "../../assets/MrKrabs.webp";
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
        columns={{ base: 2, lg: 4, xl: 4 }}
        spacingX="4%"
        spacingY={{ base: "10px", sm: "4%" }}
        margin="5px"
      >
        <ProjectCard
          image={KiLowBites}
          projectName="KiLowBites"
          githubLink="https://github.com/bernstdh/S23Team2E"
          demoLink=""
        />
        <ProjectCard
          image={MrKrabs}
          projectName="Payment Tracker"
          githubLink="https://github.com/DanielLaPrade1/PaymentTracker"
          demoLink="https://payment-tracker-five.vercel.app/"
        />
        <ProjectCard
          image={techBackground}
          projectName="Under Construction"
          githubLink=""
          demoLink=""
        />
        <ProjectCard
          image={techBackground}
          projectName="Under Construction"
          githubLink=""
          demoLink=""
        />
      </SimpleGrid>
      <Flex
        alignItems="center"
        padding={{ base: "5px", md: "40px", lg: "30px" }}
        marginTop="30px"
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
