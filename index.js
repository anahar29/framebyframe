import { useState } from "react";

export default function Home() {
  const [mood, setMood] = useState("");

  const moodSuggestions = {
    romance: [
      {
        title: "Serendipity",
        src: "https://image.tmdb.org/t/p/w500/5fX6CGrvU4ZBac0r0syGXFz7P94.jpg",
      },
      {
        title: "Before Sunrise",
        src: "https://image.tmdb.org/t/p/w500/6v5bYBZZgKYgVbq3DoRoPRtQVDp.jpg",
      },
      {
        title: "How to Lose a Guy in 10 Days",
        src: "https://image.tmdb.org/t/p/w500/3A3iNvJBiZFDg8M3Kcmf1MvI4vQ.jpg",
      },
      {
        title: "Pride & Prejudice",
        src: "https://image.tmdb.org/t/p/w500/8Bfss55z4Bu9cRtbD2JDpyj6XU8.jpg",
      },
      {
        title: "Love, Rosie",
        src: "https://image.tmdb.org/t/p/w500/4T8U5KGHtSDMNOZzTTkQn4TTQeH.jpg",
      },
    ],
    dreamy: [
      {
        title: "La La Land",
        src: "https://image.tmdb.org/t/p/w500/uDO8zWDhfWwoFdKS4fzkUJt0Rf0.jpg",
      },
      {
        title: "The Secret Life of Walter Mitty",
        src: "https://image.tmdb.org/t/p/w500/mbD8NVeAdZgVZxXKrrn3A0nSwOh.jpg",
      },
      {
        title: "Amélie",
        src: "https://image.tmdb.org/t/p/w500/f2jEyg0LC5FQhFz79VAPU79fP4S.jpg",
      },
      {
        title: "Big Fish",
        src: "https://image.tmdb.org/t/p/w500/ymqvThcUA0q0USfFkJX7pbnkZ9D.jpg",
      },
      {
        title: "Midnight in Paris",
        src: "https://image.tmdb.org/t/p/w500/9n2tJBplP7YjF3r3g0JCG6SjlTw.jpg",
      },
    ],
    dramatic: [
      {
        title: "Titanic",
        src: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg",
      },
      {
        title: "The Notebook",
        src: "https://image.tmdb.org/t/p/w500/rNzQyW4f8B8cQeg7Dgj3n6eT5k9.jpg",
      },
      {
        title: "Atonement",
        src: "https://image.tmdb.org/t/p/w500/fkJxyTBcD2VgLQicK43PPRJ3J5C.jpg",
      },
      {
        title: "Marriage Story",
        src: "https://image.tmdb.org/t/p/w500/6YytkpmR9RLYH9k8P6eoGT4x6OZ.jpg",
      },
      {
        title: "Revolutionary Road",
        src: "https://image.tmdb.org/t/p/w500/bdNCnI9ZomqXLufJtYOcy9nE6MN.jpg",
      },
    ],
    glamorous: [
      {
        title: "Crazy Rich Asians",
        src: "https://image.tmdb.org/t/p/w500/lHlcgDCZzjdr7vD7Zg3Zf4fY2cP.jpg",
      },
      {
        title: "The Great Gatsby",
        src: "https://image.tmdb.org/t/p/w500/7Dsgf2A4l07P5fTPY1tHGEzK9Rx.jpg",
      },
      {
        title: "Ocean's 8",
        src: "https://image.tmdb.org/t/p/w500/MvYpKlpFukTivnlBhizGbkAe3v.jpg",
      },
      {
        title: "Moulin Rouge!",
        src: "https://image.tmdb.org/t/p/w500/aiX9Q4ARkGmPVhARjTiR2M6Vnw8.jpg",
      },
      {
        title: "House of Gucci",
        src: "https://image.tmdb.org/t/p/w500/oXKgeDzhmkGWEXDWaUjNMEMAmAw.jpg",
      },
    ],
  };

  const currentSuggestions = moodSuggestions[mood.toLowerCase()] || [];

  return (
    <div style={{ backgroundColor: 'black', color: 'white', minHeight: '100vh', padding: '2rem' }}>
      <h1 style={{ fontSize: '2.5rem', fontWeight: 'bold', textAlign: 'center' }}>Frame by Frame 🎞️</h1>
      <p style={{ textAlign: 'center', marginTop: '1rem' }}>What feeling are you chasing today?</p>
      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '1.5rem' }}>
        <input
          style={{ padding: '0.5rem', color: 'black' }}
          placeholder='romance, dreamy, dramatic, glamorous'
          value={mood}
          onChange={(e) => setMood(e.target.value)}
        />
      </div>
      <div style={{ display: 'flex', overflowX: 'auto', marginTop: '2rem', gap: '1rem' }}>
        {currentSuggestions.map((movie, idx) => (
          <div key={idx} style={{ minWidth: '150px' }}>
            <img src={movie.src} alt={movie.title} style={{ width: '100%', borderRadius: '8px' }} />
            <p style={{ textAlign: 'center', marginTop: '0.5rem' }}>{movie.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
