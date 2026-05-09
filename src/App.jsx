import { useState } from 'react'
import ReviewForm from './components/ReviewForm'
import ReviewGrid from './components/ReviewGrid'
import './App.css'

function App() {
  const [reviews, setReviews] = useState([]);

  const handleNewReview = (review) => {
    setReviews(prev => [review, ...prev]);
  };

  return (
    <div className="portal">
      <header className="portal-header">
        <div className="header-inner">
          <div className="logo">🎬 CineReview</div>
          <h1>Your Ultimate Movie Review Hub</h1>
          <p className="tagline">Watch. Feel. Share. Repeat.</p>
        </div>
      </header>

      <main className="portal-body">
        <div className="layout">
          <aside className="panel form-panel">
            <ReviewForm onSubmitReview={handleNewReview} />
          </aside>

          <section className="panel reviews-panel">
            <ReviewGrid reviews={reviews} />
          </section>
        </div>
      </main>

      <footer className="portal-footer">
        <p>© 2025 CineReview · Built with React + Vite</p>
      </footer>
    </div>
  )
}

export default App
