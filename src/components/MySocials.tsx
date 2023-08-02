import { Button, Center, Icon, Link } from "@chakra-ui/react";
import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";

const MySocials = () => {
  return (
    <Center
      marginTop={{
        base: "20px",
        sm: "80px",
        lg: "10px",
        xl: "10px",
      }}
    >
      <Link href={"https://github.com/DanielLaPrade1"} isExternal>
        <Button
          marginRight="30px"
          borderRadius="50px"
          boxSize="58px"
          bgGradient="linear(to-r, white, grey)"
          color="white"
          _hover={{ bgGradient: "linear(to-r, grey, white)" }}
        >
          <Icon as={AiFillGithub} opacity="80%" color="black" boxSize="70px" />
        </Button>
      </Link>
      <Link
        href={"https://www.linkedin.com/in/daniel-laprade-a94491286/"}
        isExternal
      >
        <Button
          marginRight="10px"
          borderRadius="5%"
          boxSize="51px"
          bgGradient="linear(to-r, white, grey)"
          color="white"
          _hover={{ bgGradient: "linear(to-r, grey, white)" }}
        >
          <Icon
            as={AiFillLinkedin}
            opacity="80%"
            color="#0A66C2"
            boxSize="70px"
          />
        </Button>
      </Link>
    </Center>
  );
};

export default MySocials;
