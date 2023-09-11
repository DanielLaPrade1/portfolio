import { Box, Heading, Text } from "@chakra-ui/react";

const ContactMeText = () => {
  return (
    <Box
      bgGradient="linear(to-l, #08203e, #557c93)"
      borderRadius="20px"
      opacity="95%"
      padding="30px"
      minH="200px"
      maxH="500px"
      minW="100px"
      maxW="400px"
    >
      <Heading
        fontSize={{ base: "3xl", md: "6xl", lg: "7xl" }}
        bgGradient="linear(to-l, #aff2d8, #faae7b)"
        bgClip="text"
        marginBottom="10px"
      >
        Get In Contact With Me.
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "xl", lg: "xl" }}
        bgGradient="linear(to-l, #aff2d8, #faae7b)"
        bgClip="text"
      >
        Let me know more about you and your company, or just tell me about your
        day.
      </Text>
    </Box>
  );
};

export default ContactMeText;
