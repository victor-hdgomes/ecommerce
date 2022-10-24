import { Container } from './styles'

import { categories } from '../../data'

import CategoryItem from './CategoryItem'

const Categories = () => {
    return (
        <Container>
            {
                categories.map(category => (
                    <CategoryItem category={category} key={category.id} />
                ))
            }
        </Container>
    )
}

export default Categories