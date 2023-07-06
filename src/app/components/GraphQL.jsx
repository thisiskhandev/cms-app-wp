import { useQuery, gql } from "@apollo/client";

const GET_POSTS = gql`
  query getAllPosts {
    posts(first: 1) {
      nodes {
        date
        uri
        title
        featuredImage {
          node {
            sourceUrl
          }
        }
        status
      }
    }
  }
`;

export default function GraphQL() {
  const { loading, error, data } = useQuery(GET_POSTS);
  if(loading) {
    console.log(loading);
    return <p>loading...</p>
  }
  if (error) {
    console.log(error);
    return <p>Error: {error.message}</p>
  }
  const posts = data.posts.nodes;
  console.log(posts);
  return <div>GraphQL</div>;
}
