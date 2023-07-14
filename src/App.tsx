import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import jmuQuad from "./assets/JmuQuad1.webp";
import techBackground from "./assets/TechBackgroundGif.webp";
import HomeText from "./components/HomeText";

const App = () => {
  let divider = (
    <Box
      height="3.5vh"
      backgroundColor="white"
      position="relative"
      zIndex="0"
    />
  );

  return (
    <Grid templateRows="1fr" templateAreas='"nav" "content"' minHeight="100vh">
      <GridItem
        area="nav"
        height="45px"
        backgroundColor="#60696b"
        position="sticky"
        top="0"
        zIndex="1"
        borderRadius="7px"
        marginTop="5px"
      >
        Nav
      </GridItem>
      <GridItem area="content" position="relative">
        <Box height="100vh" backgroundImage={techBackground}>
          <HomeText></HomeText>
        </Box>
        <Box height="100vh" backgroundColor="grey">
          {divider}
          About
        </Box>
        <Box height="100vh" backgroundColor="grey">
          {divider}
          Projects
        </Box>
        {divider}
        <Box
          height="95vh"
          backgroundColor="grey"
          backgroundImage={jmuQuad}
          backgroundSize="cover"
        >
          <Text>Contact Me</Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default App;
