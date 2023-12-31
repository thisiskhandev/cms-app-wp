import { useState } from "react";
import { useQuery } from "@apollo/client";
import Cards from "../components/Cards";
import LoadingCards from "../components/LoadingCards";
import { GET_POSTS } from "./api";

export default function Posts() {
  const [isLoadingMore, setIsLoadingMore] = useState(false);
  const { loading, error, data, fetchMore } = useQuery(GET_POSTS, {
    variables: { first: 6 },
  });
  
  const handleLoadMore = () => {
    const { endCursor, hasNextPage } = data.posts.pageInfo;

    if (!hasNextPage) {
      return; // No more posts to fetch, return early
    }

    setIsLoadingMore(true);

    fetchMore({
      variables: { first: 6, after: endCursor },
      updateQuery: (previousResult, { fetchMoreResult }) => {
        const newPosts = fetchMoreResult.posts.nodes;
        const pageInfo = fetchMoreResult.posts.pageInfo;

        setIsLoadingMore(false);

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

  if (loading && !isLoadingMore) {
    return <LoadingCards />;
  }
  if (error) {
    return <code>{error.message}</code>;
  }
  const posts = data.posts.nodes;
  const hasNextPage = data.posts.pageInfo.hasNextPage;
  // console.log(posts);
  return (
    <>
      <Cards
        posts={posts}
        hasNextPage={hasNextPage}
        handleLoadMore={handleLoadMore}
        isLoadingMore={isLoadingMore}
      />
      {/* {hasNextPage && <button onClick={handleLoadMore}>Load More</button>} */}
    </>
  );
}
