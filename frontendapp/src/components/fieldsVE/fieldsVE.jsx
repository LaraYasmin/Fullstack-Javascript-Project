import { Container, Code, Label, Text, Span, Button, ContainerV, Code1, Code2, Code3, Line } from "./styles";
import line from '../../assets/line.svg';

const VerificationForm = () => {
    return (
        <Container>
            <Label htmlFor="verification">Write the verification code below</Label>
            <ContainerV>
                <Code />
                <Code1 />
                <Code2 />
                <Code3 />
            </ContainerV>
            <Button type="button">send</Button>
            <Line src={line} alt="line" />
            <Text>Already have an account? <Span to="/login">Login.</Span></Text>
        </Container>
    );
};

export default VerificationForm;