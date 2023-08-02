import { GridItem, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";
import "../styles/App.css";

interface Props {
  logo: ReactNode;
  skillName: string;
}

const SkillListItem = ({ logo, skillName }: Props) => {
  const { ref: skillsListRef, inView: skillsListVisible } = useInView();
  return (
    <GridItem
      ref={skillsListRef}
      className={
        skillsListVisible ? "skillHidden skillShow skill" : "skillHidden skill"
      }
      width={{ base: "100px", md: "120px", lg: "160px", xl: "170px" }}
      display="flex"
      alignItems="center"
      marginBottom="10px"
    >
      {logo}
      <Text
        marginLeft={{ base: "1px", sm: "3px", md: "5px", lg: "7px", xl: "9px" }}
        fontSize={{
          base: "10px",
          sm: "11px",
          md: "13px",
          lg: "17px",
          xl: "20px",
        }}
        bgGradient="linear(to-l, white, lightgrey)"
        bgClip="text"
      >
        {skillName}
      </Text>
    </GridItem>
  );
};

export default SkillListItem;
