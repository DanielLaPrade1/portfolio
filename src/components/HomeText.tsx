import { Box, Flex, Stack, Text } from "@chakra-ui/react";

const HomeText = () => {
  return (
    <Box
      boxSize="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Stack>
        <Text
          bgGradient="linear(to-l, green.200, pink.500)"
          bgClip="text"
          fontSize={{ sm: "4xl", md: "5xl", lg: "5xl", xl: "6xl" }}
        >
          Hello, My Name is
        </Text>
        <Text
          fontSize={{ sm: "5xl", md: "6xl", lg: "6xl", xl: "7xl" }}
          bgGradient="linear(to-r, #84ffc9, #aab2ff, #eca0ff)"
          bgClip="text"
        >
          Daniel LaPrade
        </Text>
        <Text fontSize={{ sm: "2xl", md: "3xl", lg: "3xl", xl: "4xl" }}>
          Software Engineer
        </Text>
      </Stack>
    </Box>
  );
};

export default HomeText;
