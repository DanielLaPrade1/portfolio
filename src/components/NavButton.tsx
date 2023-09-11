import { Button } from "@chakra-ui/react";
import React from "react";

interface Props {
  targetRef: React.RefObject<HTMLDivElement>;
  children: string;
}

const NavButton = ({ targetRef, children }: Props) => {
  const handleClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    if (targetRef.current) {
      targetRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <Button
      size={{ sm: "xs", md: "sm" }}
      onClick={handleClick}
      bgGradient="linear(to-r, grey, #103783)"
    >
      {children}
    </Button>
  );
};

export default NavButton;
