import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react";
import jmuQuad from "./assets/JmuQuad1.webp";
import techBackground from "./assets/TechBackgroundGif.webp";
import HomeText from "./components/HomeText";
import NavBar from "./components/NavBar";
import { useRef } from "react";
import HomeContactButton from "./components/HomeContactButton";
import SkillsList from "./components/SkillsList";
import "./styles/App.css";

const App = () => {
  //Page Refs
  const homePage = useRef<HTMLDivElement>(null);
  const aboutPage = useRef<HTMLDivElement>(null);
  const projectPage = useRef<HTMLDivElement>(null);
  const contactPage = useRef<HTMLDivElement>(null);

  //Page Dividers
  let divider = (
    <Box
      height="3.5vh"
      bgGradient="linear(black, #08203e)"
      position="relative"
      zIndex="0"
      borderBottomLeftRadius="30px"
    />
  );

  return (
    <div className="wrapper">
      <Grid
        templateRows="1fr"
        templateAreas='"nav" "content"'
        minHeight="100vh"
      >
        <GridItem
          area="nav"
          height="45px"
          bgGradient="linear(black, #08203e, black)"
          position="sticky"
          top="0"
          zIndex="1"
          borderRadius="7px"
          marginTop="5px"
        >
          <NavBar
            homeRef={homePage}
            aboutRef={aboutPage}
            projectRef={projectPage}
            contactRef={contactPage}
          />
        </GridItem>
        <GridItem area="content" position="relative">
          <Box
            ref={homePage}
            height="100vh"
            paddingY="10%"
            backgroundImage={techBackground}
          >
            <Flex
              align="center"
              justify="center"
              height="80%"
              flexDirection="row"
            >
              <HomeText />
              <HomeContactButton targetRef={contactPage} />
            </Flex>
          </Box>
          <Box
            ref={aboutPage}
            height="100vh"
            bgGradient="linear(to-r, #0e1c26, #2a454b, #294861)"
          >
            {divider}

            <SkillsList />
          </Box>
          <Box
            ref={projectPage}
            height="100vh"
            bgGradient="linear(to-l, #08203e, #557c93)"
          >
            {divider}
            Projects
          </Box>
          <Box
            ref={contactPage}
            height="95vh"
            backgroundColor="grey"
            backgroundImage={jmuQuad}
            backgroundSize="cover"
          >
            {divider}
            <Text>Contact Me</Text>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
