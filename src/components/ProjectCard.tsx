import {
  Button,
  Card,
  CardFooter,
  GridItem,
  Heading,
  Image,
  Link,
  Stack,
} from "@chakra-ui/react";
import { useInView } from "react-intersection-observer";

interface Props {
  image: string;
  projectName: string;
  githubLink: string;
  demoLink: string;
}

const ProjectCard = ({ image, projectName, githubLink, demoLink }: Props) => {
  const { ref: projectCardRef, inView: projectCardVisible } = useInView();

  return (
    <GridItem
      className={
        projectCardVisible
          ? "projectHidden projectShow project"
          : "projectHidden project"
      }
    >
      <Card
        ref={projectCardRef}
        borderRadius="15px"
        bgGradient="linear(black, #08203e, black)"
        h={{ base: "35vh", sm: "37vh", md: "40vh" }}
      >
        <Image src={image} borderTopRadius="15px" maxH="50%" />
        <Stack mt="4" display="flex" flexDirection="column" alignItems="center">
          <Heading size="md" color="white" margin="3px">
            {projectName}
          </Heading>
        </Stack>
        <CardFooter display="flex" justifyContent="space-around" margin="2px">
          <Link href={githubLink}>
            <Button
              bgGradient="linear(to-l, #0e1c26, #2a454b, #294861)"
              color="white"
              height={{ base: "30px", sm: "40px" }}
              width={{ base: "50px", sm: "70px" }}
              marginX="5px"
            >
              Github
            </Button>
          </Link>
          <Link href={demoLink}>
            <Button
              bgGradient="linear(to-l, #0e1c26, #2a454b, #294861)"
              color="white"
              height={{ base: "30px", sm: "40px" }}
              width={{ base: "50px", sm: "70px" }}
              marginX="5px"
            >
              Demo
            </Button>
          </Link>
        </CardFooter>
      </Card>
    </GridItem>
  );
};

export default ProjectCard;
