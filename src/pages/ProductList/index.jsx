// Style
import { Container, Title, FilterContainer, Filter, FilterText, Select, Option } from './styles'

// Components
import Announcement from '../../components/Announcement'
import Navbar from '../../components/Navbar'
import Products from '../../components/Products'
import Newsletter from '../../components/Newsletter'
import Footer from '../../components/Footer'

const ProductList = () => {
    return (
        <Container>

            <Announcement />

            <Navbar />

            <Title>Dresses</Title>

            <FilterContainer>
                <Filter>
                    <FilterText>Filter Products: </FilterText>
                    <Select>
                        <Option disabled selected>Color</Option>
                        <Option>White</Option>
                        <Option>Black</Option>
                        <Option>Red</Option>
                        <Option>Blue</Option>
                        <Option>Yellow</Option>
                        <Option>Green</Option>
                    </Select>
                    <Select>
                        <Option disabled selected>Size</Option>
                        <Option>XS</Option>
                        <Option>S</Option>
                        <Option>M</Option>
                        <Option>L</Option>
                        <Option>XL</Option>
                    </Select>
                </Filter>
                <Filter>
                    <FilterText>Sort Products: </FilterText>
                    <Select>
                        <Option disabled selected>Newest</Option>
                        <Option>Price &#40;asc&#41;</Option>
                        <Option>Price &#40;desc&#41;</Option>
                    </Select>
                </Filter>
            </FilterContainer>

            <Products />

            <Newsletter />

            <Footer />

        </Container>
    )
}

export default ProductList
