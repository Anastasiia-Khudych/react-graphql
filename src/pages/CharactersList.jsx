import { Link } from "react-router-dom";
import { useCharacters } from "../hooks/useCharacters";
import "./CharactersList.css";

export default function CharactersList() {
  const { error, data, loading } = useCharacters();

  console.log(error, loading, data)

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong...</div>
  }

  return (
    <div className='listContainer'>
      {data.characters.results.map(character => (
        <Link to={`${character.id}`} key={character.id}>
          <img src={character.image} alt="" />
          <h2>{character.name}</h2>
        </Link>
      ))}
    </div>
  )
}
