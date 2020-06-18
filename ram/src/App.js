import React, {useState, useEffect} from 'react';
import './App.css';
import Axios from 'axios';
import { baseUrl } from "./constants";
import Character from "./components/Character.js";
import { Tittle, Container, MoreBtn } from "./myStyles";
import SearchBar from './components/SearchBar';
let query = ``
let myUrl = baseUrl.concat(query)
const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [characters, setCharacters] = useState([])
  const [currentPage, setCurrentPage] = useState(1)
  const banana = ()=>{setCurrentPage(currentPage+1);}
  const [searchTerm, setSearchTerm] = useState('')
  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  function filteredCharacters(arr) {
    return arr.filter(item => {
      if (!searchTerm) {
        return item
      }
      if (item.name.toLowerCase().includes(searchTerm)) {
        return item
      }
    })
  }
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

  // useEffect(()=>{
  //   Axios.get(myUrl.concat(`?page=${currentPage}`) )
  // .then( response => {
  //     console.log(response);
  //     setCharacters(filteredCharacters(characters.concat(response.data.results)))
  // })
  // .catch(response => { 
  //     console.log(`there was an error /n /n ${response}`)
  // })
  // }, [currentPage])


  if (!characters) {
    return (<Tittle>Loading ...</Tittle>)
  }
  return (
    <div className="App">
      <Tittle className="Header">-  Rick and Morty   - Characters</Tittle>
      <SearchBar type='text' updateSearchTerm={setSearchTerm}/>
      <Container>
      {
        filteredCharacters(characters).map(character => {
          return <Character character={character} key={currentPage.toString().concat(character.id)}/>
        })
      }
      </Container>
      <MoreBtn onClick={banana}>More</MoreBtn>
    </div>
  );
}

export default App;
