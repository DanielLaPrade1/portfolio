import { Button } from "@chakra-ui/react";
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
    <Button
      onClick={handleClick}
      margin="20px"
      bgGradient="linear(to-r, #9bafd9, #103783)"
      transition=" transform 0.35s"
      borderRadius="40px"
      _hover={{
        bgGradient: "linear(to-r, #103783, #9bafd9)",
        transform: "scale(1.05)",
        borderRadius: "200px",
      }}
      width={{ base: "225px", md: "300px", lg: "375px", xl: "500px" }}
      height={{ base: "60px", md: "67.5px", lg: "78px", xl: "92px" }}
      fontSize={{ base: "22.5px", md: "30px", lg: "45px", xl: "55px" }}
      rightIcon={<MdOutlineEmail />}
    >
      Contact Me
    </Button>
  );
};

export default HomeContactButton;
