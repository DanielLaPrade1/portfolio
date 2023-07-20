import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react";
import jmuQuad from "./assets/JmuQuad1.webp";
import techBackground from "./assets/TechBackgroundGif.webp";
import HomeText from "./components/HomeText";
import NavBar from "./components/NavBar";
import { useRef } from "react";
import HomeContactButton from "./components/HomeContactButton";
import SkillsList from "./components/SkillsList";
import "./styles/App.css";
import PersonalBio from "./components/PersonalBio";
import ProjectGrid from "./components/ProjectGrid";

const App = () => {
  //Page Refs
  const homePage = useRef<HTMLDivElement>(null);
  const aboutPage = useRef<HTMLDivElement>(null);
  const projectPage = useRef<HTMLDivElement>(null);
  const contactPage = useRef<HTMLDivElement>(null);

  //Page Dividers

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
          <Box ref={homePage} height="100vh" backgroundImage={techBackground}>
            <Flex
              direction="column"
              justify="center"
              alignItems="center"
              height="80%"
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
            <Box
              height="3.5vh"
              bgGradient="linear(black, #0d1922)"
              position="relative"
              borderBottomRadius="50%"
            />
            <Flex height="80%" justify="space-around">
              <PersonalBio />
              <SkillsList />
            </Flex>
          </Box>
          <Box
            ref={projectPage}
            height="100vh"
            bgGradient="linear(to-l, #08203e, #557c93)"
          >
            <Box
              height="3.5vh"
              bgGradient="linear(to-r, #0e1c26, #2a454b, #294861)"
              position="relative"
              borderBottomRadius="10%"
            />
            <ProjectGrid />
          </Box>
          <Box
            ref={contactPage}
            height="100vh"
            backgroundColor="grey"
            backgroundImage={jmuQuad}
            backgroundSize="cover"
          >
            <Box
              height="3.5vh"
              bgGradient="linear(to-l, #08203e, #557c93)"
              position="relative"
              borderBottomRadius="50%"
            />
            <Text>Contact Me</Text>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
