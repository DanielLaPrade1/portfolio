import { Grid, GridItem, Box } from "@chakra-ui/react";
import jmuQuad from "./assets/JmuQuad1.webp";
import techBackground from "./assets/TechBackgroundGif.webp";
import NavBar from "./components/NavBar";
import { useRef } from "react";
import "./styles/App.css";
import ProjectGrid from "./components/layouts/ProjectGrid";
import AboutPageLayout from "./components/layouts/AboutPageLayout";
import ContactPageLayout from "./components/layouts/ContactPageLayout";
import LineArtBackground from "./assets/pCloseTreeAi.webp";
import HomePageLayout from "./components/layouts/HomePageLayout";

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
          height="50px"
          bgGradient="linear(black, #08203e, black)"
          position="sticky"
          flexDirection="row"
          alignItems="center"
          top="0"
          zIndex="1"
          borderRadius="7px"
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
          className="content"
          backgroundImage={techBackground}
        >
          <Box
            scrollSnapAlign="start"
            ref={homePage}
            height="825px"
            backgroundImage={LineArtBackground}
            backgroundSize={{
              base: "100vw",
              sm: "90vw",
              md: "80vw",
              lg: "50vw",
              xl: "50vw",
            }}
            backgroundPosition="left bottom"
            backgroundRepeat="no-repeat"
            width="100vw"
          >
            <HomePageLayout targetRef={contactPage} />
          </Box>

          <Box
            scrollSnapAlign="start"
            ref={aboutPage}
            bgGradient="linear(to-r, #0e1c26, #2a454b, #294861)"
            height={{
              base: "1000px",
              sm: "900px",
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
            scrollSnapAlign="start"
            ref={projectPage}
            height={{
              base: "1000px",
              sm: "950px",
            }}
            bgGradient="linear(to-l, #08203e, #557c93)"
          >
            <Box
              height="20px"
              bgGradient="linear(to-r, #0e1c26, #2a454b, #294861)"
              position="relative"
              borderBottomRadius="90%"
            />
            <ProjectGrid />
          </Box>
          <Box
            scrollSnapAlign="start"
            height={{ base: "1050px", lg: "850px" }}
            backgroundColor="grey"
            ref={contactPage}
            backgroundImage={jmuQuad}
            backgroundSize="cover"
          >
            <Box
              height="20px"
              bgGradient="linear(to-l, #08203e, #557c93)"
              position="relative"
              borderBottomRadius="20%"
            />
            <ContactPageLayout />
          </Box>
        </GridItem>
      </Grid>
    </div>
  );
};

export default App;
