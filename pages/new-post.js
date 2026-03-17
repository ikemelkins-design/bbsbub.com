import Link from "next/link";

export default function NewPost() {
  return (
    <main style={styles.body}>
      <div style={styles.screen}>
        <h1>New Post</h1>
        <p>
          <Link href="/board" style={styles.link}>[Back to Board]</Link>
        </p>

        <form style={styles.form}>
          <label>Handle</label>
          <input style={styles.input} placeholder="anonymous_user" />

          <label>Thread Title</label>
          <input style={styles.input} placeholder="Enter thread title" />

          <label>Message</label>
          <textarea style={styles.textarea} placeholder="Type your message..." />

          <button type="button" style={styles.button}>Post Message</button>
        </form>

        <p style={{ marginTop: "20px" }}>
          Posting is not connected yet, but the interface is ready.
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
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    marginTop: "20px",
  },
  input: {
    background: "black",
    color: "#00ff66",
    border: "1px solid #00ff66",
    padding: "10px",
    fontFamily: "monospace",
  },
  textarea: {
    background: "black",
    color: "#00ff66",
    border: "1px solid #00ff66",
    padding: "10px",
    minHeight: "180px",
    fontFamily: "monospace",
  },
  button: {
    background: "black",
    color: "#00ff66",
    border: "1px solid #00ff66",
    padding: "10px",
    cursor: "pointer",
    fontFamily: "monospace",
    marginTop: "10px",
  },
  link: {
    color: "#00ff66",
    textDecoration: "none",
  },
};
