
import { useState } from "react";
import "./App.css"; 
import { Post } from "./components/posts/post";

const App = () => {
  const [posts, setPosts] = useState<{ author: string; title: string; postText: string }[]>([]);
  const [name, setName] = useState("");
  const [titulo, setTitulo] = useState("");
  const [message, setMessage] = useState("");
  const [showForm, setShowForm] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !titulo || !message) {
      alert("Por favor, preencha todos os campos!");
      return;
    }
    const newPost = { author: name, title: titulo, postText: message };
    setPosts([...posts, newPost]);
    setName("");
    setTitulo("");
    setMessage("");
  };

  return (
    <div>
      <button
          onClick={() => setShowForm(!showForm)}
          style={{
            display: "block",
            margin: "20px auto",
            padding: "10px 20px",
            cursor: "pointer",
            backgroundColor: "#006edf",
            color: "white",
            border: "none",
            borderRadius: "4px",
          }}
        >
          {showForm ? "Cancelar" : "Criar Novo Post"}
        </button>

      <main style={{ padding: "0px" }}>
      {showForm && (
        <form
          onSubmit={handleSubmit}
          style={{
            display: "flex",
            flexDirection: "column",
            width: "600px",
            padding: "20px",
            borderRadius: "10px",
            backgroundColor: "white",
            margin: "0 auto",
            marginTop: "20px",
          }}
        >
          <h2 style={{
      color: "#333333",
      fontSize: "1.7rem",
      fontWeight: "600",
      marginLeft: "12px",
    }}>Crie um novo post</h2>
          <div
            style={{
              width: "100%",
              marginBottom: "1rem",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <input
              id="name"
              type="text"
              placeholder="Digite seu nome"
              value={name}
              onChange={(e) => setName(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "transparent",
                border: "1px solid #ccc",
                borderRadius: "4px",
                color: "#333"
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              marginBottom: "1rem",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <input
              id="titulo"
              type="text"
              value={titulo}
              placeholder="Digite o título para o seu post"
              onChange={(e) => setTitulo(e.target.value)}
              style={{
                width: "100%",
                padding: "0.5rem",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                 color: "#333"
              }}
            />
          </div>
          <div
            style={{
              width: "100%",
              marginBottom: "1rem",
              justifyContent: "space-between",
              display: "flex",
            }}
          >
            <textarea
              id="message"
              value={message}
              placeholder="Digite o conteúdo do seu post"
              onChange={(e) => setMessage(e.target.value)}
              style={{
                width: "100%",
                padding: "1.5rem",
                backgroundColor: "white",
                border: "1px solid #ccc",
                borderRadius: "4px",
                 color: "#333"
              }}
            />
          </div>
          <button
            type="submit"
            style={{
              display: "flex",
              padding: "0.5rem 1rem",
              cursor: "pointer",
              width: "100px",
              justifySelf: "center",
              textAlign: "center",
              backgroundColor: "#006edf",
              color: "white",
              border: "none",
              borderRadius: "4px",
            }}
          >
            Enviar
          </button>
        </form>
      )}
        <section style={{ marginTop: "20px" }}>
          {posts.map((post, index) => (
            <Post
              key={index}
              author={post.author}
              title={post.title}
              postText={post.postText}
            />
          ))}
        </section>
      </main>
    </div>
  );
};

export default App;