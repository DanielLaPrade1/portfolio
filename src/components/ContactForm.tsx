import { FormLabel, Box, Button } from "@chakra-ui/react";
import "../styles/App.css";
import { ChangeEvent, FormEvent, useState } from "react";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();

    console.log("Full Name:", formData.fullName);
    console.log("Email:", formData.email);
    console.log("Message:", formData.message);

    setFormData({ fullName: "", email: "", message: "" });
  };

  return (
    <Box
      bgGradient="linear(to-l, #08203e, #557c93)"
      borderRadius="20px"
      opacity="95%"
      padding="10px"
      flexDir="column"
      width={{ base: "300px", md: "400px", lg: "500px" }}
    >
      <form>
        <FormLabel
          bgGradient="linear(to-l, #aff2d8, #faae7b)"
          bgClip="text"
          fontSize="20px"
          marginLeft="10px"
        >
          Full Name
        </FormLabel>
        <input
          className="contact-input"
          style={{ height: "50px", width: "95%" }}
          name="fullName"
          value={formData.fullName}
          onChange={handleChange}
        />
        <FormLabel
          bgGradient="linear(to-l, #aff2d8, #faae7b)"
          bgClip="text"
          fontSize="20px"
          marginLeft="10px"
        >
          Email
        </FormLabel>
        <input
          className="contact-input"
          style={{ height: "50px", width: "95%" }}
          name="email"
          value={formData.email}
          onChange={handleChange}
        />
        <FormLabel
          bgGradient="linear(to-l, #aff2d8, #faae7b)"
          bgClip="text"
          fontSize="20px"
          marginLeft="10px"
        >
          Message
        </FormLabel>
        <textarea
          className="contact-input"
          placeholder="What do you want to say?"
          style={{ height: "150px", width: "95%" }}
          name="message"
          value={formData.message}
          onChange={handleChange}
        />
      </form>

      <Button margin="20px" color="white" type="submit" onClick={handleSubmit}>
        Submit
      </Button>
    </Box>
  );
};

export default ContactForm;
