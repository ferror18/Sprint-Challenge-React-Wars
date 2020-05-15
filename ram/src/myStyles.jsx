import styled from 'styled-components'

export const Tittle = styled.h1`
    font-family: 'Press Start 2P', cursive;
    font-size: 4rem;
    font-wheight: bold;
    line-height: 5rem;
`
export const Card = styled.div`
    width: 20%;
    height: 40%;
    box-shadow: 5px 10px #888888;
    border: 1px solid black;
    border-radius: 16px;
    margin: 2% 0;
`
export const CharPortrait = styled.img`
    max-width: 95%;
    border: 1px solid black;
    border-radius: 16px;
    margin: 2% auto;
`
export const Container = styled.div`
    display: flex;
    justify-content: space-evenly;
    align-items: baseline;
    align-content: space-evenly;
    flex-wrap: wrap;
`
export const Line = styled.p`
    font-family: 'Merriweather', serif;
    font-size: .7rem;
    font-wheight: italic;
    line-height: .2rem;
`
export const MoreBtn = styled.button`
    width: 80%;
    border: #005607 1px solid;
    border-radius: 16px;
    background-color: #E1EFE6;
    font-size: 2rem;
    box-shadow: 5px 5px #888888;
    margin: 5% auto;
`
export const StyledSearchBar = styled.input`
    width: 80%;
    heigth: 10%;
    border: #005607 1px solid;
    border-radius: 10px;
    background-color: white;
    font-size: 2rem;
    text-decoration: italics;
    box-shadow: 5px 5px #888888;
    margin: 5% auto;
`