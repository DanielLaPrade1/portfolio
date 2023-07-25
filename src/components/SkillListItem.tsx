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
        marginLeft={{ sm: "5px", md: "8px", lg: "12px", xl: "15px" }}
        fontSize={{ sm: "9px", md: "12px", lg: "15px", xl: "20px" }}
      >
        {skillName}
      </Text>
    </GridItem>
  );
};

export default SkillListItem;
