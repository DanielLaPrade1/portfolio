import { Box, Stack, Text } from "@chakra-ui/react";

const HomeText = () => {
  return (
    <Box alignItems="center" justifyContent="center" margin="20px">
      <Stack>
        <Text
          bgGradient="linear(to-l, green.200, pink.500)"
          bgClip="text"
          fontSize={{ sm: "3xl", md: "4xl", lg: "5xl", xl: "6xl" }}
          noOfLines={1}
        >
          Hello, My Name is
        </Text>
        <Text
          fontSize={{ sm: "4xl", md: "5xl", lg: "6xl", xl: "7xl" }}
          bgGradient="linear(to-r, #84ffc9, #aab2ff, #eca0ff)"
          bgClip="text"
          noOfLines={1}
        >
          Daniel LaPrade.
        </Text>
        <Text
          fontSize={{ sm: "xl", md: "2xl", lg: "3xl", xl: "4xl" }}
          noOfLines={1}
        >
          Software Engineer
        </Text>
      </Stack>
    </Box>
  );
};

export default HomeText;
