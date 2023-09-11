import { Box, Text } from "@chakra-ui/react";
import "../styles/App.css";

const HomeText = () => {
  return (
    <Box
      marginBottom={{ base: "10px", md: "30px", lg: "40px", xl: "40px" }}
      display="flex"
      flexDirection="column"
    >
      <Text
        align="center"
        className="typewriter-effect"
        bgGradient="linear(to-l, green.200, pink.500)"
        bgClip="text"
        fontSize={{ base: "4xl", sm: "5xl", md: "5xl", lg: "6xl", xl: "7xl" }}
        noOfLines={1}
      >
        Hello, My Name is
      </Text>

      <Text
        align="center"
        className="typewriter-effect"
        fontSize={{ base: "4xl", sm: "6xl", md: "6xl", lg: "7xl", xl: "8xl" }}
        bgGradient="linear(to-r, #84ffc9, #aab2ff, #eca0ff)"
        bgClip="text"
        noOfLines={1}
      >
        Daniel LaPrade.
      </Text>
      <Text
        align="center"
        className="fade-in-home"
        fontSize={{ base: "2xl", sm: "3xl", md: "3xl", lg: "4xl", xl: "5xl" }}
        color="white"
        noOfLines={1}
      >
        Software Engineer
      </Text>
    </Box>
  );
};

export default HomeText;
