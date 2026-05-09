import { useState } from 'react';

const GENRES = ['Action', 'Comedy', 'Drama', 'Horror', 'Sci-Fi', 'Thriller', 'Romance', 'Documentary', 'Animation', 'Other'];

function ReviewForm({ onSubmitReview }) {
  const [entry, setEntry] = useState({
    reviewerName: '',
    movieTitle: '',
    genre: '',
    rating: '',
    reviewText: '',
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};
    if (!entry.reviewerName.trim()) newErrors.reviewerName = 'Name is required';
    if (!entry.movieTitle.trim()) newErrors.movieTitle = 'Movie title is required';
    if (!entry.genre) newErrors.genre = 'Please select a genre';
    if (!entry.rating || entry.rating < 1 || entry.rating > 10)
      newErrors.rating = 'Rating must be between 1 and 10';
    if (!entry.reviewText.trim() || entry.reviewText.trim().length < 20)
      newErrors.reviewText = 'Review must be at least 20 characters';
    return newErrors;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEntry(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const found = validate();
    if (Object.keys(found).length > 0) {
      setErrors(found);
      return;
    }

    const review = {
      ...entry,
      id: Date.now(),
      postedAt: new Date().toLocaleString(),
    };

    onSubmitReview(review);

    setEntry({ reviewerName: '', movieTitle: '', genre: '', rating: '', reviewText: '' });
    setErrors({});
  };

  const stars = (n) => '★'.repeat(Math.round(n / 2)) + '☆'.repeat(5 - Math.round(n / 2));

  return (
    <div className="review-form-wrap">
      <h2>✍️ Write a Review</h2>
      <p className="form-subtitle">Share what you thought about a film</p>

      <form onSubmit={handleSubmit} className="review-form" noValidate>
        <div className={`field ${errors.reviewerName ? 'field-error' : ''}`}>
          <label htmlFor="reviewerName">Your Name</label>
          <input
            id="reviewerName"
            type="text"
            name="reviewerName"
            value={entry.reviewerName}
            onChange={handleChange}
            placeholder="e.g. Alex Fernandez"
          />
          {errors.reviewerName && <span className="err-msg">{errors.reviewerName}</span>}
        </div>

        <div className={`field ${errors.movieTitle ? 'field-error' : ''}`}>
          <label htmlFor="movieTitle">Movie Title</label>
          <input
            id="movieTitle"
            type="text"
            name="movieTitle"
            value={entry.movieTitle}
            onChange={handleChange}
            placeholder="e.g. Interstellar"
          />
          {errors.movieTitle && <span className="err-msg">{errors.movieTitle}</span>}
        </div>

        <div className="field-row">
          <div className={`field ${errors.genre ? 'field-error' : ''}`}>
            <label htmlFor="genre">Genre</label>
            <select id="genre" name="genre" value={entry.genre} onChange={handleChange}>
              <option value="">Select genre</option>
              {GENRES.map(g => <option key={g} value={g}>{g}</option>)}
            </select>
            {errors.genre && <span className="err-msg">{errors.genre}</span>}
          </div>

          <div className={`field ${errors.rating ? 'field-error' : ''}`}>
            <label htmlFor="rating">Rating (1–10)</label>
            <input
              id="rating"
              type="number"
              name="rating"
              min="1"
              max="10"
              value={entry.rating}
              onChange={handleChange}
              placeholder="8"
            />
            {entry.rating && !errors.rating && (
              <span className="star-preview">{stars(entry.rating)}</span>
            )}
            {errors.rating && <span className="err-msg">{errors.rating}</span>}
          </div>
        </div>

        <div className={`field ${errors.reviewText ? 'field-error' : ''}`}>
          <label htmlFor="reviewText">Your Review</label>
          <textarea
            id="reviewText"
            name="reviewText"
            value={entry.reviewText}
            onChange={handleChange}
            placeholder="Tell us what you loved (or didn't)..."
            rows="5"
          />
          <span className="char-count">{entry.reviewText.length} chars</span>
          {errors.reviewText && <span className="err-msg">{errors.reviewText}</span>}
        </div>

        <button type="submit" className="submit-review-btn">
          🎥 Post Review
        </button>
      </form>
    </div>
  );
}

export default ReviewForm;
