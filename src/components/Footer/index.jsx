import { Facebook, Instagram, Pinterest, Twitter, Room, Phone, MailOutline } from '@mui/icons-material'

import { Container, Left, Center, Right, Logo, Description, SocialContainer, SocialIcon, Title, List, ListItem, ContactItem, Payment } from './styles'

const Footer = () => {
    return (
        <Container>
            <Left>
                <Logo>VICTOR.</Logo>
                <Description>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words wich don't look even slightly believable.</Description>
                <SocialContainer>
                    <SocialIcon color="3b5999">
                        <Facebook />
                    </SocialIcon>
                    <SocialIcon color="e4405f">
                        <Instagram />
                    </SocialIcon>
                    <SocialIcon color="55acee">
                        <Twitter />
                    </SocialIcon>
                    <SocialIcon color="e60023">
                        <Pinterest />
                    </SocialIcon>
                </SocialContainer>
            </Left>

            <Center>
                <Title>Useful links</Title>
                <List>
                    <ListItem>Home</ListItem>
                    <ListItem>Cart</ListItem>
                    <ListItem>Man Fashion</ListItem>
                    <ListItem>Woman Fashion</ListItem>
                    <ListItem>Accessories</ListItem>
                    <ListItem>My Account</ListItem>
                    <ListItem>Order Tracking</ListItem>
                    <ListItem>Wishlist</ListItem>
                    <ListItem>Terms</ListItem>
                </List>
            </Center>

            <Right>
                <Title>Contact</Title>
                <ContactItem>
                    <Room style={{marginRight: "10px"}} /> 622 Dixie Path, South Tobinchester 98336
                </ContactItem>
                <ContactItem>
                    <Phone style={{marginRight: "10px"}} /> +1 234 56 78
                </ContactItem>
                <ContactItem>
                    <MailOutline style={{marginRight: "10px"}} /> contact@victor.dev
                </ContactItem>
                <Payment src="https://i.ibb.co/Qfvn4z6/payment.png" />
            </Right>
        </Container>
    )
}

export default Footer