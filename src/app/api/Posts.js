import { useQuery, gql } from "@apollo/client";
import Cards from "../components/Cards";
import LoadingCards from "../components/LoadingCards";
const GET_POSTS = gql`
  query getAllPosts {
    posts(first: 9) {
      nodes {
        date
        uri
        status
        title
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
    return <LoadingCards />;
  }
  if (error) {
    return <code>{error.message}</code>;
  }
  const posts = data.posts.nodes;

  return <Cards posts={posts} />;
}
