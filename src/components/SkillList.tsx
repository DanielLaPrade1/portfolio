import { Grid, Text } from "@chakra-ui/react";
import {
  BiLogoJavascript,
  BiLogoJava,
  BiLogoReact,
  BiLogoHtml5,
  BiLogoCss3,
  BiLogoPython,
} from "react-icons/bi";
import { SiMysql, SiChakraui } from "react-icons/si";
import "../styles/App.css";
import { useInView } from "react-intersection-observer";
import SkillListItem from "./SkillListItem";

const SkillsList = () => {
  const { ref: skillsListRef, inView: skillsListVisible } = useInView();

  return (
    <Grid
      templateColumns={{ base: "repeat(3, 1fr)", lg: "1fr" }}
      gap={1}
      marginTop={{ base: "10px", md: "30px" }}
    >
      <Text
        ref={skillsListRef}
        className={
          skillsListVisible
            ? "skillHidden skillShow skill"
            : "skillHidden skill"
        }
        fontSize={{ base: "28px", md: "37px", lg: "44px", xl: "59px" }}
        color="lightgray"
        borderBottom="4px solid grey"
        borderRight={{ base: "4px solid grey", md: "none" }}
        borderRadius="4px"
        margin="10px"
      >
        Skills
      </Text>
      <SkillListItem
        logo={<BiLogoJavascript color="yellow" size="55px" />}
        skillName="JavaScript"
      />
      <SkillListItem
        logo={<BiLogoJava size="55px" color="#f89820" />}
        skillName="Java"
      />
      <SkillListItem
        logo={<BiLogoPython size="55px" color="#FFD43B" />}
        skillName="Python"
      />
      <SkillListItem
        logo={<BiLogoReact size="55px" color="#61DBFB" />}
        skillName="React"
      />
      <SkillListItem
        logo={<BiLogoHtml5 size="55px" color="#E34C26" />}
        skillName="HTML"
      />
      <SkillListItem
        logo={<BiLogoCss3 size="55px" color="#264de4" />}
        skillName="CSS"
      />
      <SkillListItem
        logo={<SiMysql size="55px" color="#f29111" />}
        skillName="MySQL"
      />
      <SkillListItem
        logo={<SiChakraui size="55px" color="#5accc9" />}
        skillName="Chakra UI"
      />
    </Grid>
  );
};

export default SkillsList;
