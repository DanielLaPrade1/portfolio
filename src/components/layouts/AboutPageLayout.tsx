import { Center, Grid, GridItem } from "@chakra-ui/react";
import PersonalBio from "../PersonalBio";
import SkillsList from "../SkillList";
import MySocials from "../MySocials";

const AboutPageLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"pb pb" 
               "skill skill"
               "git git"`,
        sm: `"pb pb"
        "skill git"`,
        md: `"pb pb"
        "skill git"`,
        lg: `"pb skill"
               "git skill"`,
      }}
      width="100vw"
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
