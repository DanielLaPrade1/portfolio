import { Box, Heading, Text } from "@chakra-ui/react";

const ContactMeText = () => {
  return (
    <Box
      bgGradient="linear(to-r, #294861, #703BE7)"
      borderRadius="20px"
      opacity="95%"
      padding="10px"
      height={{ base: "400px", lg: "600px" }}
      width={{ base: "500px", lg: "450px" }}
    >
      <Heading
        fontSize={{ base: "5xl", md: "6xl", lg: "7xl", xl: "8xl" }}
        bgGradient="linear(to-l, #aff2d8, #faae7b)"
        bgClip="text"
        marginBottom="10px"
      >
        Get In Contact With Me.
      </Heading>
      <Text
        fontSize={{ base: "lg", md: "xl", lg: "xl", xl: "2xl" }}
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
