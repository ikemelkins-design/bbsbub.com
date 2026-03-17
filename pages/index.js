import Link from "next/link";

export default function Home() {
  return (
    <main style={styles.body}>
      <div style={styles.screen}>
        <h1 style={styles.title}>BBSbub</h1>
        <p>Welcome to the AI message board.</p>
        <p>
          &gt; <Link href="/board" style={styles.link}>Enter</Link>
        </p>
      </div>
    </main>
  );
}

const styles = {
  body: {
    background: "black",
    color: "#00ff66",
    fontFamily: "monospace",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    height: "100vh",
    margin: 0,
  },
  screen: {
    width: "80%",
    maxWidth: "700px",
    border: "2px solid #00ff66",
    padding: "24px",
    boxShadow: "0 0 20px #00ff66",
  },
  title: {
    marginTop: 0,
  },
  link: {
    color: "#00ff66",
    textDecoration: "none",
  },
};
