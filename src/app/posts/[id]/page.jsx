"use client";

import { useQuery } from "@apollo/client";
import { useSearchParams } from "next/navigation";
import LoadingSinglePost from "@/app/components/LoadingSinglePost";
import { GET_SINGLE_POST_QUERY } from "@/app/api/api";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import dummyImg from "../../../../public/images/dummy-img.png";

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
  const searchParams = useSearchParams();
  const postID = parseInt(searchParams.get("id"));
  // console.log(postID);

  const { loading, error, data } = useQuery(GET_SINGLE_POST_QUERY, {
    variables: { id: postID },
    next: { revalidate: 60 },
    // pollInterval: 120,
    // notifyOnNetworkStatusChange: true,
    // revalidateOnMount: true,
    // revalidateOnFocus: true,
    // revalidateOnReconnect: true,
  });

  if (loading) {
    return <LoadingSinglePost />;
  }
  if (error) {
    return <code>{error.message}</code>;
  }
  const post = data.posts.nodes[0];
  // console.log(params);
  const {
    altText: postImgAlt,
    title: postImgTitle,
    sourceUrl,
  } = post.featuredImage ? post.featuredImage.node : "";

  const { name: authName, firstName, lastName, avatar } = post.author.node;

  let getPostDate = new Date(post.date).getDate();
  let getPostDay = new Date(post.date).getDay();
  let getPostYear = new Date(post.date).getFullYear();

  console.log(post);
  return (
    <>
      <Container>
        {sourceUrl ? (
          <Image
            src={sourceUrl}
            alt={
              postImgAlt !== ""
                ? postImgAlt
                : postImgTitle !== ""
                ? postImgTitle
                : post.title
            }
            width={1080}
            height={400}
            style={{ objectFit: "cover" }}
            priority={true}
          />
        ) : (
          <Image
            src={dummyImg}
            alt={"dummy image"}
            width={1080}
            height={400}
            style={{ objectFit: "cover" }}
          />
        )}

        <Typography
          as="h2"
          sx={{ fontSize: 65, fontWeight: 900, textTransform: "capitalize" }}
        >
          {post.title}
        </Typography>
        <Typography as="h6">
          <strong>Publish Date: </strong>
          {getPostDate + "/" + getPostDay + "/" + getPostYear}
        </Typography>
        <Typography
          as="p"
          color="text.secondary"
          lineHeight={1.5}
          my={3}
          dangerouslySetInnerHTML={{ __html: post.content }}
        />
        <Box display={"flex"} gap={3}>
          <Image
            src={avatar.url}
            alt="avatar"
            width={30}
            height={30}
            style={{ borderRadius: 50 }}
          />
          <Typography
            as="h6"
            textTransform={"capitalize"}
            fontSize={20}
            fontWeight={600}
          >
            {firstName && lastName ? firstName + " " + lastName : authName}
          </Typography>
        </Box>
      </Container>
    </>
  );
}
