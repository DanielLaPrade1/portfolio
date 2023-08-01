import { Grid, GridItem, Center, Text } from "@chakra-ui/react";
import ContactMeText from "../components/ContactMeText";
import ContactForm from "../components/ContactForm";

const ContactPageLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"text text"
                "form form"`,
        md: `"text form"
               "text form"`,
      }}
      gap={10}
      marginTop={"20px"}
    >
      <GridItem area="text">
        <Center>
          <ContactMeText />
        </Center>
      </GridItem>
      <GridItem area="form">
        <Center>
          <ContactForm />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default ContactPageLayout;
