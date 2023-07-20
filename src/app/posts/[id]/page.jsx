"use client";

import { useQuery } from "@apollo/client";
import LoadingCards from "@/app/components/LoadingCards";
import { GET_SINGLE_POST_QUERY } from "@/app/api/api";

export async function generateMetadata({ params }) {
  let pageTitle = params.id;
  pageTitle = pageTitle.replaceAll("-", " ");
  let capsLetter = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
  console.log(capsLetter);
  return {
    title: capsLetter,
  };
}

export default function DynamicPostsRoute({ params }) {
  const { loading, error, data } = useQuery(GET_SINGLE_POST_QUERY);

  if (loading) {
    return <LoadingCards />;
  }
  if (error) {
    return <code>{error.message}</code>;
  }
  const post = data.posts.nodes;
  console.log(params);
  return (
    <div>
      <h1>
        Page Title is{" "}
        <code>
          <mark>{params.id}</mark>
        </code>
      </h1>
    </div>
  );
}
