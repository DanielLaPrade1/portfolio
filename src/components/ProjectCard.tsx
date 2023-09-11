import {
  Button,
  Card,
  CardFooter,
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
    <Card
      ref={projectCardRef}
      className={
        projectCardVisible
          ? "projectHidden projectShow project"
          : "projectHidden project"
      }
      maxW="275px"
      borderRadius="15px"
      maxH="300px"
      bgGradient="linear(black, #08203e, black)"
    >
      <Image src={image} borderTopRadius="15px" maxH="50%" />
      <Stack
        mt="6"
        spacing="3"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading size="md" color="white">
          {projectName}
        </Heading>
      </Stack>
      <CardFooter display="flex" justifyContent="space-around" margin="5px">
        <Link href={githubLink}>
          <Button
            bgGradient="linear(to-l, #0e1c26, #2a454b, #294861)"
            color="white"
            height={{ base: "30px", sm: "40px" }}
            width={{ base: "50px", sm: "70px" }}
            margin="5px"
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
            margin="5px"
          >
            Demo
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
