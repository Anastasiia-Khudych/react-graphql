import { gql, useLazyQuery } from "@apollo/client";
import { useState } from "react"

const GET_CHARACTER_LOCATIONS = gql`
query GetCharacterLocations($name: String!) {
  characters(filter: {
    name: $name
  }) {
    results {
      location {
        name
      }
    }
  }
}`

export default function Search() {
  const [name, setName] = useState('');

  const [getLocations, { loading, error, data }] = useLazyQuery(GET_CHARACTER_LOCATIONS, {
    variables: {
      name
    }
  })

  if (loading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Something went wrong...</div>
  }
  return (
    <div>
      <input value={name} onChange={(e) => setName(e.target.value)} />
      <button onClick={() => getLocations()}>Search</button>
      {data && (
        <ul>
          {data.characters.results.map((character) => {
            return <li key={character.location.name}>{character.location.name}</li>
          })}
        </ul>
      )}
    </div>
  )
}
