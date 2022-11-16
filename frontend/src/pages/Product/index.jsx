// Styles
import {
    Container,
    ImgContainer,
    Wrapper,
    Image,
    InfoContainer,
    Title,
    Description,
    Price,
    FilterContainer,
    Filter,
    FilterTitle,
    FilterColor,
    FilterSize,
    FilterSizeOption,
    AddContainer,
    AmountContainer,
    Amount,
    Button
} from './styles'

// Components
import Announcement from '../../components/Announcement'
import Navbar from '../../components/Navbar'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

// MUI
import { Add, Remove } from '@mui/icons-material'

const Product = () => {
    return (
        <Container>

            <Announcement />

            <Navbar />

            <Wrapper>
                <ImgContainer>
                    <Image src='https://i.ibb.co/S6qMxwr/jean.jpg' />
                </ImgContainer>

                <InfoContainer>
                    <Title>Denim Jumpsuit</Title>
                    <Description>
                        Lorem Ipsum dolor sit amet, consectetur adipiscing elit. Donec venenatis, dolor in finibus malesuada, lectus
                        ipsum porta nunc, at iaculis arcu nisi sed mauris. Nulla fermentum vestibulum ex, eget tristique tortor pretium ut.
                        Curabitur elit justo, consequat id condimentum ac, volutpat ornare.
                    </Description>
                    <Price>$ 20</Price>

                    <FilterContainer>
                        <Filter>
                            <FilterTitle>Color</FilterTitle>
                            <FilterColor color="black" />
                            <FilterColor color="darkblue" />
                            <FilterColor color="gray" />
                        </Filter>
                        <Filter>
                            <FilterTitle>Size</FilterTitle>
                            <FilterSize>
                                <FilterSizeOption>XS</FilterSizeOption>
                                <FilterSizeOption>S</FilterSizeOption>
                                <FilterSizeOption>M</FilterSizeOption>
                                <FilterSizeOption>L</FilterSizeOption>
                                <FilterSizeOption>XL</FilterSizeOption>
                            </FilterSize>
                        </Filter>
                    </FilterContainer>

                    <AddContainer>
                        <AmountContainer>
                            <Remove/>
                            <Amount>1</Amount>
                            <Add/>
                        </AmountContainer>
                        <Button>Add to cart</Button>
                    </AddContainer>
                </InfoContainer>
            </Wrapper>

            <Newsletter />

            <Footer />

        </Container>
    )
}

export default Product
