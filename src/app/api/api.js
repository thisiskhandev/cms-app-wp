import { gql } from "@apollo/client";

export const GET_POSTS = gql`
  query GetAllPosts($first: Int!, $after: String) {
    posts(first: $first, after: $after) {
      nodes {
        postId
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

export const GET_SINGLE_POST_QUERY = gql`
  query GetSinglePost {
    posts(where: { id: 1 }) {
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

// export const GET_SINGLE_POST_QUERY = gql`
//   query GetSinglePost($id: Int!) {
//     posts(where: { id: $id }) {
//       nodes {
//         postId
//         date
//         slug
//         status
//         title
//         featuredImage {
//           node {
//             sourceUrl
//             altText
//           }
//         }
//         content
//       }
//     }
//   }
// `;
