import { Grid, GridItem, Center } from "@chakra-ui/react";
import ContactMeText from "../ContactMeText";
import ContactForm from "../ContactForm";

const ContactPageLayout = () => {
  return (
    <Grid
      templateAreas={{
        base: `"text text"
                "form form"`,
        lg: `"text form"
               "text form"`,
      }}
      gap={4}
      padding="10px"
      marginTop={{
        base: "30px",
        lg: "100px",
      }}
      justifyContent="space-evenly"
    >
      <GridItem area="text">
        <Center>
          <ContactMeText />
        </Center>
      </GridItem>
      <GridItem area="form">
        <Center paddingTop={{ base: "60px", lg: "0px" }}>
          <ContactForm />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default ContactPageLayout;
