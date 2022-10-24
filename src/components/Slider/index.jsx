import { useState } from "react";

import { sliderItems } from "../../data";

import { ArrowLeftOutlined, ArrowRightOutlined } from '@mui/icons-material';

import { Container, Arrow, Button, Slide, Description, Title, Image, InfoContainer, Wrapper, ImgContainer } from './styles'

const Slider = () => {

    const [slideIndex, setSlideIndex] = useState(0)

    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 2)
        } else {
            setSlideIndex(slideIndex < 2 ? slideIndex + 1 : 0)
        }
    }

    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <ArrowLeftOutlined />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {
                    sliderItems.map(slide => (
                        <Slide bg={slide.bg} key={slide.id} >
                            <ImgContainer>
                                <Image src={slide.img} />
                            </ImgContainer>
                            <InfoContainer>
                                <Title>{slide.title}</Title>
                                <Description>{slide.desc}</Description>
                                <Button>Show now</Button>
                            </InfoContainer>
                        </Slide>
                    ))
                }
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <ArrowRightOutlined />
            </Arrow>
        </Container>
    )
}

export default Slider