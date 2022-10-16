import styled from 'styled-components'

export const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`

export const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`

export const Info = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`

export const Title = styled.h1`
    color: #fff;
    margin-bottom: 20px;
`

export const Button = styled.button`
    text-transform: uppercase;
    border: none;
    padding: 10px;
    cursor: pointer;
    background-color: #fff;
    color: gray;
    font-weight: 600;
    transition: .5s;
    &:hover {
        color: #fff;
        background-color: gray;
    }
`