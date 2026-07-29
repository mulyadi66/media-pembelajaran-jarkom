import { useState } from 'react';
import { RotateCcw, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Flashcard({ cards }) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [flipped, setFlipped] = useState(false);
  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', ...new Set(cards.map(c => c.category))];
  const filtered = filter === 'Semua' ? cards : cards.filter(c => c.category === filter);
  const card = filtered[currentIndex];

  const goNext = () => {
    setFlipped(false);
    setCurrentIndex(i => (i + 1) % filtered.length);
  };

  const goPrev = () => {
    setFlipped(false);
    setCurrentIndex(i => (i - 1 + filtered.length) % filtered.length);
  };

  const handleFilter = (cat) => {
    setFilter(cat);
    setCurrentIndex(0);
    setFlipped(false);
  };

  if (!card) return null;

  return (
    <div className="flashcard-section">
      {/* Category filter */}
      <div className="fc-filters">
        {categories.map(cat => (
          <button key={cat} className={`fc-filter-btn ${filter === cat ? 'active' : ''}`}
            onClick={() => handleFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Counter */}
      <div className="fc-counter">{currentIndex + 1} / {filtered.length}</div>

      {/* Card */}
      <div className="fc-card-wrapper" onClick={() => setFlipped(!flipped)}>
        <div className={`fc-card ${flipped ? 'flipped' : ''}`}>
          <div className="fc-front">
            <span className="fc-category">{card.category}</span>
            <h3 className="fc-term">{card.front}</h3>
            <span className="fc-hint">Klik untuk melihat penjelasan</span>
          </div>
          <div className="fc-back">
            <span className="fc-category">{card.category}</span>
            <p className="fc-definition">{card.back}</p>
            {card.example && (
              <div className="fc-example">
                <strong>Contoh:</strong> {card.example}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Navigation */}
      <div className="fc-nav">
        <button className="btn btn-secondary" onClick={goPrev} disabled={filtered.length <= 1}>
          <ChevronLeft size={18} /> Sebelumnya
        </button>
        <button className="btn btn-secondary" onClick={() => setFlipped(!flipped)}>
          <RotateCcw size={16} /> Balik
        </button>
        <button className="btn btn-primary" onClick={goNext} disabled={filtered.length <= 1}>
          Selanjutnya <ChevronRight size={18} />
        </button>
      </div>

      {/* Progress dots */}
      <div className="fc-dots">
        {filtered.map((_, i) => (
          <span key={i} className={`fc-dot ${i === currentIndex ? 'active' : ''} ${i < currentIndex ? 'visited' : ''}`}
            onClick={() => { setCurrentIndex(i); setFlipped(false); }} />
        ))}
      </div>
    </div>
  );
}
