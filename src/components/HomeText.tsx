import { Box, Flex, Text } from "@chakra-ui/react";

const HomeText = () => {
  return (
    <Box>
      <Text
        bgGradient="linear(to-l, green.200, pink.500)"
        bgClip="text"
        fontSize="4xl"
      >
        Hello, My Name is
      </Text>
      <Text
        fontSize="5xl"
        bgGradient="linear(to-r, #84ffc9, #aab2ff, #eca0ff)"
        bgClip="text"
      >
        Daniel LaPrade
      </Text>
      <Text fontSize="2xl">Software Engineer</Text>
    </Box>
  );
};

export default HomeText;
