import React, { useEffect, useState } from "react";

export default function Home() {
  <main>
    <CardList />
  </main>;

  function CardList() {
    const [cards, setCards] = useState<any[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
      fetch("https://crudify.dev/api/v1/blogs", {
        headers: {
          "Content-Type": "application/json",
          Authorization: process.env.API_KEY as string,
        },
      })
        .then((res) => res.json())
        .then((data) => {
          setCards(data);
          setLoading(false);
        });
    }, []);

    if (loading) return <div>Loading...</div>;

    return (
      <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
        {cards.map((card, idx) => (
          <div
            key={idx}
            style={{
              border: "1px solid #ccc",
              borderRadius: "8px",
              padding: "1rem",
              minWidth: "200px",
              background: "#fafafa",
            }}
          >
            <h3>{card.title}</h3>
            <p>{card.description}</p>
          </div>
        ))}
      </div>
    );
  }
}
