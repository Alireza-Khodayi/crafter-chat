import { gql, useQuery } from '@apollo/client';

const GET_ME = gql`
  query Me {
    me {
      _id
      email
    }
  }
`;

function useGetMe() {
  return useQuery(GET_ME);
}

export { useGetMe };
