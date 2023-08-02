import { FormControl, FormLabel, Input, Box } from "@chakra-ui/react";
import "../styles/App.css";

const ContactForm = () => {
  return (
    <Box
      bgGradient="linear(to-l, #08203e, #557c93)"
      borderRadius="20px"
      opacity="99%"
      padding="10px"
    >
      <form>
        <FormLabel
          bgGradient="linear(to-l, #aff2d8, #faae7b)"
          bgClip="text"
          fontSize="20px"
        >
          Full Name
        </FormLabel>
        <input className="contact-input" style={{ height: "50px" }} />
        <FormLabel
          bgGradient="linear(to-l, #aff2d8, #faae7b)"
          bgClip="text"
          fontSize="20px"
        >
          Email
        </FormLabel>
        <input className="contact-input" style={{ height: "50px" }} />
        <FormLabel
          bgGradient="linear(to-l, #aff2d8, #faae7b)"
          bgClip="text"
          fontSize="20px"
        >
          Message
        </FormLabel>
        <textarea
          className="contact-input"
          placeholder="What do you want to say?"
          style={{ height: "150px" }}
        />
      </form>
    </Box>
  );
};

export default ContactForm;
