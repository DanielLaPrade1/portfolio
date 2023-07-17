import { Box, Button } from "@chakra-ui/react";
import { MdOutlineEmail } from "react-icons/md";

interface Props {
  targetRef: React.RefObject<HTMLDivElement>;
}

const HomeContactButton = ({ targetRef }: Props) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Box
      padding={{ sm: "3%", md: "6%", lg: "8%", xl: "12%" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Button
        onClick={handleClick}
        bgGradient="linear(to-r, #9bafd9, #103783)"
        transition=" transform 0.35s"
        borderRadius="40px"
        _hover={{
          bgGradient: "linear(to-r, #103783, #9bafd9)",
          transform: "scale(1.1)",
          borderRadius: "200px",
        }}
        width={{ sm: "150px", md: "200px", lg: "300px", xl: "400px" }}
        height={{ sm: "40px", md: "45px", lg: "52px", xl: "70px" }}
        fontSize={{ sm: "15px", md: "20px", lg: "30px", xl: "40px" }}
        rightIcon={<MdOutlineEmail />}
      >
        Contact Me
      </Button>
    </Box>
  );
};

export default HomeContactButton;
