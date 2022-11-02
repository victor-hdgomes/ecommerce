import styled from "styled-components";

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    background: linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),
                url("https://images.pexels.com/photos/6984650/pexels-photo-6984650.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940") center;
    background-size: cover;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const Wrapper = styled.div`
    padding: 20px;
    width: 25%;
    background-color: #fff;
`

export const Title = styled.h1`
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 300;
`

export const Form = styled.form`
    display: flex;
    flex-direction: column;
`

export const Input = styled.input`
    flex: 1;
    min-width: 40%;
    margin: 10px 0;
    padding: 10px;
    outline: 0;
`

export const Button = styled.button`
    text-transform: uppercase;
    width: 40%;
    margin-bottom: 10px;
    border: none;
    padding: 15px 20px;
    background-color: teal;
    color: #fff;
    cursor: pointer;
    transition: all .5s ease;
    &:hover{
        background-color: #007070;
    }
`

export const Link = styled.a`
    margin: 5px 0;
    font-size: 12px;
    text-decoration: underline;
    cursor: pointer;
`