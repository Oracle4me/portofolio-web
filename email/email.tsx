import {
  Body,
  Button,
  Container,
  Head,
  Html,
  Img,
  Link,
  Preview,
  Section,
  Text,
  Heading,
} from "@react-email/components";

interface ComponentsEmailProps {
  message: string;
  senderEmail: string;
}

export const EmailForm = ({ message, senderEmail }: ComponentsEmailProps) => {
  return (
    <Html>
      <Head />
      <Preview>New message from portofolio site</Preview>
      <Body>
        <Container>
          <Heading>
            You recieved the following message from the contact form
          </Heading>
          <Text>{message}</Text>
          <Text>The sender's email is: {senderEmail}</Text>
        </Container>
      </Body>
    </Html>
  );
};
