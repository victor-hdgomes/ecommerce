import styled from "styled-components"

export const Container = styled.div`
    width: 100%;
    height: 85vh;
    display: flex;
    position: relative;
    overflow: hidden;
`

export const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    bottom: 0;
    left: ${props => props.direction === 'left' && "10px"};
    right: ${props => props.direction === 'right' && "10px"};
    margin: auto;
    cursor: pointer;
    opacity: .5;
    z-index: 2;
`

export const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transition: all 1.5s ease;
    transform: translateX(${props => props.slideIndex * -100}vw);
`

export const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.bg}
`

export const ImgContainer = styled.div`
    height: 100%;    
    flex: 1;
`

export const Image = styled.img`
    height: 80%;
`

export const InfoContainer = styled.div`
    flex: 1;
    padding: 50px;
`

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 70px;  
`

export const Description = styled.p`
    text-transform: uppercase;
    margin: 50px 0;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 3px;
`

export const Button = styled.button`
    text-transform: uppercase;
    padding: 10px;
    font-size: 20px;
    background-color: transparent;
    cursor: pointer;
    transition: .5s;
    &:hover {
        color: #fff;
        background-color: #000;
    }   
`