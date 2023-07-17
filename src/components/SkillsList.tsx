import { Box, List, ListItem, Text } from "@chakra-ui/react";
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

const SkillsList = () => {
  const { ref: skillsListRef, inView: skillsListVisible } = useInView();

  return (
    <Box width="140px">
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
        <ListItem
          ref={skillsListRef}
          className={
            skillsListVisible
              ? "skillHidden skillShow skill"
              : "skillHidden skill"
          }
          display="flex"
          alignItems="center"
        >
          <BiLogoJavascript color="yellow" size="50px" />
          <Text marginLeft="10px">JavaScript</Text>
        </ListItem>
        <ListItem
          ref={skillsListRef}
          className={
            skillsListVisible
              ? "skillHidden skillShow skill"
              : "skillHidden skill"
          }
          display="flex"
          alignItems="center"
        >
          <BiLogoJava size="50px" color="#f89820" />
          <Text marginLeft="10px">Java</Text>
        </ListItem>
        <ListItem
          ref={skillsListRef}
          className={
            skillsListVisible
              ? "skillHidden skillShow skill"
              : "skillHidden skill"
          }
          display="flex"
          alignItems="center"
        >
          <BiLogoReact size="50px" color="#61DBFB" />
          <Text marginLeft="10px">React</Text>
        </ListItem>
        <ListItem
          ref={skillsListRef}
          className={
            skillsListVisible
              ? "skillHidden skillShow skill"
              : "skillHidden skill"
          }
          display="flex"
          alignItems="center"
        >
          <BiLogoHtml5 size="50px" color="#E34C26" />
          <Text marginLeft="10px">HTML</Text>
        </ListItem>
        <ListItem
          ref={skillsListRef}
          className={
            skillsListVisible
              ? "skillHidden skillShow skill"
              : "skillHidden skill"
          }
          display="flex"
          alignItems="center"
        >
          <BiLogoCss3 size="50px" color="#264de4" />
          <Text marginLeft="10px">CSS</Text>
        </ListItem>
        <ListItem
          ref={skillsListRef}
          className={
            skillsListVisible
              ? "skillHidden skillShow skill"
              : "skillHidden skill"
          }
          display="flex"
          alignItems="center"
        >
          <BiLogoPython size="50px" color="#FFD43B" />
          <Text marginLeft="10px">Python</Text>
        </ListItem>
        <ListItem
          ref={skillsListRef}
          className={
            skillsListVisible
              ? "skillHidden skillShow skill"
              : "skillHidden skill"
          }
          display="flex"
          alignItems="center"
        >
          <SiMysql size="50px" color="#f29111" />
          <Text marginLeft="10px">MySQL</Text>
        </ListItem>
        <ListItem
          ref={skillsListRef}
          className={
            skillsListVisible
              ? "skillHidden skillShow skill"
              : "skillHidden skill"
          }
          display="flex"
          alignItems="center"
        >
          <SiChakraui size="50px" color="#5accc9" />
          <Text marginLeft="10px">Chakra UI</Text>
        </ListItem>
      </List>
    </Box>
  );
};

export default SkillsList;
