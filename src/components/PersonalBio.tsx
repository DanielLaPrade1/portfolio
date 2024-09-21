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
        I'm Daniel LaPrade, a senior enrolled in the computer science program at
        James Madison University. My interests in engineering include data
        science, front end development, and database management. When I'm not
        looking at documentation or immersed in my code editor, I enjoy hiking
        and playing poker with my friends. I really appreciate if you are still
        reading this right now. Wherever I end up in life, I am determined to
        adapt quickly and provide value through my work.
      </Text>
    </Flex>
  );
};

export default PersonalBio;
