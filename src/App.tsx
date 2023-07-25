import { Grid, GridItem, Box, Text, Flex } from "@chakra-ui/react";
import jmuQuad from "./assets/JmuQuad1.webp";
import techBackground from "./assets/TechBackgroundGif.webp";
import HomeText from "./components/HomeText";
import NavBar from "./components/NavBar";
import { useRef } from "react";
import HomeContactButton from "./components/HomeContactButton";
import "./styles/App.css";
import ProjectGrid from "./components/ProjectGrid";
import AboutPageLayout from "./layouts/AboutPageLayout";

const App = () => {
  //Page Refs
  const homePage = useRef<HTMLDivElement>(null);
  const aboutPage = useRef<HTMLDivElement>(null);
  const projectPage = useRef<HTMLDivElement>(null);
  const contactPage = useRef<HTMLDivElement>(null);

  //Page Dividers

  return (
    <div className="wrapper">
      <Grid templateRows="1fr" templateAreas='"nav" "content"'>
        <GridItem
          area="nav"
          height="45px"
          bgGradient="linear(black, #08203e, black)"
          position="sticky"
          alignItems="center"
          top="0"
          zIndex="1"
          borderRadius="7px"
          marginTop="4px"
        >
          <NavBar
            homeRef={homePage}
            aboutRef={aboutPage}
            projectRef={projectPage}
            contactRef={contactPage}
          />
        </GridItem>
        <GridItem
          area="content"
          position="relative"
          backgroundImage={techBackground}
        >
          <Box ref={homePage} height="900px">
            <Flex
              direction="column"
              justify="center"
              alignItems="center"
              height="90%"
            >
              <HomeText />
              <HomeContactButton targetRef={contactPage} />
            </Flex>
          </Box>
          <Box
            ref={aboutPage}
            bgGradient="linear(to-r, #0e1c26, #2a454b, #294861)"
            height={{
              base: "1000px",
              sm: "900px",
              md: "800px",
              lg: "800px",
              xl: "800px",
            }}
          >
            <Box
              height="25px"
              bgGradient="linear(black, #0d1922)"
              position="relative"
              borderBottomRadius="50%"
            />
            <AboutPageLayout />
          </Box>
          <Box
            ref={projectPage}
            height="900px"
            bgGradient="linear(to-l, #08203e, #557c93)"
          >
            <Box
              height="20px"
              bgGradient="linear(to-r, #0e1c26, #2a454b, #294861)"
              position="relative"
              borderBottomRadius="10%"
            />
            <ProjectGrid />
          </Box>
          <Box
            ref={contactPage}
            height="900px"
            backgroundColor="grey"
            backgroundImage={jmuQuad}
            backgroundSize="cover"
          >
            <Box
              height="20px"
              bgGradient="linear(to-l, #08203e, #557c93)"
              position="relative"
              borderBottomRadius="20%"
            />
            <Text>Contact Me</Text>
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
