import { Center, Grid, GridItem } from "@chakra-ui/react";
import PersonalBio from "../components/PersonalBio";
import SkillsList from "../components/SkillsList";
import MySocials from "../components/MySocials";

const AboutPageLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"pb pb" 
               "skill skill"
               "git git"`,
        sm: `"pb pb"
        "skill git"`,
        md: `"pb skill"
               "git skill"`,
      }}
      gap={4}
    >
      <GridItem area="pb">
        <Center>
          <PersonalBio />
        </Center>
      </GridItem>
      <GridItem area="skill">
        <Center>
          <SkillsList />
        </Center>
      </GridItem>
      <GridItem area="git">
        <Center>
          <MySocials />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default AboutPageLayout;
