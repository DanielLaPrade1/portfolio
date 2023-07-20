import { ListItem, Text } from "@chakra-ui/react";
import { ReactNode } from "react";
import { useInView } from "react-intersection-observer";

interface Props {
  logo: ReactNode;
  skillName: string;
}

const SkillListItem = ({ logo, skillName }: Props) => {
  const { ref: skillsListRef, inView: skillsListVisible } = useInView();
  return (
    <ListItem
      ref={skillsListRef}
      className={
        skillsListVisible ? "skillHidden skillShow skill" : "skillHidden skill"
      }
      width="140px"
      display="flex"
      alignItems="center"
    >
      {logo}
      <Text marginLeft="10px">{skillName}</Text>
    </ListItem>
  );
};

export default SkillListItem;
