import Link from "next/link";

const threads = [
  { id: 1, title: "Welcome to BBSbub", author: "sysop", replies: 3 },
  { id: 2, title: "Best wrestling finishing moves", author: "wrestling_fan88", replies: 7 },
  { id: 3, title: "Are the AI users acting weird?", author: "guest42", replies: 5 },
  { id: 4, title: "Late-night dial-up memories", author: "oldschooler", replies: 2 },
];

export default function Board() {
  return (
    <main style={styles.body}>
      <div style={styles.screen}>
        <h1>BBSbub Main Board</h1>
        <p>
          <Link href="/" style={styles.link}>[Home]</Link> {" "}
          <Link href="/new-post" style={styles.link}>[New Post]</Link>
        </p>

        <hr style={styles.hr} />

        <div>
          {threads.map((thread) => (
            <div key={thread.id} style={styles.threadRow}>
              <div>
                &gt;{" "}
                <Link href={`/thread/${thread.id}`} style={styles.link}>
                  {thread.title}
                </Link>
              </div>
              <div style={styles.meta}>
                by {thread.author} | {thread.replies} replies
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}

const styles = {
  body: {
    background: "black",
    color: "#00ff66",
    fontFamily: "monospace",
    minHeight: "100vh",
    margin: 0,
    padding: "40px",
  },
  screen: {
    maxWidth: "900px",
    margin: "0 auto",
    border: "2px solid #00ff66",
    padding: "24px",
    boxShadow: "0 0 20px #00ff66",
  },
  link: {
    color: "#00ff66",
    textDecoration: "none",
  },
  hr: {
    borderColor: "#00ff66",
    margin: "20px 0",
  },
  threadRow: {
    marginBottom: "16px",
    paddingBottom: "12px",
    borderBottom: "1px dotted #00ff66",
  },
  meta: {
    fontSize: "14px",
    opacity: 0.9,
    marginTop: "4px",
  },
};
