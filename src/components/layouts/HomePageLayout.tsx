import { Box, Center, Flex } from "@chakra-ui/react";
import HomeContactButton from "../HomeContactButton";
import HomeText from "../HomeText";

interface Props {
  targetRef: React.RefObject<HTMLDivElement>;
}

const HomePageLayout = ({ targetRef }: Props) => {
  return (
    <Flex
      direction="column"
      justify="center"
      alignItems="center"
      padding="40px"
      marginLeft={{
        base: "0px",
        sm: "0px",
        md: "0px",
        lg: "200px",
        xl: "500px",
      }}
    >
      <HomeText />
      <HomeContactButton targetRef={targetRef} />
    </Flex>
  );
};

export default HomePageLayout;
