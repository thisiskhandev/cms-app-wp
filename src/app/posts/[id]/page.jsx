import { ApolloProvider, gql, useQuery } from "@apollo/client";
import LoadingCards from "@/app/components/LoadingCards";
import { client } from "@/app/api/client";

export async function generateMetadata({ params }) {
  let pageTitle = params.id;
  pageTitle = pageTitle.replaceAll("-", " ");
  let capsLetter = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
  //   console.log(capsLetter);
  return {
    title: capsLetter,
  };
}

const GET_SINGLE_POST_QUERY = gql`
  query GetSinglePost {
    posts {
      nodes {
        postId
        date
        slug
        status
        title
        featuredImage {
          node {
            sourceUrl
            altText
          }
        }
        content
      }
    }
  }
`;

export default function DynamicPostsRoute({ params }) {
  const { loading, error, data } = useQuery(GET_SINGLE_POST_QUERY);

  if (loading) {
    return <LoadingCards />;
  }
  if (error) {
    return <code>{error.message}</code>;
  }
  const post = data.posts.nodes;
  console.log(post);
  return (
    <ApolloProvider client={client}>
      <div>
        <h1>
          Page Title is{" "}
          <code>
            <mark>{params.id}</mark>
          </code>
        </h1>
      </div>
    </ApolloProvider>
  );
}