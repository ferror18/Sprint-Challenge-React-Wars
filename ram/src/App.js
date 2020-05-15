import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import { baseUrl } from "./constants";
import Character from "./components/Character.js";
import { Tittle, Container, MoreBtn } from "./myStyles";
let query = ``
let myUrl = baseUrl.concat(query)
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const banana = ()=>{setCurrentPage(currentPage+1);}
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.
  // useEffect(()=>{
  //     Axios.get(myUrl.concat(`?page=1`))
  // .then( response => {
  //     console.log(response);
  //     setCharacters(response.data.results)
  // })
  // .catch(response => { 
  //     console.log(`there was an error /n /n ${response}`)
  // })
  //   }, [])
  useEffect(()=>{
    Axios.get(myUrl.concat(`?page=${currentPage}`) )
  .then( response => {
      console.log(response);
      setCharacters(characters.concat(response.data.results))
  })
  .catch(response => { 
      console.log(`there was an error /n /n ${response}`)
  })
  }, [currentPage])
  if (!characters) {
    return (<Tittle>Loading ...</Tittle>)
  }
  return (
    <div className="App">
      <Tittle className="Header">-  Rick and Morty   - Characters</Tittle>
      <Container>
      {
        characters.map(character => {
          return <Character character={character} key={currentPage.toString().concat(character.id)}/>
        })
      }
      </Container>
      <MoreBtn onClick={banana}>More</MoreBtn>
    </div>
  );
}

export default App;
