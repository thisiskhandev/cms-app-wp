import { useQuery, gql } from "@apollo/client";
import Cards from "../components/Cards";
const GET_POSTS = gql`
  query getAllPosts {
    posts(first: 9) {
      nodes {
        date
        uri
        status
        excerpt
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
      }
    }
  }
`;

export default function Posts() {
  const { loading, error, data } = useQuery(GET_POSTS);
  if (loading) {
    return <p>Loading....</p>;
  }
  if (error) {
    return <code>{error.message}</code>;
  }
  const posts = data.posts.nodes;

  return <Cards posts={posts} />;
}
