import { Flex, Image, Text } from "@chakra-ui/react";
import ProfilePhoto from "../assets/ProfilePhotoProf.webp";

const PersonalBio = () => {
  return (
    <Flex flexDirection="column" marginTop="50px" alignItems="center">
      <Image
        src={ProfilePhoto}
        height={{ sm: "225px", md: "300px", lg: "375px", xl: "400px" }}
        width={{ sm: "325px", md: "400px", lg: "575px", xl: "550px" }}
        marginBottom="10px"
        borderRadius="10px"
      />
      <Text
        maxW={{ sm: "300px", md: "400px", lg: "500px", xl: "600px" }}
        fontSize={{ sm: "14px", md: "14px", lg: "17px", xl: "20px" }}
        textAlign="center"
      >
        من المهم جدًا أن ينتبه العميل لعملية اكتشاف الدهون. هذه الرحلة ممتعة لا
        سيما أنه لا شيء ، سواء كان مباركًا للمتهمين الحاليين أو حزنًا ومن أين لا
        يعرفون الأوقات ، ويتركونها كأنها لمتعة الوقت. مرحباً يجب أن يتبع الألم
        نفسه من خلال المطور. هناك عدد قليل جدا ولدت من عقل المشتكين ، لكن أوقات
        التساهل الكبير ستزال من مذاب يكره الألم ، لأن الخطأ يجب أن يفترضه الألم
        مراتمن المهم جدًا أن ينتبه العميل لعملية اكتشاف الدهون. هذه الرحلة ممتعة
        لا سيما أنه لا شيء ، سواء كان مباركًا للمتهمين الحاليين أو حزنًا ومن أين
        لا يعرفون الأوقات ، ويتركونها كأنها لمتعة الوقت. مرحباً يجب أن يتبع
        الألم نفسه من خلال المطور. هناك عدد قليل جدا ولدت من عقل المشتكين ، لكن
        أوقات التساهل الكبير ستزال من مذاب يكره الألم ، لأن الخطأ يجب أن يفترضه
        الألم مرات
      </Text>
    </Flex>
  );
};

export default PersonalBio;
