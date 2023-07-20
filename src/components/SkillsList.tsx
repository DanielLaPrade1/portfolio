import { Box, List, Text } from "@chakra-ui/react";
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
    <Box width="140px" margin="20px">
      <List spacing={1} marginLeft="10px">
        <Text
          ref={skillsListRef}
          className={
            skillsListVisible
              ? "skillHidden skillShow skill"
              : "skillHidden skill"
          }
          fontSize="40px"
          marginLeft="10px"
        >
          Skills
        </Text>
        <SkillListItem
          logo={<BiLogoJavascript color="yellow" size="50px" />}
          skillName="JavaScript"
        />
        <SkillListItem
          logo={<BiLogoJava size="50px" color="#f89820" />}
          skillName="Java"
        />
        <SkillListItem
          logo={<BiLogoPython size="50px" color="#FFD43B" />}
          skillName="Python"
        />
        <SkillListItem
          logo={<BiLogoReact size="50px" color="#61DBFB" />}
          skillName="React"
        />
        <SkillListItem
          logo={<BiLogoHtml5 size="50px" color="#E34C26" />}
          skillName="HTML"
        />
        <SkillListItem
          logo={<BiLogoCss3 size="50px" color="#264de4" />}
          skillName="CSS"
        />
        <SkillListItem
          logo={<SiMysql size="50px" color="#f29111" />}
          skillName="MySQL"
        />
        <SkillListItem
          logo={<SiChakraui size="50px" color="#5accc9" />}
          skillName="Chakra UI"
        />
      </List>
    </Box>
  );
};

export default SkillsList;
