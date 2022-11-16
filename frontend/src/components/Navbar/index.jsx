import { Search, ShoppingCartOutlined } from '@mui/icons-material';
import { Badge } from '@mui/material';

import { Container, Wrapper, Left, Language, SearchContainer, Input, Center, Logo, Right, MenuItem } from './styles';

const Navbar = () => {
    return (
        <Container>
            <Wrapper>

                <Left>
                    <Language>EN</Language>

                    <SearchContainer>
                        <Input placeholder='Search' />
                        <Search style={{ color: 'gray', fontSize: 16 }} />
                    </SearchContainer>
                </Left>

                <Center>
                    <Logo>VICTOR.</Logo>
                </Center>

                <Right>
                    <MenuItem>REGISTER</MenuItem>
                    <MenuItem>SIGN-IN</MenuItem>
                    <MenuItem>
                        <Badge badgeContent={4} color="primary">
                            <ShoppingCartOutlined />
                        </Badge>
                    </MenuItem>
                </Right>
            </Wrapper>
        </Container>
    )
}

export default Navbar