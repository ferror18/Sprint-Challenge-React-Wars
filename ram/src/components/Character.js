// Write your Character component here
import { Card, CharPortrait, Line } from "../myStyles";
import  React  from "react";

function Character(props) {
    console.log(props);
    
    return (
        <Card>
            <CharPortrait src={props.character.image}/>
            <Line>Apperances: {props.character.episode.length} episodes.</Line>
            <Line>Gender: {props.character.gender}</Line>
            <Line>Location: {props.character.location.name}</Line>
            <Line>Name: {props.character.name}</Line>
            <Line>Origin: {props.character.origin.name}</Line>
            <Line>Species: {props.character.species}</Line>
            <Line>Status: {props.character.status}</Line>
            <Line>Type: {props.character.type}</Line>
        </Card>
    )
}
export default Character