import { Container, Image, Info, Title, Button } from './styles'

const CategoryItem = ({ category }) => {
    return (
        <Container>
            <Image src={category.img} />
            <Info>
                <Title>{category.title}</Title>
                <Button>Shop now</Button>
            </Info>
        </Container>
    )
}

export default CategoryItem
