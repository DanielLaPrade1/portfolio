import {
  Button,
  Card,
  CardFooter,
  Heading,
  Image,
  Stack,
} from "@chakra-ui/react";

interface Props {
  image: string;
  projectName: string;
}

const ProjectCard = ({ image, projectName }: Props) => {
  return (
    <Card
      maxW="300px"
      borderRadius="15px"
      bgGradient="linear(black, #08203e, black)"
    >
      <Image src={image} borderTopRadius="15px" />
      <Stack
        mt="6"
        spacing="3"
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Heading size="md">{projectName}</Heading>
      </Stack>
      <CardFooter display="flex" justifyContent="space-around">
        <Button bgGradient="linear(to-l, #0e1c26, #2a454b, #294861)">
          Github
        </Button>
        <Button bgGradient="linear(to-l, #0e1c26, #2a454b, #294861)">
          Demo
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProjectCard;
