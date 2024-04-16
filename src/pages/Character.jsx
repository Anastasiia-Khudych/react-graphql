import { useParams } from "react-router-dom";
import { useCharacter } from "../hooks/useCharacter"
import './Character.css';

export default function Character() {
  const { id } = useParams();
  const { error, data, loading } = useCharacter(id)
  
  if (error) {
    return <div>Something went wrong...</div>
  }

  if (loading) {
    return <div>Loading...</div>
  }

  return (
    <div className="character">
      <img src={data.character.image} width={750} height={750} />
      <div className="character-content">
        <h1>
          {data.character.name}
        </h1>
        <p>
          {data.character.gender}
        </p>
        <div className="character-episode">
          {data.character.episode.map((episode) => {
            return (
              <div key={episode.name}>
                {episode.name} - <b>{ episode.episode }</b>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}
