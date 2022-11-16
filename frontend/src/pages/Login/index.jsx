import {Container, Wrapper, Title, Form, Input, Button, Link} from './styles'

const Login = () => {
  return (
    <Container>
            <Wrapper>
                <Title>Sign in</Title>
                <Form>
                    <Input placeholder="Username" />
                    <Input placeholder="Password" />
                    <Button>Login</Button>
                    <Link>Do not you remember the password?</Link>
                    <Link>Create a new account</Link>
                </Form>
            </Wrapper>
        </Container>
  )
}

export default Login
