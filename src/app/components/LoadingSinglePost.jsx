import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import styles from "./component.module.css";
export default function LoadingSinglePost() {
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

  const repetition = 1;
  const renderedContent = Array.from({ length: repetition }, (_, index) => (
    <section key={index} className={styles.style_cards}>
      {content}
    </section>
  ));

  return (
    <main
      className={styles.main_card}
    >
      {renderedContent}
    </main>
  );
}
