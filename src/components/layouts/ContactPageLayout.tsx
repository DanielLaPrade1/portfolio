import { Grid, GridItem, Center } from "@chakra-ui/react";
import ContactMeText from "../ContactMeText";
import ContactForm from "../ContactForm";

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
      marginTop={{
        base: "30px",
        sm: "40px",
        md: "70px",
        lg: "100px",
        xl: "140px",
      }}
      justifyContent="space-evenly"
      padding="20px"
    >
      <GridItem area="text">
        <Center>
          <ContactMeText />
        </Center>
      </GridItem>
      <GridItem area="form">
        <Center padding="60px">
          <ContactForm />
        </Center>
      </GridItem>
    </Grid>
  );
};

export default ContactPageLayout;
