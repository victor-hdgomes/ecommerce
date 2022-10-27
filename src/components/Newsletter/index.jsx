import { Container, Title, Description, InputContainer, Input, Button } from "./styles"
import { Send } from '@mui/icons-material';

const Newsletter = () => {
    return (
        <Container>
            <Title>Newsletter</Title>
            <Description>Get timely updates from your favorites products.</Description>
            <InputContainer>
                <Input placeholder="Type your email" />
                <Button>
                    <Send />
                </Button>
            </InputContainer>
        </Container>
    )
}

export default Newsletter