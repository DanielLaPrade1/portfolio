import { Flex, Image, Text } from "@chakra-ui/react";
import ProfilePhoto from "../assets/pWideTree.webp";

const PersonalBio = () => {
  return (
    <Flex
      flexDirection="column"
      marginTop="50px"
      alignItems="center"
      marginLeft="10px"
      padding="20px"
    >
      <Image
        src={ProfilePhoto}
        width="70%"
        maxH="300px"
        borderRadius="10px"
        opacity="90%"
        border="4px double #0e1c26"
      />
      <Text
        userSelect="none"
        margin="20px"
        maxW={{
          base: "350px",
          sm: "400px",
          md: "400px",
          lg: "500px",
          xl: "600px",
        }}
        fontSize={{
          base: "12px",
          md: "12px",
          lg: "15px",
          xl: "17px",
        }}
        textAlign="center"
        color="lightgray"
        borderRadius="10px"
        boxShadow="1px 8px 10px rgba(0, 0, 0, 0.1)"
      >
        I'm Daniel LaPrade, a junior enrolled in the computer science program at
        James Madison University. I find myself immersed in the world of
        software engineering since I have a passion for design and a love of
        solving complex problems. As a software engineer, I approach challenges
        with a tenacious spirit, constantly seeking innovative solutions to
        propel projects forward. My academic journey has honed my technical
        skills and instilled a deep appreciation in me for collaborative
        problem-solving. I am currently seeking an internship opportunity to
        further my growth as a software engineer, be it in the realms of
        front-end or back-end development. Diligent, adaptable, and
        detail-oriented, I am eager to contribute my skills to a dynamic and
        forward-thinking team.
      </Text>
    </Flex>
  );
};

export default PersonalBio;
