import { useQuery, gql } from "@apollo/client";
import Cards from "../components/Cards";
import LoadingCards from "../components/LoadingCards";
const GET_POSTS = gql`
  query GetAllPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
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
      pageInfo {
        endCursor
        hasNextPage
      }
    }
  }
`;


export default function Posts() {
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: 9 },
  });

  const handleLoadMore = () => {
    const { endCursor, hasNextPage } = data.posts.pageInfo;

    if (!hasNextPage) {
      return; // No more posts to fetch, return early
    }

    fetchMore({
      variables: { first: 9, after: endCursor },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newPosts = fetchMoreResult.posts.nodes;
        const pageInfo = fetchMoreResult.posts.pageInfo;

        return {
          posts: {
            __typename: previousResult.posts.__typename,
            pageInfo,
            nodes: [...previousResult.posts.nodes, ...newPosts],
          },
        };
      },
    });
  };

  if (loading) {
    return <LoadingCards />;
  }
  if (error) {
    return <code>{error.message}</code>;
  }
  const posts = data.posts.nodes;
  const hasNextPage = data.posts.pageInfo.hasNextPage;

  return (
    <>
      <Cards posts={posts} hasNextPage={hasNextPage} handleLoadMore={handleLoadMore}/>
      {/* {hasNextPage && <button onClick={handleLoadMore}>Load More</button>} */}
    </>
  );
}

