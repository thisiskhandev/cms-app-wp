export async function generateMetadata({ params }) {
  let pageTitle = params.id;
  pageTitle = pageTitle.replaceAll("-", " ");
  let capsLetter = pageTitle.charAt(0).toUpperCase() + pageTitle.slice(1);
  //   console.log(capsLetter);
  return {
    title: capsLetter,
  };
}

export default function DynamicPostsRoute({ params }) {
  // console.log(params.id);
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
