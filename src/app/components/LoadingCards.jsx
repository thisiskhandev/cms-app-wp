import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

export default function LoadingCards() {
  const content = (
    <>
      <div>
        <Skeleton count={1} height={170} borderRadius={0} />
      </div>
      <div style={{ margin: 10 }}>
        <Skeleton count={1} height={40} />
      </div>
      <div style={{ margin: 10 }}>
        <Skeleton count={4} />
      </div>
      <div
        style={{
          margin: 10,
          display: "flex",
          gap: 10,
        }}
      >
        <Skeleton count={1} height={25} width={120} />
        <Skeleton count={1} height={25} width={120} />
      </div>
    </>
  );

  const repetition = 6;
  const renderedContent = Array.from({ length: repetition }, (_, index) => (
    <section key={index} style={{...styleCard}}>{content}</section>
  ));

  return <main style={{display: "grid", gridTemplateColumns: "auto auto auto", gap: 10}}>{renderedContent}</main>;
}

const styleCard = {
  margin: 10,
  boxShadow: "0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)",
  borderRadius: 8,
  paddingBottom: 10,
};
