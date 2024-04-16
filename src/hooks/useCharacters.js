import { useQuery, gql } from '@apollo/client';

const GET_CHARACTERS = gql`
query {
  characters {
    results {
      name
      id
      image
    }
  }
}`;

export const useCharacters = () => {
  const { error, data, loading } = useQuery(GET_CHARACTERS);
  return { error, data, loading }
}