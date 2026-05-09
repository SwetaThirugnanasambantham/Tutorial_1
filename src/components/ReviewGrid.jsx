function ReviewGrid({ reviews }) {
  const ratingColor = (r) => {
    if (r >= 8) return '#22c55e';
    if (r >= 5) return '#f59e0b';
    return '#ef4444';
  };

  const genreEmoji = (g) => {
    const map = {
      Action: '💥', Comedy: '😂', Drama: '🎭', Horror: '👻',
      'Sci-Fi': '🚀', Thriller: '🔪', Romance: '💕',
      Documentary: '📽️', Animation: '🎨', Other: '🎞️',
    };
    return map[g] || '🎞️';
  };

  const renderStars = (n) => {
    const filled = Math.round(n / 2);
    return (
      <span className="stars">
        {'★'.repeat(filled)}
        <span className="stars-empty">{'☆'.repeat(5 - filled)}</span>
      </span>
    );
  };

  return (
    <div className="review-grid-wrap">
      <h2>🍿 Community Reviews <span className="count-badge">{reviews.length}</span></h2>

      {reviews.length === 0 ? (
        <div className="empty-state">
          <div className="empty-icon">🎬</div>
          <p>No reviews yet — be the first critic!</p>
        </div>
      ) : (
        <div className="review-grid">
          {reviews.map(r => (
            <article key={r.id} className="review-card">
              <div className="card-top">
                <div className="movie-info">
                  <h3 className="movie-title">{r.movieTitle}</h3>
                  <span className="genre-tag">{genreEmoji(r.genre)} {r.genre}</span>
                </div>
                <div className="score-circle" style={{ borderColor: ratingColor(r.rating), color: ratingColor(r.rating) }}>
                  {r.rating}<span className="score-max">/10</span>
                </div>
              </div>

              <div className="card-stars">{renderStars(r.rating)}</div>

              <blockquote className="review-body">"{r.reviewText}"</blockquote>

              <div className="card-footer">
                <span className="reviewer">👤 {r.reviewerName}</span>
                <span className="posted-at">{r.postedAt}</span>
              </div>
            </article>
          ))}
        </div>
      )}
    </div>
  );
}

export default ReviewGrid;
