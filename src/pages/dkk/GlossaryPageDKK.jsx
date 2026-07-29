import { useState } from 'react';
import { Search, BookOpen } from 'lucide-react';
import flashcardsDKK from '../../data/dkk/flashcardsDKK';

export default function GlossaryPageDKK() {
  const [search, setSearch] = useState('');
  const [filter, setFilter] = useState('Semua');

  const categories = ['Semua', ...new Set(flashcardsDKK.map(c => c.category))];
  const filtered = flashcardsDKK.filter(card => {
    const matchSearch = search === '' ||
      card.front.toLowerCase().includes(search.toLowerCase()) ||
      card.back.toLowerCase().includes(search.toLowerCase());
    const matchCategory = filter === 'Semua' || card.category === filter;
    return matchSearch && matchCategory;
  });

  return (
    <div className="content-section">
      <div className="materi-card fade-in">
        <h3><BookOpen size={20} /> Glossarium DKK</h3>
        <p style={{marginBottom: 20}}>Daftar istilah penting dalam Dasar Kompetensi Keahlian.</p>

        <div className="glossary-search">
          <Search size={18} />
          <input type="text" placeholder="Cari istilah..."
            value={search} onChange={e => setSearch(e.target.value)} />
        </div>

        <div className="glossary-filters">
          {categories.map(cat => (
            <button key={cat} className={`fc-filter-btn ${filter === cat ? 'active' : ''}`}
              onClick={() => setFilter(cat)}>
              {cat}
            </button>
          ))}
        </div>

        <p style={{fontSize:'0.85rem',color:'var(--text-light)',marginBottom:16}}>
          Menampilkan {filtered.length} dari {flashcardsDKK.length} istilah
        </p>

        <div className="glossary-list">
          {filtered.map(card => (
            <div key={card.id} className="glossary-item">
              <div className="glossary-term">{card.front}</div>
              <div className="glossary-cat">{card.category}</div>
              <p className="glossary-def">{card.back}</p>
              {card.example && (
                <div className="glossary-example">
                  <strong>Contoh:</strong> {card.example}
                </div>
              )}
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{textAlign:'center',padding:40,color:'var(--text-light)'}}>
            <BookOpen size={40} style={{marginBottom:12,opacity:0.4}} />
            <p>Tidak ditemukan istilah yang cocok.</p>
          </div>
        )}
      </div>
    </div>
  );
}
